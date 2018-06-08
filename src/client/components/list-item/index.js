import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class ListItem extends Component {
  render() {
    let hexCode = `#${this.props.color.hexCode}`
    
    return (
      <div 
        className='list-item'
        onClick={() => this.props.history.push(`/detail/${this.props.color.hexCode}`)}>
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

export default withRouter(ListItem);