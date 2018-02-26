import React from 'react';
import PropTypes from 'prop-types';
import { MainTitle } from './titles';

function Header(props) {
  const { text, style } = props
  return (
    <header style = { { ...style, ...styles.container } }>
      <MainTitle>Bugaga</MainTitle>
      <div style={ styles.after } />
    </header>
  );
}

const styles = {
  container: {
    height: '8em',
    textAlign: 'center'
  },
  after: {
    height: '100%',
    display: 'inline-block',
    verticalAlign: 'middle'
  },
  title: {
    margin: 0,
    fontSize: '4em',
    display: 'inline-block',
    verticalAlign: 'middle'
  }
};

Header.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object
}

Header.defaultProps = {
  text: 'Title',
  style: {}
}

export default Header;
