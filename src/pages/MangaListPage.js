import React from 'react';
import * as PropTypes from 'prop-types';
import LoadingComponent from '../components/LoadingComponent';
import MangaPreview from '../components/MangaPreview';

class MangaListPage extends LoadingComponent {
  static defaultProps = {
    loading: false,
    mangaList: [],
    className: 'manga-list-page'
  };

  static propTypes = {
    loading: PropTypes.bool,
    mangaList: PropTypes.array,
    className: PropTypes.string
  };

  createMangaPreview(item) {
    const { mangaId, cover, info, name } = item;
    console.log(item);
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
    console.log(this.props.mangaList);
    return(
      <div>{ this.props.mangaList.map(this.createMangaPreview) }</div>
    );
  }
}

export default MangaListPage;
