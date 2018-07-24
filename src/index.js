import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

axios
  .get('/api.json')
  .then((response) => {
    window.API_URL = response.data.API_URL;
    ReactDOM.render(<App />, document.getElementById('root'));
    registerServiceWorker();
  });
registerServiceWorker();
