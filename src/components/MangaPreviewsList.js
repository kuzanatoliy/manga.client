import React from 'react';
import * as PropTypes from 'prop-types';
import LoadingComponent from './LoadingComponent';
import MangaPreview from './MangaPreview';
import Paginator from './Paginator';

class MangaPreviewsList extends LoadingComponent {
  static defaultProps = {
    loading: false,
    mangaList: [],
    className: 'manga-previews-list'
  };

  static propTypes = {
    loading: PropTypes.bool,
    mangaList: PropTypes.array,
    className: PropTypes.string
  };

  createMangaPreview(item) {
    const { mangaId, cover, info, name } = item;
    return (
      <MangaPreview 
        key={ mangaId }
        mangaId={ mangaId }
        cover={ cover }
        info={ info }
        name={ name }
      />
    );
  }

  createBody() {
    console.log(this.createMangaPreview);
    return(
      <Paginator 
        className='manga-previews-list' 
        createComponent={ this.createMangaPreview } 
        list={ this.props.mangaList } 
      />
    );
  }
}

export default MangaPreviewsList;
