import React from 'react';
import * as PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import NavLink from 'react-router-dom/NavLink';

function RouterLink(props) {
  return (
    <NavLink to={ props.url } className={ `${ props.className } ${ props.classes.style }` }>
      { props.children }
    </NavLink>
  );
}

RouterLink.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  url: PropTypes.string
};

RouterLink.defaultProps = {
  className: '',
  url: '/'
}

function createStyles(theme) {
  return ({
    style: {
      textDecoration: 'none'
    }
  });
}

export default withStyles(createStyles)(RouterLink);