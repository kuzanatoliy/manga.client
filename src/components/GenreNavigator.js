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
        <ul>
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Item 2</a></li>
          <li><a href="#">Item 3</a></li>
        </ul>
      </div>
    );
  }
}

export default GenreNavigator;
