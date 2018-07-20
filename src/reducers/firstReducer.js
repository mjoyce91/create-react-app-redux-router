export function firstReducer(state = [], action) {
  switch (action.type) {
    case 'SET_FIRST_REDUCER':
      return action.data;
    default:
      return state;
  }
}

export function secondReducer(state = {}, action) {
  switch (action.type) {
    case 'SET_SECOND_REDUCER':
      return action.data;
    default:
      return state;
  }
}
