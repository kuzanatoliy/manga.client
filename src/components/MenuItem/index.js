import React from 'react';
import * as PropTypes from 'prop-types';
import './index.css';

function MenuItem(props) {
  const { className, href, children, horizontal } = props;
  return (
    <li className={ `menu-item ${ className } ${ horizontal? 'horizontal': 'vertical' }` }>
      <a href={ href }>{ children }</a>
    </li>
  );
}

MenuItem.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string
};

MenuItem.defaultProps = {
  className: ''
}

export default MenuItem;
