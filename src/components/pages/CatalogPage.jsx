import React from 'react';
import AbstractPage from './AbstractPage';
import GenreNavigator from '../redux/GenreNavigator';
import MangaPreviewsList from '../redux/MangaPreviewsList';

function CatalogPage(props) {
  return (
    <AbstractPage
      controlPanel={ <GenreNavigator /> }
      body={ <MangaPreviewsList genreId={ props.match.params.genreId } /> } 
    />
  );
}

export default CatalogPage;
