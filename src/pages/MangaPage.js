import React from 'react';
import MangaView from '../redux-components/MangaView';

function MangaPage(props) {
  return (
    <main>
      <section>
        <MangaView mangaId={ props.match.params.mangaId } />
      </section>
    </main>
  );
}

export default MangaPage;
