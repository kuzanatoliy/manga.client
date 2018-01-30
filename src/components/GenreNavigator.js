import React from 'react';
import * as PropTypes from 'prop-types';
import LoadingComponent from './LoadingComponent';
import Item from './MenuItem';

class GenreNavigator extends LoadingComponent {
  static defaultProps = {
    loading: false,
    genres: [],
    className: 'genre-navigator'
  };

  static propTypes = {
    loading: PropTypes.bool,
    genres: PropTypes.array,
    className: PropTypes.string
  };

  createItems(list) {
    return list.map(item => <Item key={ item } href={ `/manga-list/${ item }` } className={ `genre genre-${ item }` }>{ item }</Item>)
  }

  createBody() {
    return (
      <ul>
        <Item href='/manga-list' className='genre genre-all'> all </ Item>
        { this.createItems(this.props.genres) }
      </ul>
    );
  }
}

export default GenreNavigator;
