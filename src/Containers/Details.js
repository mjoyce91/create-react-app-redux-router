import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Details from '../Components/Details';
import { getDetails } from '../actions/firstAction';

class DetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
    }
  }

  componentWillMount() {
    const { getData } = this.props;
    const { id } = this.state;
    getData(id);
  }

  render() {
    const { data } = this.props;
    return (
      <Details data={data} />
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
};

const mapStateToProps = state => ({
  data: state.secondReducer,
});

export const mapDispatchToProps = dispatch => ({
  getData: (id) => dispatch(getDetails(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);
