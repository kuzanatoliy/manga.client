import React from 'react';
import Navigator from './Navigator';

function Main(props) {
  return (
    <section>
      <Navigator />
      { props.children }
    </section>
  );
}

export default Main;
