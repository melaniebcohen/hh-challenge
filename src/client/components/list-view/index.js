import React, { Component } from 'react';
import ListItem from '../list-item';

export default class ListView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentColor: '#cffff1',
    };
  }

  render() {
    return (
      <section className='list-view'>
        <ListItem color={this.state.currentColor} />
      </section>
    );
  }
}