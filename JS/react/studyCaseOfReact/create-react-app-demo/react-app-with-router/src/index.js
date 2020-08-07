import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom'

import './index.css';
import App from './component/app';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

