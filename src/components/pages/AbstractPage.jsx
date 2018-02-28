import React, { Fragment } from 'react';
import withStyles from 'material-ui/styles/withStyles';
import * as PropTypes from 'prop-types';

function AbstractPage(props) {
  const { controlPanel, body } = props;
  return (
    <Fragment>
      <section className={ props.classes.controls }>{ controlPanel }</section>
      <section className={ props.classes.body }>{ body }</section>
    </Fragment>
  );
}

AbstractPage.propTypes = {
  controlPanel: PropTypes.object.isRequired,
  body: PropTypes.object.isRequired
};

function createStyles(theme) {
  return ({
    controls: {
      maxWidth: '15em',
      float: 'left'
    },
    body: {
      overflow: 'hidden'
    }
  });
}

export default withStyles(createStyles)(AbstractPage);
