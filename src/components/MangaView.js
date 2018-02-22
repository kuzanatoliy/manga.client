import React from 'react';
import LoadingComponent from './LoadingComponent';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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
        <div style={ { display: 'inline-block', position: 'relative' } }>
          <TextField
            hintText="Hint Text"
            floatingLabelText="Floating Label Text"
          />
          <button style={ { position: 'absolute', fontSize: '0.5em', bottom: '1.2em', right: 0, border: 0 } }>P</button>
          <button style={ { position: 'absolute', fontSize: '0.5em', bottom: '2.6em', right: 0, border: 0 } }>P</button>
        </div>
      </div>
    );
  }
}

export default MangaView;
