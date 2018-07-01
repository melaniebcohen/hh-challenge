import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ListItem extends Component {
  render() {
    const { color, history } = this.props;
    const hexCode = `#${color.hexCode}`;
    
    return (
      <div 
        className='list-item'
        onClick={() => history.push(`/detail/${color.hexCode}`)}>
        <div className='list-item-color' style={{ backgroundColor: hexCode }}></div>
        <p>{hexCode}</p>
      </div>
    );
  }
}

export default withRouter(ListItem);