import React from 'react';
import * as PropTypes from 'prop-types';

function MainTitle(props) {
  return(
    <h1 className={ `main-title ${ props.className }` }>{ props.children }</h1>
  );
}

MainTitle.propTypes = {
  className: PropTypes.string
};

export default MainTitle;
