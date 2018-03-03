import React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import * as PropTypes from 'prop-types';
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { ArticleTitle as Title } from '../titles';
import { Note } from '../text';
import { RouterLinksArray as Links } from '../links';
import { CATALOG_URL } from '../../constants/urls';

class View extends React.Component {
  
  render() {
    const { manga, className, classes, mangaId } = this.props;
    const { name, author, status, yearOfRelease, genres, info, cover, chapters } = manga;
    console.log(this.props);
    return (
      <div className={ `${ classes.container } ${ className }` }>
        <Title className={ classes.title }>{ name }</Title>
        <img className={ classes.img } alt={ `${ name } - ${ author }` } src={ cover }/>
        <Note title='Author'>{ author }</Note>
        <Note title='Status'>{ status }</Note>
        <Note title='Release'>{ yearOfRelease }</Note>
        <Note title='Genres'>
          <Links urlPattern={ CATALOG_URL } links={ genres } />
        </Note>
        <p>{ info }</p>
        <Paper className={ classes.list }>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { chapters.map(createChapter) }
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }

  static defaultProps = {
    mangaId: '',
    manga: {
      name: '',
      author: [],
      status: '',
      yearOfRelease: 0,
      info: '',
      cover: '',
      lastUpdate: '',
      chapters: []
    }
  }

  static propTypes = {
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
        chapterId: PropTypes.number,
        name: PropTypes.name
      }))
    })
  }
}

function createChapter(item) {
  const { chapterId, name } = item;
  return(
    <TableRow key={ `${ chapterId }${ name }` }>
      <TableCell>{ chapterId }</TableCell>
      <TableCell>{ name }</TableCell>
    </TableRow>
  );
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
