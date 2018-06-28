import React, { Component } from 'react';

export default class DetailItem extends Component {
  render() {
    const { color } = this.props;
    const hexCode = `#${color.hexCode}`;

    return (
      <section className='detail-item'>
        <div className='list-item'>
          <div 
            className='list-item-color'
            style={{ backgroundColor: hexCode }}>
          </div>
          <p>{hexCode}</p>
        </div>
      </section>
    );
  }
}