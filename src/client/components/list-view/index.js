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
      totalColorCount: 0,
      familyView: false,
      pageSelected: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.location.state = null;

    return this.props.allColorsFetch(this.state.page)
      .then(res => {
        this.setState({
          currentColors: res.body.colors,
          totalColorCount: res.body.total,
          familyView: false,
        });
      });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.state !== nextProps.location.state) {
      return this.props.colorFamilyFetch(nextProps.location.state, this.state.page)
        .then(res => {
          this.setState({
            currentColors: res.body.colors,
            totalColorCount: res.body.total,
            familyView: true,
          });
        });
    }
  }

  handleClick(e) {
    let page = e.target.value;

    if (this.state.familyView) {
      return this.props.colorFamilyFetch(this.props.location.state, page)
        .then(res => {
          this.setState({
            currentColors: res.body.colors,
            totalColorCount: res.body.total,
            page: page,
          });
        });
    } else {
      return this.props.allColorsFetch(page)
        .then(res => {
          this.setState({
            currentColors: res.body.colors,
            totalColorCount: res.body.total,
            page: page,
          });
        });
    }
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
        <div className='col-1'></div>
        <div className='col-2'>
          {this.state.currentColors
            ? this.state.currentColors.map(color => {
              return <ListItem 
                key={color._id} 
                color={color} />;
            })
            : null
          }
        </div>
        <div className='col-3'></div>

        <ul className='page-list'>
          {pageNumbers.length > 1
            ? pageNumbers.map(num => {
              return <li 
                key={num}
                value={num}
                onClick={this.handleClick}>{num}</li>;
            })
            : null}
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
  colorFamilyFetch: (family, page) => dispatch(colorFamilyFetchRequest(family, page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListView);