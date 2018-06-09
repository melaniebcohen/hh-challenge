import React, { Component } from 'react';

export default class DetailItem extends Component {
  render() {
    let { color } = this.props;
    let hexCode = `#${color.hexCode}`;

    return (
      <section className='detail-item'>
        <div className='list-item'>
          <div 
            className='list-item-color'
            style={{ backgroundColor: hexCode }}>
          </div>
          <p>{color.colorName}</p>
          <p>{hexCode}</p>
        </div>
      </section>
    );
  }
}