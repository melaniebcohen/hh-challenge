import React, { Component } from 'react';

export default class SideBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      colorList: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Brown', 'Gray']
    };
  }

  render() {
    return (
      <section className='sidebar'>
        <button>Random Color</button>
        <ul>
          {this.state.colorList.map(color => {
            return <li key={color}>{color}</li>
          })}
        </ul>
      </section>
    );
  }
}