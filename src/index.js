import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import 'typeface-merriweather';
import 'typeface-source-sans-pro';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import registerServiceWorker from './registerServiceWorker';

const init = (API_URL) => {
  const App = require('./App').default;

  localStorage.setItem('API_URL', API_URL);
  ReactDOM.render(<App />, document.getElementById('root'));
  registerServiceWorker();
};

axios
  .get('/config/api.json')
  .then((response) => {
    // Use API config
    init(response.data.API_URL);
  })
  .catch(() => {
    // Use Mock API
    init('http://jsonplaceholder.typicode.com');
  });
