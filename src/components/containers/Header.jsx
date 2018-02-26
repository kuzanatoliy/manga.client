import React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import * as PropTypes from 'prop-types';
import { MainTitle } from '../titles';

function Header(props) {
  return (
    <header className={ `${ props.className } ${ props.classes.container }` }>
      <MainTitle className={ props.classes.body }>{ props.title }</MainTitle>
    </header>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  className: PropTypes.string
};

Header.defaultProps = {
  title: 'Manga Client',
  className: ''
};

function createStyles(theme) {
  const { height, fontSize } = theme.sizing.header;
  return({
    container: {
      height,
      textAlign: 'center',
      '&:after': {
        height,
        content: '""',
        display: 'inline-block',
        verticalAlign: 'middle'
      }
    },
    body: {
      fontSize,
      display: 'inline-block',
      verticalAlign: 'middle'
    }
  });
}

export default withStyles(createStyles)(Header);
