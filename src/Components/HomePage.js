import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import Card from './Card';

const HomePageContainer = ({ data }) => (
  <Container className="home-container" style={{ padding: '50px 20px' }}>
    <Row>
      <Col xs="12">
        {
          data.map((data) => (
            <Col key={data.id} lg="4" md="6" sm="12" style={{ float: 'left' }}>
              <Card data={data} />
            </Col>
          ))
        }
      </Col>
    </Row>
  </Container>
);

HomePageContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onFilterChange: PropTypes.func.isRequired,
}

HomePageContainer.defaultProps = {
  data: [],
  onFilterChange: () => {},
}

export default HomePageContainer;
