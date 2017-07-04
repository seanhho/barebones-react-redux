import React from 'react';
import ReactDom  from 'react-dom';
import App from './components/App.jsx';

require('file?name=[name].[ext]!./index.html');


ReactDom.render((
  <App>
  </App>
  ), document.getElementById('app'));