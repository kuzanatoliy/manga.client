import React from 'react';
import withTheme from 'material-ui/styles/withTheme';
import * as PropTypes from 'prop-types';

function MainTitle(props) {
  const colors = props.theme.palette[props.color];
  const typography = props.theme.typography.title.fontFamily;
  return (
    <h1 style={ createStyle(colors, typography) }>{ props.children }</h1>
  );
};

function createStyle(colors, typography) {
  return ({
    color: colors.main,
    fontFamily: typography,
    fontSize: '4em',
    margin: 0,
    textShadow: [`0.05em 0.05em 0.2em ${ colors.light }`, `0.05em 0.05em 0.1em ${ colors.dark }`]
  });
}

MainTitle.defaultProps = {
  color: 'primary'
};

MainTitle.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'error'])
};

export default withTheme()(MainTitle);
