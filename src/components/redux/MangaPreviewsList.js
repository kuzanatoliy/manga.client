import List from '../MangaPreviewsList';
import { getMangaList, getMangaByGenre } from '../../lib/manga-scraper-request';
import { connect } from 'react-redux';
import { actions } from '../../action/manga-list-action';

class MangaPreviewsList extends List {
  componentDidMount() {
    this.props.loadingData(this.props.genreId);
  }
  
  componentWillUpdate(nextProps) {
    if(this.props.genreId !== nextProps.genreId) {
      this.props.loadingData(nextProps.genreId);
    }
  }
}

const mapStateToProps = store => {
  const { mangaListReducer } = store;
  return { ...mangaListReducer }; 
};

const mapDispatchToProps = dispatch => ({
  loadingData: (genreId) => {
    dispatch(actions.loadMangaList());
    const result = (genreId) ? getMangaByGenre(genreId, 1, 1) : getMangaList(1, 1);
    result.then(json => dispatch(actions.loadMangaListSuccess(json)));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MangaPreviewsList);
