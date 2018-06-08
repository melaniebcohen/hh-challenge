import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allColorsFetchRequest } from '../../actions/color-actions.js';
import ListItem from '../list-item';

class RandomView extends Component {
  render() {
    return (
      <section className='detail-view'>
        {this.props.color
        ? <ListItem color={this.props.color} />
        : null
        }

        <button onClick={() => this.props.history.push('/')}>Clear</button>
      </section>
    );
  }
}

let mapStateToProps = (state) => ({
  color: state.color,
});

let mapDispatchToProps = (dispatch) => ({
  allColorsFetch: (index) => dispatch(allColorsFetchRequest(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RandomView);