import React, { Component } from 'react';

export default class DetailListItem extends Component {
  constructor (props) {
    super(props);
    this.findOpacity = this.findOpacity.bind(this);
  }

  findOpacity() {
    let opacity;

    if (this.props.id === 'detail-item-1') return opacity = '85%';
    if (this.props.id === 'detail-item-2') return opacity = '70%';
    if (this.props.id === 'detail-item-3') return opacity = '55%';
    if (this.props.id === 'detail-item-4') return opacity = '40%';
    if (this.props.id === 'detail-item-5') return opacity = '25%';
  }

  render() {
    const { color, id } = this.props;
    const hexCode = `#${color.hexCode}`;
    const hexOpacity = `${this.findOpacity()} opacity`;

    return (
      <div className='detail-list-item'>
        <div 
          className='detail-list-color'
          id={id}
          style={{ backgroundColor: hexCode }}>
        </div>
        <p>{color.colorName}</p>
        <p>{hexOpacity}</p>
      </div>
    );
  }
}