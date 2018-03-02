import React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import * as PropTypes from 'prop-types';
import { ArticleTitle as Title } from '../titles';
import { Note } from '../text';
import { RouterLinksArray as Links } from '../links';
import { CATALOG_URL } from '../../constants/urls';

function View(props) {
  const { manga, className, classes, mangaId } = props;
  const { name, author, status, yearOfRelease, genres, info, cover, chapters } = manga;
  return (
    <div className={ className }>
      <Title className={ classes.title }>{ name }</Title>
      <img className={ classes.img } alt={ `${ name } - ${ author }` } src={ cover }/>
      <Note title='Author'>{ author }</Note>
      <Note title='Status'>{ status }</Note>
      <Note title='Release'>{ yearOfRelease }</Note>
      <Note title='Genres'>
        <Links urlPattern={ CATALOG_URL } links={ genres } />
      </Note>
      <p>{ info }</p>
      <div className={ classes.list }></div>
    </div>
  );
}

View.defaultProps = {
  mangaId: '',
  manga: {
    name: '',
    author: '',
    status: '',
    yearOfRelease: '',
    info: '',
    cover: '',
    lastUpdate: '',
    chapters: []
  }
};

View.propTypes = {
  classes: PropTypes.object.isRequired,
  mangaId: PropTypes.string,
  manga: PropTypes.shape({
    name: PropTypes.string,
    author: PropTypes.arrayOf(PropTypes.string),
    status: PropTypes.string,
    yearOfRelease: PropTypes.number,
    info: PropTypes.string,
    cover: PropTypes.string,
    lastUpdate: PropTypes.string,
    chapters: PropTypes.arrayOf(PropTypes.shape({

    }))
  })
}

function createStyles(theme) {
  return ({
    container: {
      padding: '1em 3em'
    },
    title: {
      margin: '1em'
    },
    img: {
      float: 'left',
      marginRight: '2em'
    },
    list: {
      clear: 'both'
    }
  });
}

export default withStyles(createStyles)(View);
