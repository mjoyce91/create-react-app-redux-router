import api from '../api';
import mockData from '../__mocks__/data';
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
  api.get(/* '/data' */'/posts')
    .then(() => {
      dispatch(firstAction(mockData.airports));
    })
    .catch(() => {
      dispatch(firstAction(mockData.airports));
    });
  }
}

export function getDetails(id) {
  return (dispatch) => {
  api.get(/* `/data/${id}` */'/posts')
    .then(() => {
      const airport = mockData.airports.airport.find(f => f.shortcode === id) || { t: 1 };
      dispatch(secondAction(airport));
    })
    .catch(() => {
      const airport = mockData.airports.airport.find(f => f.shortcode === id) || { t: 1 };
      dispatch(secondAction(airport));
    });
  }
}
