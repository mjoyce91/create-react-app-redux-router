import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import Card from './Card';

const HomePageContainer = () => (
  <Container className="home-container" style={{ padding: '50px 20px' }}>
    <Row>
      <Col xs="12">
        {
          [1,2,3].map((m, key) => (
            <Col key={key} lg="4" md="6" sm="12" style={{ float: 'left' }}>
              <Card data={m} />
            </Col>
          ))
        }
      </Col>
    </Row>
  </Container>
);

HomePageContainer.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

HomePageContainer.defaultProps = {
  onFilterChange: () => {},
};

export default HomePageContainer;
