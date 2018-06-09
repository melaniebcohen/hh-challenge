import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class ListItem extends Component {
  render() {
    let { color, history } = this.props;
    let hexCode = `#${color.hexCode}`;
    
    return (
      <div 
        className='list-item'
        onClick={() => history.push(`/detail/${color.hexCode}`)}>
        <div className='list-item-color' style={{ backgroundColor: hexCode }}></div>
        <p>{color.colorName}</p>
        <p>{hexCode}</p>
      </div>
    );
  }
}

export default withRouter(ListItem);