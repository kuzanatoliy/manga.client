import React from 'react';

function MenuItem(props) {
  const { className, href, children } = props;
  return (
    <li className={ className }>
      <a href={ href }>{ children }</a>
    </li>
  );
}

export default MenuItem;
