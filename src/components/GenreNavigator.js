import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { getGenreList } from '../lib/manga-scraper-request';
import Loading from './Loading';
import Item from './MenuItem';

class GenreNavigator extends Component {
  static defaultProps = {
    loading: false,
    genres: []
  };

  static propTypes = {
    loading: PropTypes.bool,
    genres: PropTypes.array
  };

  shouldComponentUpdate(nextProps, nextState) {
    return !(this.props.loading === nextProps.loading);
  }
  
  createLoadinContainer() {
    return (
      <Loading className='loading genre-navigator-loading' />
    );
  }

  createItems(list) {
    return list.map(item => <Item key={ item } href={ `/manga-list/${ item }` } className={ `genre genre-${ item }` }>{ item }</Item>)
  }
  
  render() {
    const { loading, genres } = this.props;
    return (
      <div>
        { loading
            ? <Loading />
            : (
              <ul>
                <Item href="/manga-list" className='genre genre-all'> all </ Item>
                { this.createItems(genres) }
              </ul>
            )}
      </div>
    );
  }
}

export default GenreNavigator;
