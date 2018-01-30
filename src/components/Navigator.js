import React from 'react';
import { CATALOG_URL, SEARCH_URL } from '../constants/urls';
import Item from './MenuItem';

function Navigator() {
  return (
    <nav className='navigator'>
      <ul className='menu'>
        <Item href={ CATALOG_URL }>Catalog</Item>
        <Item href={ SEARCH_URL }>Search</Item>
      </ul>
    </nav>
  );
}

export default Navigator;
