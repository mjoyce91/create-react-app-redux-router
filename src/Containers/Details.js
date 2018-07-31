import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Details from '../Components/Details';
import { getDetails } from '../actions';

class DetailsContainer extends Component {
  constructor(props) {
    const item = props.match || { params: {} };
    super(props);
    this.state = {
      id: item.params.id,
    }
  }

  componentWillMount() {
    const { getData } = this.props;
    const { id } = this.state;
    getData(id);
  }

  render() {
    const { id } = this.state;
    const { data } = this.props;
    return (
      <Details data={data} id={id} />
    )
  }
};

/* eslint-disable react/no-typos */
DetailsContainer.propTypes = {
  data: PropTypes.shape({}).isRequired,
  getData: PropTypes.func.isRequired,
};
/* eslint-enable react/no-typos */

DetailsContainer.defaultProps = {
  data: {},
  getData: () => {},
};

export const mapStateToProps = state => ({
  data: state.secondReducer,
});

export const mapDispatchToProps = dispatch => ({
  getData: (id) => dispatch(getDetails(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);
