import React from 'react';
import PropTypes from 'prop-types';
import { MainTitle } from './titles';

function Header(props) {
  const { text } = props
  return (
    <header>
      <MainTitle>{ text }</MainTitle>
    </header>
  );
}

Header.propTypes = {
  text: PropTypes.string
}

Header.defaultProps = {
  text: 'Title'
}

export default Header;
