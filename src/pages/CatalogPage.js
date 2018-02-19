import React from 'react';
import GenreNavigator from '../redux-components/GenreNavigator';
import MangaPreviewsList from '../redux-components/MangaPreviewsList';

function CatalogPage(props) {
  return (
    <main>
      <section style={ styles.navigator }>
        <GenreNavigator />
      </section>
      <section style={ styles.content }>
        <MangaPreviewsList genreId={ props.match.params.genreId }/>
      </section>
    </main>
  );
}

const styles = {
  navigator: {
    maxWidth: '15em',
    float: 'left'
  },
  content: {
    overflow: 'hidden'
  }
};

export default CatalogPage;
