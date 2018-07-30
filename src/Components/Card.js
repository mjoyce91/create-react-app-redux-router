import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom'; 
import PropTypes from 'prop-types';
import '../App.css';

class CardComponent extends Component {
  componentWillMount() {
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>
              Card title
            </CardTitle>
            <CardSubtitle>
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the cards content.
            </CardText>
            <Link className="btn btn-primary" to={`/details/${data.id}`}>
              Button
            </Link>
          </CardBody>
        </Card>
      </div>
    )
  }
};

CardComponent.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.number,
  ]),
};

CardComponent.defaultProps = {
  data: {},
};

export default CardComponent;
