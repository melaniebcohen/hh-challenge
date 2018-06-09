import React, { Component } from 'react';

export default class DetailItem extends Component {
  render() {
    let hexCode = `#${this.props.color.hexCode}`;

    return (
      <section className='detail-item'>
        <div className='list-item'>
          <div 
            className='list-item-color'
            style={{ backgroundColor: hexCode }}>
          </div>
          <p>{this.props.color.colorName}</p>
          <p>{hexCode}</p>
        </div>
      </section>
    );
  }
}