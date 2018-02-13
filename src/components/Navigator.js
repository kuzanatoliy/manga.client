import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import * as PropTypes from 'prop-types';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { lightBlue50, lightBlue600 } from 'material-ui/styles/colors';
import { CATALOG_URL, SEARCH_URL } from '../constants/urls';
import { CORMORANT_INFANT } from '../constants/font-families';

class Navigator extends Component {
  render() {
    const { container, content } = Navigator.styles
    const style = { ...container, ...this.props.style };
    return (
      <nav style={ style }>
        <Toolbar style={ style }>
          <ToolbarGroup>
            <NavLink to={ CATALOG_URL } style={ content } onHover={ () => { console.log('bla') } }>Catalog</NavLink>
            <NavLink to={ SEARCH_URL } style={ content }>Search</NavLink>
          </ToolbarGroup>
        </Toolbar>
      </nav>
    );
  }

  static styles = {
    container: {
      fontFamily: CORMORANT_INFANT,
      backgroundColor: lightBlue600,
      color: lightBlue50,
      height: '4em'
    },
    content: {
      fontSize: '2em',
      display: 'inline-block',
      padding: '0.5em 1em',
      color: lightBlue50,
      textDecoration: 'none'
    }
  }
  
  static propTypes = {
    style: PropTypes.object
  };
  
  static defaultProps = {
    style: {}
  }; 
}

export default Navigator;
