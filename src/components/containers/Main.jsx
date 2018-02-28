import React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import * as PropTypes from 'prop-types'; 
import { MainNavigator as Navigator } from '../navigators';

function Main(props) {
  return (
    <section className={ `${ props.className } ${ props.classes.container }` }>
<<<<<<< HEAD
      <nav>
      </nav>
      <main className={ props.classes.component }>
        { props.children }
      </main>
=======
      <nav className={ props.classes.nav }>
        <Navigator />
      </nav>
      <main className={ props.classes.main }>{ props.children }</main>
>>>>>>> 0b7a103501c1897316afa4943266d3f0289a5570
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
<<<<<<< HEAD
      minHeight
    },
    component: {
=======
      minHeight: theme.sizing.main.minHeight
    },
    nav: {
      padding: `0 ${ theme.sizing.side }`,
      height: theme.sizing.nav.height
    },
    main: {
>>>>>>> 0b7a103501c1897316afa4943266d3f0289a5570
      padding: `0 ${ theme.sizing.side }`
    }
  });
}

export default withStyles(createStyles)(Main);