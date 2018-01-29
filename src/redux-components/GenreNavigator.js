import Navigator from '../components/GenreNavigator';
import { getGenreList } from '../lib/manga-scraper-request';
import { connect } from 'react-redux';
import { actions } from '../action/genres-action';

class GenreNavigator extends Navigator {
  componentDidMount() {
    this.props.loadingData();
  }
}

const convertGenre = item => item.genreId;

const mapStateToProps = store => {
  const { genresReducer } = store;
  console.log(genresReducer);
  return { ...genresReducer }; 
};

const mapDispatchToProps = dispatch => ({
  loadingData: () => {
    console.log(1);
    dispatch(actions.loadGenres());
    getGenreList()
      .then(json => dispatch(actions.loadGenresSuccess(json.map(convertGenre))));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreNavigator);
