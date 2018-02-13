import React from 'react';
import * as PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import LoadingComponent from './LoadingComponent';
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
    return list.map(item => <NavLink key={ item } to={ `${ CATALOG_URL }/${ item }` } className={ `genre genre-${ item }` }>{ item }</NavLink>)
  }

  createBody() {
    return (
      <ul>
        <h3>{ this.props.title }</h3>
        <NavLink to={ CATALOG_URL } className='genre genre-all'> all </ NavLink>
        { this.createItems(this.props.genres) }
      </ul>
    );
  }
}

export default GenreNavigator;
