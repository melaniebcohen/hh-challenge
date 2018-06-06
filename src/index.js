console.log('Helpful Human Challenge');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

class Root extends Component {
  render() {
    return (
      <main>
        <App />
      </main>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));