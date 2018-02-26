import React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import * as PropTypes from 'prop-types';

function MainTitle(props) {
  return (
    <h1 className={ `${ props.className } ${ props.classes.title }` }>{ props.children }</h1>
  );
}

function createStyles(theme) {
  const { light, main, dark } = theme.palette.primary;
  return ({
    title: {
      color: main,
      fontFamily: theme.typography.title.fontFamily,
      margin: 0,
      textShadow: [`0.05em 0.05em 0.2em ${ light }`, `0.05em 0.05em 0.1em ${ dark }`],
    }
  });
}

MainTitle.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

MainTitle.defaultProps = {
  className: ''
}

export default withStyles(createStyles)(MainTitle);
