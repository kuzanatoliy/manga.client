import React from 'react';

function Loading(props) {
  return (
    <div className={ `loading ${ props.className }` }>
      Loading...
    </div>
  );
}

export default Loading;
