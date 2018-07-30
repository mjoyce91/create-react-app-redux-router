import api from '../api';
import { types } from './types';

/**
 * Generates a function in the form of :
 * -------------------------------------
 *   function ('ACTION_TYPE', ...args) {
 *     return {
 *       type: 'SET_FIRST_REDUCER',
 *       ...args,
 *     };
 *   }
 * -------------------------------------
 */
function makeActionCreator(type, ...argNames) {
  return function (...args) {
    const action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })

    return action
  }
}

/**
 * Action Creators
 */
export const firstAction = makeActionCreator(types.SET_FIRST_REDUCER, 'data');
export const secondAction = makeActionCreator(types.SET_SECOND_REDUCER, 'data');

/**
 * Actions
 */
export function getAirports() {
  return (dispatch) => {
    api
      .get('/posts')
      .then((response) => {
        const data = response.data || [];
        dispatch(firstAction(data));
      })
      .catch(() => {
        dispatch(firstAction([]));
      });
  }
}

export function getDetails(id) {
  return (dispatch) => {
    api
      .get(`/posts/${id}`)
      .then((response) => {
        let data = response.data;

        if(typeof(data) === 'array') {
           data = data.slice(0, 1)
        }

        dispatch(secondAction(data));
      })
      .catch(() => {
        dispatch(secondAction({}));
      });
  }
}
