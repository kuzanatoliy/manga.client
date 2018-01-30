import React from 'react';
import GenreNavigator from '../redux-components/GenreNavigator';
import MangaPreviewsList from '../redux-components/MangaPreviewsList';

function CatalogPage(props) {
  return (
    <main>
      <section className='user-navigation'>
        <GenreNavigator />
      </section>
      <section className='content'>
        <MangaPreviewsList />
      </section>
    </main>
  );
}

export default CatalogPage;
