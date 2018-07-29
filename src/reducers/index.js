import { types, defaults } from '../actions/types';

function makeReducer(type, defaultState) {
  return function (state = defaultState, action) {
    return (action.type === type) ? action.data : state;
  };
}

/**
 * Reducers
 */
export const firstReducer = makeReducer(types.SET_FIRST_REDUCER, defaults[types.SET_FIRST_REDUCER]);
export const secondReducer = makeReducer(types.SET_SECOND_REDUCER, defaults[types.SET_SECOND_REDUCER]);
