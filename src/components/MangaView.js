import React from 'react';
import LoadingComponent from './LoadingComponent';

class MangaView extends LoadingComponent {
  createBody() {
    const { manga, mangaId } = this.props;
    const { name, author, status, yearOfRelease, genres, info, cover, lastUpdate, chapters } = manga;
    return (
      <div>
        <h2>{ name }</h2>
        <p>{ author }</p>
        <p>{ status }</p>
        <p>{ yearOfRelease }</p>
      </div>
    );
  }
}

export default MangaView;
