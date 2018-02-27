import React from 'react';
import * as PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
//import { lightBlue600, lightBlue900 } from 'material-ui/styles/colors';
import { MANGA_URL } from '../constants/urls';
import { CORMORANT_SC, CORMORANT_INFANT } from '../constants/font-families';
import { RouterLink as Link } from './links';

function MangaPreview(props) {
  const { mangaId, info, cover, name } = props;
  return (
    <Paper style={ styles.container }>
      <img src={ cover } style={ styles.img }/>
      <div style={ styles.content }>
        <h3 style={ styles.title }>{ name }</h3>
        <p>{ info }</p>
        <Link to={ `${ MANGA_URL }/${ mangaId }` } style={ styles.link } hoverStyle={ styles.hoverLink }>Show more</Link>
      </div>
      <div style={ styles.clearFix } />
    </Paper>
  );
}

const styles = {
  container: {
    margin: '1.5em',
    padding: '1.5em'
  },
  img: {
    maxWidth: '15em',
    minWidth: '15em',
    float: 'left',
    marginRight: '1.5em'
  },
  content: {
    overflow: 'hidden',
    fontFamily: CORMORANT_INFANT
  },
  title: {
    fontSize: '1.75em',
    fontFamily: CORMORANT_SC,
    //color: lightBlue600
  },
  clearFix: {
    clear: 'both'
  },
  link: {
    textDecoration: 'none',
    padding: '0.25em',
    //color: lightBlue900,
  },
  hoverLink: {
    //color: lightBlue600
  }
};

MangaPreview.propTypes = {
  mangaId: PropTypes.string,
  info: PropTypes.string,
  cover: PropTypes.string,
  name: PropTypes.string
}

export default MangaPreview;
