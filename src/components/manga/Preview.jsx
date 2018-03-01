import React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import * as PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { MANGA_URL } from '../../constants/urls';
import { RouterLink as Link } from '../links';
import { ArticleTitle } from '../titles';

function MangaPreview(props) {
  const { mangaId, info, cover, name, classes, className } = props;
  return (
    <Paper className={ `${ classes.container } ${ className }` }>
      <img alt={ name } src={ cover } className={ classes.img }/>
      <div className={ classes.content }>
        <ArticleTitle>{ name }</ArticleTitle>
        <p>{ info }</p>
        <Link url={ `${ MANGA_URL }/${ mangaId }` } className={ classes.link }>Show more</Link>
      </div>
    </Paper>
  );
}

MangaPreview.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  mangaId: PropTypes.string,
  info: PropTypes.string,
  cover: PropTypes.string,
  name: PropTypes.string
};

MangaPreview.defaultProps = {
  className: ''
};

function createStyles(theme) {
  const { main, dark } = theme.palette.primary;
  return ({
    container: {
      textAlign: 'left',
      margin: '1.25em',
      padding: '1.25em',
      '&:after': {
        content: '""',
        display: 'block',
        clear: 'both'
      }
    },
    img: {
      width: '15em',
      float: 'left',
      marginRight: '1.5em'
    },
    content: {
      overflow: 'hidden',
    },
    link: {
      display: 'inline-block',
      padding: '0.25em',
      margin: '0.25em',
      border: `solid 0.01em ${ main }`,
      color: main,
      '&:hover': {
        borderColor: dark,
        color: dark
      }
    } 
  });
}

export default withStyles(createStyles)(MangaPreview);
