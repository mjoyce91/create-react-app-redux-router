import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class HomePageContainer extends Component {
  componentWillMount() {
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <Link to="/">
              Create React App
            </Link>
          </h1>
        </header>
      </div>
    )
  }
};

export default HomePageContainer;
