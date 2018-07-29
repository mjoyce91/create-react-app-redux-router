import api from '../api';
import mockData from '../__mocks__/data';

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
