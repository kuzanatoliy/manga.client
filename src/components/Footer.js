import React from 'react'
import { lightBlue600 } from 'material-ui/styles/colors';

function Footer(props) {
  return (
    <footer style={ style }>{ `© Kuzmiankou Anatoli` }</footer>
  );
}

const style = {
  textAlign: 'center',
  lineHeight: '3em',
  height: '3em',
  color: lightBlue600
}

export default Footer;
