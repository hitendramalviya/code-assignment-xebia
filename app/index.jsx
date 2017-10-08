// import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './containers/App';
import configureStore from './store/configureStore';
import { getAuthUser } from './util/util';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';


const store = configureStore({
  auth: getAuthUser(),
  plants: {
    searching: false,
    searchResult: []
  }
});

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('applicationHost')
);
