import React from 'react';
import * as PropTypes from 'prop-types';
import LoadingComponent from '../components/LoadingComponent';

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

  createBody() {
    return(
      <div>bugaga</div>
    );
  }
}

export default MangaListPage;
