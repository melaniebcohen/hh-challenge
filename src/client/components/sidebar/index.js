import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { randomFetchRequest, colorFamilyFetchRequest } from '../../actions/color-actions.js';

class SideBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      colorList: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Brown', 'Gray'],
    };
    this.buttonSelect = this.buttonSelect.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  buttonSelect() {
    return this.props.randomFetch()
    .then(res => {
      this.props.history.push(`/detail/${res.body.color.hexCode}`)
    })
  }
  // this.props.history.push({
  //   pathname: '/template',
  //   search: '?query=abc',
  //   state: { detail: response.data }
  // })
      // console.log(this.props.location.pathname)
    // else {
    //   return this.props.colorFamilyFetch(this.props.match.params.color)
    //   .then(res => console.log(res.body))
  
    // }
  // }

  
  handleClick(color) {
    return this.props.history.push({
      pathname: `/`,
      state: color,
    })
  }

  render() {
    return (
      <section className='sidebar'>
        <button onClick={this.buttonSelect}>Random Color</button>
        <ul>
          {this.state.colorList.map(color => {
            return <li 
              value={color}
              key={color}
              onClick={() => this.handleClick(color)}>{color}</li>
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
  colorFamilyFetch: (family) => dispatch(colorFamilyFetchRequest(family)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);