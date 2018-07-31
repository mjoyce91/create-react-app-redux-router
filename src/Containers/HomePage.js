import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAirports } from '../actions';
import HomePage from '../Components/HomePage';

class HomePageContainer extends Component {
  componentWillMount() {
    const { getData } = this.props;
    getData();
  }

  render() {
    /* const { data } = this.props; */
    return (
      <HomePage />
    )
  }
};

HomePageContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  getData: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  data: state.firstReducer,
});

export const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getAirports()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
