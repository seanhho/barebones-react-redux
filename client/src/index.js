import React from 'react';
import ReactDom  from 'react-dom';
import App from './components/App.jsx';
import { createStore } from 'redux';
import { todoState } from './reducer.js'

require('file?name=[name].[ext]!./index.html');

var store = createStore(todoState)

ReactDom.render((
  <App>
  </App>
  ), document.getElementById('app'));