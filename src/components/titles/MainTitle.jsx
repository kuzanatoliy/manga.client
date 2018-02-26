import React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import * as PropTypes from 'prop-types';

function MainTitle(props) {
  return (
    <h1 className={ props.classes.mainTitle }>{ props.children }</h1>
  );
};

function createStyles(theme) {
  const { light, main, dark } = theme.palette.primary;
  return ({
      mainTitle: {
      color: main,
      fontFamily: theme.typography.title.fontFamily,
      margin: 0,
      textShadow: [`0.05em 0.05em 0.2em ${ light }`, `0.05em 0.05em 0.1em ${ dark }`],
    }
  });
}

MainTitle.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(createStyles)(MainTitle);
