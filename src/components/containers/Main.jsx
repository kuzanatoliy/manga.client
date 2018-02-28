import React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import * as PropTypes from 'prop-types'; 
import { MainNavigator as Navigator } from '../navigators';

function Main(props) {
  return (
    <section className={ `${ props.classes.container } ${ props.className }` }>
      <nav className={ props.classes.nav }>
        <Navigator className={ props.classes.navContent }/>
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
  const { minHeight } = theme.sizing.main;
  return ({
    container: {
      minHeight: theme.sizing.main.minHeight
    },
    nav: {
      height: theme.sizing.nav.height
    },
    navContent: {
      padding: `0 ${ theme.sizing.side }`
    },
    main: {
      padding: `1em ${ theme.sizing.side }`
    }
  });
}

export default withStyles(createStyles)(Main);
