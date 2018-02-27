import React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import * as PropTypes from 'prop-types'; 

function Main(props) {
  return (
    <section className={ `${ props.className } ${ props.classes.container }` }>
      <nav className={ props.classes.nav }></nav>
      <main className={ props.classes.main }>{ props.children }</main>
    </section>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string 
};

Main.defaultProps = {
  className: ''
};

function createStyles(theme) {
  return ({
    container: {
      minHeight: theme.sizing.main.minHeight
    },
    nav: {
      padding: `0 ${ theme.sizing.side }`
    },
    main: {
      padding: `0 ${ theme.sizing.side }`
    }
  });
}

export default withStyles(createStyles)(Main);