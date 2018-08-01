import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

const DetailsComponent = ({ data, id }) => (
  <Container style={{ padding: '50px 20px' }}>
    {console.log(data)}
    <Row>
      <Col xs="12">
        <h1>
          Details
        </h1>
        <h2>
          ID:
          {' '}
          {id}
        </h2>
        <p>
          Summary: Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        </p>
      </Col>
    </Row>
  </Container>
);

DetailsComponent.propTypes = {
  data: PropTypes.shape({}),
  id: PropTypes.node,
}

DetailsComponent.defaultProps = {
  data: {},
  id: 1,
}

export default DetailsComponent;
