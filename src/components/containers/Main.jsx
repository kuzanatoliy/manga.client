import React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import * as PropTypes from 'prop-types'; 

function Main(props) {
  return (
    <section className={ `${ props.className } ${ props.classes.container }` }>
      <nav>
      </nav>
      <main className={ props.classes.component }>
        { props.children }
      </main>
    </section>
  );
}

function createStyles(theme) {
  const { minHeight } = theme.sizing.main;
  return ({
    container: {
      minHeight
    },
    component: {
      padding: `0 ${ theme.sizing.side }`
    }
  });
}

export default withStyles(createStyles)(Main);