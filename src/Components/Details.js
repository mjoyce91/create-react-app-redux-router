import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Details = ({ data, id }) => (
  <Container style={{ padding: '50px 20px' }}>
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

export default Details;
