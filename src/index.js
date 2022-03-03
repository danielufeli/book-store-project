import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import App from './components/App';
import './style.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore}>
      <Router>
        <div className="container-fluid app shadow">
          <App />
        </div>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
