import React, { Component } from 'react';
import { HashRouter, BrowserRouter, Route } from 'react-router-dom';

import NavBar from '../navbar';
import SideBar from '../sidebar';
import ListView from '../list-view';
import DetailView from '../detail-view';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route path='*' component={NavBar} />
          <Route path='*' component={SideBar} />
          <Route exact path='/' component={ListView} />
          <Route path='/detail/:hex' component={DetailView} />
        </div>
      </HashRouter>
    );
  }
}