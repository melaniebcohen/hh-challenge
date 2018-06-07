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
    }
  }

  componentWillMount() {
    return this.props.colorFetch(this.state.index)
      .then(res => console.log(res.body));
  }

  render() {
    return (
      <section className='list-view'>
        <ListItem color={this.state.currentColor} />
      </section>
    );
  }
}

let mapDispatchToProps = (dispatch) => ({
  colorFetch: (index) => dispatch(colorFetchRequest(index)),
});

export default connect(null, mapDispatchToProps)(ListView);