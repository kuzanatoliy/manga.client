import React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import * as PropTypes from 'prop-types'; 
import { MainNavigator as Navigator } from '../navigators';

function Main(props) {
  return (
    <section className={ `${ props.className } ${ props.classes.container }` }>
      <nav className={ props.classes.nav }>
        <Navigator />
      </nav>
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
      padding: `0 ${ theme.sizing.side }`,
      height: theme.sizing.nav.height
    },
    main: {
      padding: `0 ${ theme.sizing.side }`
    }
  });
}

export default withStyles(createStyles)(Main);