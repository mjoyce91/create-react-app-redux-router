import { types, defaults } from '../actions/types';

/**
 * Generates a function in the form of:
 * -------------------------------------
 *   function reducer(state, action) {
 *     state = state || <defaultState>;
 *     switch (action.type) {
 *       case <type>:
 *         return action.data;
 *       default:
 *         return state;
 *   }
 * -------------------------------------
 */
function makeReducer(type, defaultState) {
  return function (state, action) {
    const newState = state || defaultState;
    return (action.type === type) ? action.data : newState;
  };
}

/**
 * Reducers
 */
export const firstReducer = makeReducer(types.SET_FIRST_REDUCER, defaults[types.SET_FIRST_REDUCER]);
export const secondReducer = makeReducer(types.SET_SECOND_REDUCER, defaults[types.SET_SECOND_REDUCER]);
