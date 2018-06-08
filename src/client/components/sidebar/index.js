import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { randomFetchRequest } from '../../actions/color-actions.js';

class SideBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      colorList: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Brown', 'Gray'],
    };
    this.buttonSelect = this.buttonSelect.bind(this);
  }

  buttonSelect() {
    return this.props.randomFetch()
    .then(() => this.props.history.push('/random'))
  }
  
  render() {
    return (
      <section className='sidebar'>
        <button onClick={this.buttonSelect}>Random Color</button>
        <ul>
          {this.state.colorList.map(color => {
            return <li key={color}>{color}</li>
          })}
        </ul>
      </section>
    );
  }
}

let mapStateToProps = (state) => ({
  colors: state.colors,
});

let mapDispatchToProps = (dispatch) => ({
  randomFetch: () => dispatch(randomFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);