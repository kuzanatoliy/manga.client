import React, { Component } from 'react';
import { getGenreList } from '../lib/manga-scraper-request';
import Loading from './Loading';
import Item from './MenuItem';

class GenreNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  
  componentDidMount() {
    getGenreList()
      .then(json => {
        this.genreList = json.map( item => item.genreId );
        this.setState({ loading: false });
      });
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
    return (
      <div>
        { this.state.loading
            ? <Loading />
            : (
              <ul>
                <Item href="/manga-list" className='genre genre-all'> all </ Item>
                { this.createItems(this.genreList) }
              </ul>
            )}
      </div>
    );
  }
}

export default GenreNavigator;
