import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { colorFetchRequest } from '../../actions/color-actions.js';

import DetailItem from '../detail-item';
import DetailListItem from '../detail-list-item';

class DetailView extends Component {
  constructor (props) {
    super(props);
    this.createList = this.createList.bind(this);
  }

  componentWillMount() {
    return this.props.colorFetch(this.props.match.params.hex);
  }

  createList() {
    let detailListItems = [];
    
    for (let i = 1; i < 6; i++) {
      let itemId = `detail-item-${i}`;

      detailListItems.push(
        <DetailListItem 
          color={this.props.color}
          id={itemId}
          key={i} 
        />
      );
    }

    return detailListItems;
  }

  render() {
    return (
      <section className='detail-view'>
        {this.props.color
          ? <div className='detail-container'>
            <DetailItem color={this.props.color} />
            <section className='detail-list-container'>
              {this.createList()}
            </section>
            <button onClick={() => this.props.history.push('/')}>Clear</button>
          </div>
          : null
        }
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