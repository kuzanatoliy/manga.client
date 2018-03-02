import React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import * as PropTypes from 'prop-types';

function Note(props) {
  const { title, children, className, classes } = props;
  return(
    <p className={ className }>
      <span className={ classes.title }>{ `${ title }: ` }</span>
      <span>{ children }</span>
    </p>
  );
}

Note.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

Note.defaultProps = {
  title: 'Title',
  className: 'PropTypes.string'
};

function createStyles(theme) {
  return ({
    title: {
      fontWeight: 'bold'
    }
  });
}

export default withStyles(createStyles)(Note);
