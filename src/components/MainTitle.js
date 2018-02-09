import React from 'react';
import * as PropTypes from 'prop-types';
import { lightBlue50, lightBlue600, lightBlue900 } from 'material-ui/styles/colors';
import { CORMORANT_SC } from '../constants/font-families';

const defaultStyle = {
  color: lightBlue600,
  fontFamily: CORMORANT_SC,
  fontSize: '4em',
  textShadow: [`0.05em 0.05em 0.1em ${ lightBlue50 }`, `0.05em 0.05em 0.1em ${ lightBlue900 }`]
}

function MainTitle(props) {
  const { style, children } = props;
  return(
    <h1 style={ { ...defaultStyle, ...style } }>{ props.children }</h1>
  );
}

MainTitle.propTypes = {
  style: PropTypes.object
};

MainTitle.defaultProps = {
  style: {}
};

export default MainTitle;
