import { blue } from 'material-ui/colors';
import { CORMORANT_SC, CORMORANT_INFANT } from '../constants/font-families';
//import {  } from 'material-ui/styles/colors';
/*import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from '../colors';
import {fade} from '../../utils/colorManipulator';
import spacing from '../spacing';*/

const LIGHT = 100;
const MAIN = 600;
const DARK = 900;

export default {
  palette: {
    primary: {
      light: blue[LIGHT],
      main: blue[MAIN],
      dark: blue[DARK]
    }
  },
  typography: {
    fontFamily: CORMORANT_INFANT,
    title: {
      fontFamily: CORMORANT_SC
    }
  },
  sizing: {
    side: 'calc((100% - 1366px) / 2)',
    header: {
      height: '6em',
      fontSize: '4em'
    }
  }
};
