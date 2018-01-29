import Page from '../pages/MangaListPage';
import { getMangaList } from '../lib/manga-scraper-request';
import { connect } from 'react-redux';
import { actions } from '../action/manga-list-action';

class MangaListPage extends Page {
  componentDidMount() {
    this.props.loadingData();
  }
}

const convertGenre = item => item.genreId;

const mapStateToProps = store => {
  const { mangaListReducer } = store;
  return { ...mangaListReducer }; 
};

const mapDispatchToProps = dispatch => ({
  loadingData: () => {
    dispatch(actions.loadMangaList());
    getMangaList(1, 1)
      //.then(json => dispatch(actions.loadGenresSuccess(json.map(convertGenre))));
      .then(json => console.log(json));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MangaListPage);
