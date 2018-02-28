import React from 'react';
import AbstractPage from './AbstractPage';
import GenreNavigator from '../../redux-components/GenreNavigator';
import MangaPreviewsList from '../../redux-components/MangaPreviewsList';

function CatalogPage(props) {
  return (
    <AbstractPage
      ControlPanel={ GenreNavigator }
      Body={ MangaPreviewsList } 
    />
  );
}

/*class CatalogPage extends AbstractPage {
  constructor(props) {
    super(props);
    this.createControlPanel = this.createControlPanel.bind(this);
    this.createBody = this.createBody.bind(this);
  }
  
  createControlPanel() {
    console.log('bla');
    return <GenreNavigator />
  }

  createBody() {
    return <MangaPreviewsList />
  }
}*/

export default CatalogPage;
