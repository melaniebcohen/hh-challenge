import React, { Component } from 'react';
import { connect } from 'react-redux';
import { colorFetchRequest } from '../../actions/color-actions.js';

import ListItem from '../list-item';

class ListView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentColor: '#cffff1',
      index: 0,
      colors: [],
    }
  }

  componentWillMount() {
    return this.props.colorFetch(this.state.index)
    .then(res => {
      this.setState({
        colors: this.props.colors,
      })
    })
  }

  render() {
    console.log(this.state.colors)
    return (
      <section className='list-view'>
        {this.state.colors
          ? this.state.colors.map(color => {
            return <ListItem key={color._id} color={color} />
          })
          : null
        }
      </section>
    );
  }
}

let mapStateToProps = (state) => ({
  colors: state.colors,
});

let mapDispatchToProps = (dispatch) => ({
  colorFetch: (index) => dispatch(colorFetchRequest(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListView);