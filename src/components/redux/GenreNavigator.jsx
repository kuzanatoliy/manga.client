import { GenreNavigator as Navigator } from '../navigators';
import { getGenreList } from '../../lib/manga-scraper-request';
import { connect } from 'react-redux';
import { actions } from '../../action/genres-action';

class GenreNavigator extends Navigator {
  componentDidMount() {
    this.props.loadingData();
  }
}

const convertGenre = item => item.genreId;

const mapStateToProps = store => {
  const { genresReducer } = store;
  return { ...genresReducer }; 
};

const mapDispatchToProps = dispatch => ({
  loadingData: () => {
    dispatch(actions.loadGenres());
    getGenreList()
      .then(json => dispatch(actions.loadGenresSuccess(json.map(convertGenre))));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreNavigator);
