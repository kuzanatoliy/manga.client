import React from 'react';
import * as PropTypes from 'prop-types';
import LoadingComponent from './LoadingComponent';
import { CATALOG_URL } from '../constants/urls';
import Link from './RouterLink';

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
    return list.map(item => <Link key={ item } to={ `${ CATALOG_URL }/${ item }` } className={ `genre genre-${ item }` }>{ item }</Link>)
  }

  createBody() {
    return (
      <ul>
        <h3>{ this.props.title }</h3>
        <Link to={ CATALOG_URL } className='genre genre-all'> all </Link>
        { this.createItems(this.props.genres) }
      </ul>
    );
  }
}

export default GenreNavigator;
