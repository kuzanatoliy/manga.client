import React from 'react';
import * as PropTypes from 'prop-types';
import Menu from 'material-ui/Menu';
//import MenuItem from 'material-ui/MenuItem';
//import { lightBlue600 } from 'material-ui/styles/colors';
import LoadingComponent from './LoadingComponent';
import { CATALOG_URL } from '../constants/urls';
import { CORMORANT_INFANT } from '../constants/font-families';
import { RouterLink as Link } from './links';

class GenreNavigator extends LoadingComponent {
  constructor(props) {
    super(props);
    this.createLinkItems = this.createLinkItems.bind(this);
  }

  static defaultProps = {
    loading: false,
    genres: [],
    style: {},
    title: 'Genres'
  };

  static propTypes = {
    loading: PropTypes.bool,
    genres: PropTypes.array,
    style: PropTypes.object,
    title: PropTypes.string
  };

  createLink(href, title) {
    const { menuItem, link } = GenreNavigator.styles;
    /*return (
      <MenuItem key={ href } style={ menuItem }>
        <Link to={ href } style={ link }> { title } </Link>
      </MenuItem>
    );*/
    return <div>Bla</div>
  }
  
  createLinkItems(list) {
    return list.map(item => this.createLink(`${ CATALOG_URL }/${ item }`, item));
  }

  createBody() {
    const { genres, style } = this.props;
    return (
      <Menu style={ style }>
        { this.createLink(CATALOG_URL, 'all') }
        { this.createLinkItems(genres) }
      </Menu>
    );
  }

  static styles = {
    menuItem: {
      padding: 0
    },
    link: {
      fontFamily: CORMORANT_INFANT,
      fontSize: '1.5em',
      //color: lightBlue600,
      textDecoration: 'none',
      textAlign: 'center',
      display: 'inline-block',
      width: '100%',
      height: '100%'
    }
  }
}

export default GenreNavigator;
