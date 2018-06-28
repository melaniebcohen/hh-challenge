import React, { Component } from 'react';
import HHIcon from '../../assets/logo-symbol.svg';

export default class NavBar extends Component {
  render() {
    let innerHTML = {__html: HHIcon};

    return (
      <nav className='nav'>
        <div className='nav-container'>
          <div className='nav-icon' dangerouslySetInnerHTML={innerHTML}></div>
          <div className='nav-search'>
            <input placeholder='Search'></input>
          </div>
        </div>
      </nav>
    );
  }
}