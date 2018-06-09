import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import colorStore from './reducers/colors-reducer.js';

import App from './components/app';
import './style/main.scss';

import NavBar from './components/navbar';
import SideBar from './components/sidebar';
import ListView from './components/list-view';

const store = colorStore();

class Root extends Component {
  render() {
    return (
      <main>
        <Provider store={store}>
          <App />
        </Provider>
      </main>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));