import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import Select from 'react-select';
import Card from './Card';

const HomePageComponent = ({ data, options }) => (
  <Container style={{ padding: '50px 20px' }}>
    <h1>
      Home Page
    </h1>
    <Row style={{ padding: '20px 0px' }}>
      <Col xs="4">
        <Select options={options} />
      </Col>
    </Row>
    <Row>
      <Col xs="12">
        {
          data.map(d => (
            <Col key={d.id} lg="4" md="6" sm="12" style={{ float: 'left' }}>
              <Card data={d} />
            </Col>
          ))
        }
      </Col>
    </Row>
  </Container>
);

HomePageComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onFilterChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({})),
}

HomePageComponent.defaultProps = {
  data: [{ id: 1 },{ id: 2 },{ id: 3 }],
  onFilterChange: () => {},
  options: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
}

export default HomePageComponent;
