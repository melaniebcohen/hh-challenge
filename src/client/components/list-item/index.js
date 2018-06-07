import React, { Component } from 'react';

export default class ListItem extends Component {
  render() {
    return (
      <div className='list-item'>
        <div 
          className='list-item-color'
          style={{ backgroundColor: this.props.color }}>
        </div>
        <p>{this.props.color}</p>
      </div>
    );
  }
}