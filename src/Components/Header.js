import React, { Component } from 'react';
import '../App.css';

class HeaderComponent extends Component {
  componentWillMount() {
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Create React App
          </h1>
        </header>
      </div>
    )
  }
};

export default HeaderComponent;
