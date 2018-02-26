import React from 'react';
import withTheme from 'material-ui/styles/withTheme';
import * as PropTypes from 'prop-types';
import { MainTitle } from '../titles';

function Header(props) {
  return (
    <header style={ createContainerStyle() }>
      <MainTitle>{ props.title }</MainTitle>
    </header>
  );
};

function createContainerStyle() {
  return({
    height: '6em',
    '&:after': {
      display: 'inline-block',
      verticalAlign: 'middle'
    }
  });
}

export default Header;
