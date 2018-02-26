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
  //spacing: spacing,
  //fontFamily: 'Roboto, sans-serif',
  palette: {
    primary: {
      light: blue[LIGHT],
      main: blue[MAIN],
      dark: blue[DARK]
    }
    //primary1Color: cyan500,
    //primary2Color: cyan700,
    //primary3Color: grey400,
    //accent1Color: pinkA200,
    //accent2Color: grey100,
    //accent3Color: grey500,
    //textColor: darkBlack,
    //alternateTextColor: white,
    //canvasColor: white,
    //borderColor: grey300,
    //disabledColor: fade(darkBlack, 0.3),
    //pickerHeaderColor: cyan500,
    //clockCircleColor: fade(darkBlack, 0.07),
    //shadowColor: fullBlack,
  },
  typography: {
    fontFamily: CORMORANT_INFANT,
    title: {
      fontFamily: CORMORANT_SC
    }
  }
};
