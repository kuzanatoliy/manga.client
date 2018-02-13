import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { lightBlue50, lightBlue600, lightBlue900 } from 'material-ui/styles/colors';
import { CATALOG_URL, SEARCH_URL } from '../constants/urls';
import { CORMORANT_INFANT } from '../constants/font-families';
import Link from './RouterLink';

class Navigator extends Component {
  render() {
    const { container, content, hoverContent } = Navigator.styles
    const style = { ...container, ...this.props.style };
    return (
      <nav style={ style }>
        <Toolbar style={ style }>
          <ToolbarGroup>
            <Link to={ CATALOG_URL } style={ content } hoverStyle={ hoverContent }>Catalog</Link>
            <Link to={ SEARCH_URL } style={ content } hoverStyle={ hoverContent }>Search</Link>
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
      textDecoration: 'none',
      transition: 'text-shadow 2s'
    },
    hoverContent: {
      textShadow: `0.05em 0.05em 0.1em ${ lightBlue900 }`
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
