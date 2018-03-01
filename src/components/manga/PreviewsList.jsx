import React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import * as PropTypes from 'prop-types';
import { Loading } from '../load';
import Preview from './Preview';
import { Paginator } from '../paginator';

class PreviewsList extends Loading {
  static defaultProps = {
    loading: false,
    mangaList: [],
    className: ''
  };

  static propTypes = {
    classes: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    mangaList: PropTypes.array,
    className: PropTypes.string
  };

  createPreview(item) {
    const { mangaId, cover, info, name } = item;
    return (
      <Preview 
        key={ mangaId }
        mangaId={ mangaId }
        cover={ cover }
        info={ info }
        name={ name }
      />
    );
  }

  createBody() {
    return(
      <Paginator
        classes = { this.props.classes }
        createComponent={ this.createPreview } 
        list={ this.props.mangaList } 
      />
    );
  }
}

function createStyles(theme) {
  const { main, dark } = theme.palette.primary;
  return ({
    controls: {
      textAlign: 'center',
    },
    controlButton: {
      backgroundColor: theme.palette.grey[100],
      color: main,
      borderColor: main,
      margin: '0.25em',
      padding: '0.25em',
      fontSize: '1.25em',
      borderRadius: '0.25em',
      '&:hover': {
        color: dark,
        borderColor: dark
      }
    }
  });
}

export default withStyles(createStyles)(PreviewsList);
