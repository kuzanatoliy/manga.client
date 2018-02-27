import { blue } from 'material-ui/colors';
import { CORMORANT_SC, CORMORANT_INFANT } from '../constants/font-families';

const LIGHT = 100;
const MAIN = 600;
const DARK = 900;

const HEADER_HEIGHT = '6em';
const FOOTER_HEIGHT = '2em';

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
      height: HEADER_HEIGHT,
      fontSize: '4em'
    },
    main: {
      minHeight: `calc(100vh - ${ HEADER_HEIGHT } - ${ FOOTER_HEIGHT })`
    },
    footer: {
      height: FOOTER_HEIGHT
    }
  }
};
