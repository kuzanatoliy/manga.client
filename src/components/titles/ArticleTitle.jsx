import React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import * as PropTypes from 'prop-types';

function ArticleTitle(props) {
  return (
    <h2 className={ `${ props.className } ${ props.classes.title }` }>{ props.children }</h2>
  );
}

function createStyles(theme) {
  return ({
    title: {
      color: theme.palette.primary.main,
      fontFamily: theme.typography.title.fontFamily,
      margin: 0
    }
  });
}

ArticleTitle.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

ArticleTitle.defaultProps = {
  className: ''
};

export default withStyles(createStyles)(ArticleTitle);
