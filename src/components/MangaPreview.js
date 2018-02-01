import React from 'react';
import * as PropTypes from 'prop-types';
import { MANGA_URL } from '../constants/urls';

function MangaPreview(props) {
  const { mangaId, info, cover, name } = props;
  return (
    <div className='manga-preview'>
      <img src={ cover } />
      <h3>{ name }</h3>
      <p>{ info }</p>
      <a href={ `${ MANGA_URL }/${ mangaId }` }>Show more</a>
    </div>
  );
}

MangaPreview.propTypes = {
  mangaId: PropTypes.string,
  info: PropTypes.string,
  cover: PropTypes.string,
  name: PropTypes.string
}

export default MangaPreview;
