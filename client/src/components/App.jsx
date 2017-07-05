import React from 'react';
import { render } from 'react-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  clicky() {
    console.log('what')
  }

  render() {
  return (
    <div>
      <div>A todo list</div>
      <button onClick={this.clicky}>button</button>
    </div>
  )
 } 
}