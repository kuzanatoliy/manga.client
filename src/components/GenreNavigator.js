import React, { Component } from 'react';
import { getGenreList } from '../lib/manga-scraper-request';

class GenreNavigator extends Component {
  componentDidMount() {
    getGenreList()
      .then(json => console.log(json));
  }
  
  render() {
    return (
      <div>
        Genres
      </div>
    );
  }
}

export default GenreNavigator;
