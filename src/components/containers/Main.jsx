import React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import * as PropTypes from 'prop-types'; 

function Main(props) {
  return (
    <main>
      { props.children }
    </main>
  );
}

function createStyles(theme) {
  return ({

  });
}

export default withStyles(createStyles)(Main);