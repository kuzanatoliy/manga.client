import React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import * as PropTypes from 'prop-types';
import { SignatureTitle } from '../titles';

function Footer(props) {
  return (
    <footer className={ `${ props.classes.container } ${ props.className }` }>
      <SignatureTitle className={ props.classes.body }>{ props.title }</SignatureTitle>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  title: PropTypes.string
};

Footer.defaultTypes = {
  title: 'Title',
  className: ''
};

function createStyles(theme) {
  const { height } = theme.sizing.footer;
  return ({
    container: {
      height,
      textAlign: 'center',
      padding: `0 ${ theme.sizing.side }`,
      '&:after': {
        height,
        content: '""',
        display: 'inline-block',
        verticalAlign: 'middle'
      }
    },
    body: {
      display: 'inline-block',
      verticalAlign: 'middle'
    }
  });
}

export default withStyles(createStyles)(Footer);
