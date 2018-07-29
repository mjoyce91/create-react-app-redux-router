import api from '../api';

export function firstAction(data) {
  return {
    type: 'SET_FIRST_REDUCER',
    data,
  };
}

export function secondAction(data) {
  return {
    type: 'SET_SECOND_REDUCER',
    data,
  };
}

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
