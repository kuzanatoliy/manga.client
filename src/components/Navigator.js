import React from 'react';
import { HOME_URL, SEARCH_URL } from '../constants/urls';
import Item from './MenuItem';

function Navigator() {
  return (
    <nav className='navigator'>
      <ul className='menu'>
        <Item href={ HOME_URL }>Home</Item>
        <Item href={ SEARCH_URL }>Search</Item>
      </ul>
    </nav>
  );
}

export default Navigator;
