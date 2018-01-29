import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import Loading from '../components/Loading';

class MangaListPage extends Component {
  static defaultProps = {
    loading: false,
    mangaList: []
  };

  static propTypes = {
    loading: PropTypes.bool,
    mangaList: PropTypes.array
  };

  createLoadingContainer() {
    return (
      <Loading className='loading loading-page loading-manga-page' />
    );
  }

  render() {
    const { loading, mangaList } = this.props;
    return (
      <div className='manga-list'>
        { loading
            ? this.createLoadingContainer()
            : 'bugaga' }
      </div>
    );
  }
}

export default MangaListPage;
