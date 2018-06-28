import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserHistory } from 'react-router-dom';
import { allColorsFetchRequest, colorFamilyFetchRequest } from '../../actions/color-actions.js';

import ListItem from '../list-item';

class ListView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      page: 1,
      currentColors: '',
      totalColorCount: 0,
      familyView: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.fetchColors = this.fetchColors.bind(this);
  }

  componentDidMount() {
    if (!this.props.colors && this.props.location.state === undefined) {
      this.fetchColors('all');
    } else if (this.props.location.state !== undefined) {
      this.fetchColors('family');
    }
  }

  componentDidUpdate() {
    if (this.fetchingColors) {
      this.fetchingColors = false;
  
      this.setState({
        currentColors: this.props.colors,
        totalColorCount: this.props.total,
      });
    }
  }

  // fetch color families when a sidebar list item is selected
  componentWillReceiveProps(nextProps) {
    if (this.props.location.state !==  nextProps.location.state) {
      return this.props.colorFamilyFetch(nextProps.location.state, 1)
        .then(res => {
          this.setState({
            currentColors: res.body.colors,
            totalColorCount: res.body.total,
            familyView: true,
          });
        })
        .then(() => this.props.history.location.state === '');
    }
  }

  // fetch colors on page load
  fetchColors(colors, page) {
    this.fetchingColors = true;

    if (colors === 'all') {
      return this.props.allColorsFetch(this.state.page);
    } else if (colors === 'family') {
      return this.props.colorFamilyFetch(this.props.location.state, this.state.page)
        .then(() => this.props.history.push({ state: '' }));
    }
  }

  // handle pagination selections
  handleClick(e) {
    const page = e.target.value;

    if (this.state.familyView) {
      return this.props.colorFamilyFetch(this.props.location.state, page)
        .then(() => {
          this.setState({
            currentColors: this.props.colors,
            totalColorCount: this.props.total,
            page: page,
          });
        });
    } else {
      return this.props.allColorsFetch(page)
        .then(() => {
          this.setState({
            currentColors: this.props.colors,
            totalColorCount: this.props.total,
            page: page,
          });
        });
    }
  }

  render() {
    console.log(this.state)
    const { currentColors, totalColorCount } = this.state;
    const pageNumbers = [];
    const pages = Math.ceil(totalColorCount/12);
    
    for (let i = 1; i <= pages; i++) {
      pageNumbers.push(i);
    }

    return (
      <section className='list-view'>
        {currentColors
          ? currentColors.map(color => {
            return <ListItem 
              key={color._id} 
              color={color} />;
          })
          : null
        }
        <div className='page-list-container'>
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
        </div>
      </section>
    );
  }
}

let mapStateToProps = (state) => ({
  colors: state.colors,
  total: state.total,
});

let mapDispatchToProps = (dispatch) => ({
  allColorsFetch: (page) => dispatch(allColorsFetchRequest(page)),
  colorFamilyFetch: (family, page) => dispatch(colorFamilyFetchRequest(family, page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListView);