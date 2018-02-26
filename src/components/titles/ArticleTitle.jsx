import React from 'react';
import withTheme from 'material-ui/styles/withTheme';
import * as PropTypes from 'prop-types';

function ArticleTitle(props) {
  const colors = props.theme.palette[props.color];
  const typography = props.theme.typography.title.fontFamily;
  return (
    <h2 style={ createStyle(colors, typography) }>{ props.children }</h2>
  );
};

function createStyle(colors, typography) {
  return ({
    color: colors.main,
    fontFamily: typography,
    fontSize: '2.5em',
    margin: 0
  });
}

ArticleTitle.defaultProps = {
  color: 'primary'
};

ArticleTitle.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'error'])
};

export default withTheme()(ArticleTitle);
