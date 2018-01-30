import List from '../components/MangaPreviewsList';
import { getMangaList } from '../lib/manga-scraper-request';
import { connect } from 'react-redux';
import { actions } from '../action/manga-list-action';

class MangaPreviewsList extends List {
  componentDidMount() {
    this.props.loadingData();
  }
}

const mapStateToProps = store => {
  const { mangaListReducer } = store;
  return { ...mangaListReducer }; 
};

const mapDispatchToProps = dispatch => ({
  loadingData: () => {
    dispatch(actions.loadMangaList());
    getMangaList(1, 1)
      .then(json => dispatch(actions.loadMangaListSuccess(json)));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MangaPreviewsList);
