import React from 'react';
import * as PropTypes from 'prop-types';
import LoadingComponent from './LoadingComponent';
import Item from './MenuItem';
import { CATALOG_URL } from '../constants/urls';

class GenreNavigator extends LoadingComponent {
  static defaultProps = {
    loading: false,
    genres: [],
    className: 'genre-navigator',
    title: 'Genres'
  };

  static propTypes = {
    loading: PropTypes.bool,
    genres: PropTypes.array,
    className: PropTypes.string,
    title: PropTypes.string
  };

  createItems(list) {
    return list.map(item => <Item key={ item } href={ `${ CATALOG_URL }/${ item }` } className={ `genre genre-${ item }` }>{ item }</Item>)
  }

  createBody() {
    return (
      <ul>
        <h3>{ this.props.title }</h3>
        <Item href='/manga-list' className='genre genre-all'> all </ Item>
        { this.createItems(this.props.genres) }
      </ul>
    );
  }
}

export default GenreNavigator;
