import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from '../navbar';
import SideBar from '../sidebar';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='*' component={NavBar} />
          <Route path='*' component={SideBar} />
        </div>
      </BrowserRouter>
    );
  }
}