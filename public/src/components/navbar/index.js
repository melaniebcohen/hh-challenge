import React, { Component } from 'react';
import { connect } from 'react-redux';
import HHIcon from '../../assets/logo-symbol.svg';
import { colorFetchRequest, colorFamilyFetchRequest } from '../../actions/color-actions';

class NavBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      page: 1,
      currentColors: '',
      totalColorCount: 0,
      familyView: false,
    };
    this.handleEnter = this.handleEnter.bind(this);
  }
  
  handleEnter(e) {
    const color = e.target.value;

    if (e.key === 'Enter') {
      // If a color is entered - error handling not yet implemented
      // CREDIT: RegEx help from https://www.tjvantoll.com/2013/03/14/better-ways-of-comparing-a-javascript-string-to-multiple-values/
      if (color.match(/^(red|orange|yellow|green|blue|purple|brown|gray)$/i)) {
        let newColor = color.toLowerCase().split('');
        let letter = newColor[0].toUpperCase();
        newColor.splice(0, 1, letter);

        this.props.history.push({
          pathname: `/`,
          state: newColor.join(''),
        });
      } else {
        // If a hex code is entered
        return this.props.colorFetch(color.toUpperCase())
          .then(res => {
            this.props.history.push(`/detail/${res.body.color.hexCode}`);
          });
      }
    } 
  }

  render() {
    let innerHTML = {__html: HHIcon};

    return (
      <nav className='nav'>
        <div className='nav-container'>
          <div className='nav-icon' dangerouslySetInnerHTML={innerHTML}></div>
          <div className='nav-search'>
            <input placeholder='Search' onKeyUp={this.handleEnter}></input>
          </div>
        </div>
      </nav>
    );
  }
}


let mapStateToProps = (state) => ({
  colors: state.colors,
  total: state.total,
});

let mapDispatchToProps = (dispatch) => ({
  colorFamilyFetch: (family, page) => dispatch(colorFamilyFetchRequest(family, page)),
  colorFetch: (hex) => dispatch(colorFetchRequest(hex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);