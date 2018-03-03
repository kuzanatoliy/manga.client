import { View } from '../manga';
import { getManga } from '../../lib/manga-scraper-request';
import { connect } from 'react-redux';
import { actions } from '../../action/manga-action';

class MangaView extends View {
  componentDidMount() {
    this.props.loadingData(this.props.mangaId);
  }
}

const mapStateToProps = store => {
  const { mangaReducer } = store;
  return { ...mangaReducer }; 
};

const mapDispatchToProps = dispatch => ({
  loadingData: (mangaId) => {
    dispatch(actions.loadManga());
    getManga(mangaId)
      .then(json => dispatch(actions.loadMangaSuccess(json)));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MangaView);
