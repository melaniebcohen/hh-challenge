import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import NavBar from '../navbar';
import SideBar from '../sidebar';
import ListView from '../list-view';
import DetailView from '../detail-view';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='*' component={NavBar} />
          <Route path='*' component={SideBar} />
          <Route exact path='/' component={ListView} />
          {/* <Route path='/family/:color' component={ListView} /> */}
          {/* <Route path='/random' component={RandomView} /> */}
          <Route path='/detail/:hex' component={DetailView} />
        </div>
      </BrowserRouter>
    );
  }
}