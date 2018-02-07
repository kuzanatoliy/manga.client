import React from 'react';
import * as PropTypes from 'prop-types';
import { CATALOG_URL, SEARCH_URL } from '../../constants/urls';
import Item from '../MenuItem';
import './index.css';

function Navigator(props) {
  const { className } = props;
  return (
    <nav className={ `navigator ${ className }` }>
      <ul className='navigator-menu'>
        <Item href={ CATALOG_URL } horizontal={ true }>Catalog</Item>
        <Item href={ SEARCH_URL } horizontal={ true }>Search</Item>
      </ul>
    </nav>
  );
}

Navigator.propTypes = {
  className: PropTypes.string
};

Navigator.defaultProps = {
  calssName: ''
};

export default Navigator;
