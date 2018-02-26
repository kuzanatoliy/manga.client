import React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import * as PropTypes from 'prop-types';

function SignatureTitle(props) {
  return (
    <h4 className={ `${ props.className } ${ props.classes.title }` }>© { props.children }</h4>
  );
}

SignatureTitle.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

SignatureTitle.defaultTypes = {
  className: ''
};

function createStyles(theme) {
  return ({
    title: {
      color: theme.palette.primary.main,
      margin: 0
    }
  });
}

export default withStyles(createStyles)(SignatureTitle);
