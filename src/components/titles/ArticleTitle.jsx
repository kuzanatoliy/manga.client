import React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import * as PropTypes from 'prop-types';

function ArticleTitle(props) {
  return (
    <h2 className={ props.classes.articleTitle }>{ props.children }</h2>
  );
};

function createStyles(theme) {
  return ({
    articleTitle: {
      color: theme.palette.primary.main,
      fontFamily: theme.typography.title.fontFamily,
      margin: 0
    }
  });
}

ArticleTitle.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(createStyles)(ArticleTitle);
