import React, { Component } from 'react';
import { connect } from 'react-redux';
import { colorFetchRequest } from '../../actions/color-actions.js';

import DetailItem from '../detail-item';
import ListItem from '../list-item';

class DetailView extends Component {
  componentWillMount() {
    return this.props.colorFetch(this.props.match.params.hex)
  }

  render() {
    return (
      <section className='detail-view'>
        {this.props.color
        ? <DetailItem color={this.props.color[0]} />
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
  colorFetch: (hexCode) => dispatch(colorFetchRequest(hexCode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailView);