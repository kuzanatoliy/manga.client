import React from 'react';
import AbstractPage from './AbstractPage';
import MangaView from '../redux/MangaView';

function MangaPage(props) {
  return (
    <AbstractPage
      body={ <MangaView mangaId={ props.match.params.mangaId } /> } 
    />
  );
}

export default MangaPage;
