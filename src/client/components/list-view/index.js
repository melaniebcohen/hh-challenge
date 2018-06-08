import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allColorsFetchRequest, colorFamilyFetchRequest } from '../../actions/color-actions.js';

import ListItem from '../list-item';

class ListView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      page: 1,
      currentColors: [],
      totalColorCount: 101,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.location.state = null;
    return this.props.allColorsFetch(this.state.page)
      .then(res => {
        this.setState({
          currentColors: this.props.colors,
        })
      })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.state !== nextProps.location.state) {
      return this.props.colorFamilyFetch(nextProps.location.state)
        .then(res => {
          this.setState({
            currentColors: res.body.colors,
            totalColorCount: res.body.colors.length,
          })
      })
    }
  }

  handleClick(e) {
    let page = e.target.value;

    return this.props.allColorsFetch(page)
    .then(res => {
      this.setState({
        currentColors: res.body.colors,
        page: page,
      })
    })
  }

  render() {
    let { currentColors, totalColorCount } = this.state;

    let pageNumbers = [];
    let pages = Math.ceil(totalColorCount/12);
    for (let i = 1; i <= pages; i++) {
      pageNumbers.push(i);
    }

    return (
      <section className='list-view'>
        {this.state.currentColors
          ? this.state.currentColors.map(color => {
            return <ListItem 
              key={color._id} 
              color={color} />
          })
          : null
        }

        <ul className='page-list'>
        {pageNumbers.map(num => {
          return <li 
            key={num}
            value={num}
            onClick={this.handleClick}>{num}</li>
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
  allColorsFetch: (page) => dispatch(allColorsFetchRequest(page)),
  colorFamilyFetch: (family) => dispatch(colorFamilyFetchRequest(family)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListView);