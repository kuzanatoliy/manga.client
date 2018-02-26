import React from 'react';
import * as PropTypes from 'prop-types';
//import { lightBlue600 } from 'material-ui/styles/colors';
import { CORMORANT_INFANT } from '../constants/font-families';
import LoadingComponent from './LoadingComponent';
import MangaPreview from './MangaPreview';
import Paginator from './Paginator';

class MangaPreviewsList extends LoadingComponent {
  static defaultProps = {
    loading: false,
    mangaList: [],
    className: 'manga-previews-list'
  };

  static propTypes = {
    loading: PropTypes.bool,
    mangaList: PropTypes.array,
    className: PropTypes.string
  };

  createMangaPreview(item) {
    const { mangaId, cover, info, name } = item;
    return (
      <MangaPreview 
        key={ mangaId }
        mangaId={ mangaId }
        cover={ cover }
        info={ info }
        name={ name }
      />
    );
  }

  createBody() {
    const { controlsStyle, buttonStyle } = MangaPreviewsList.styles;
    return(
      <Paginator
        controlsStyle={ controlsStyle }
        buttonStyle={ buttonStyle } 
        createComponent={ this.createMangaPreview } 
        list={ this.props.mangaList } 
      />
    );
  }

  static styles = {
    controlsStyle: {
      textAlign: 'center',
    },
    buttonStyle: {
      fontFamily: CORMORANT_INFANT,
      //color: lightBlue600,
      backgroundColor: 'white',
      //border: `solid 0.1em ${ lightBlue600 }`,
      margin: '0.25em',
      padding: '0.25em',
      fontSize: '1.5em',
      borderRadius: '0.25em',
    },
  };
}

export default MangaPreviewsList;
