import React, { Component } from 'react';

export default class ListItem extends Component {
  render() {
    let hexCode = `#${this.props.color.hexCode}`
    
    return (
      <div className='list-item'>
        <div 
          className='list-item-color'
          style={{ backgroundColor: hexCode }}>
        </div>
        <p>{this.props.color.colorName}</p>
        <p>{hexCode}</p>
      </div>
    );
  }
}