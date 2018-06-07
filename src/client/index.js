import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './style/main.scss';

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