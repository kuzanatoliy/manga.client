import React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import * as PropTypes from 'prop-types';
import { MenuList as Menu, MenuItem as Item } from 'material-ui/Menu';
import { Loading } from '../load';
import { CATALOG_URL } from '../../constants/urls';
import { RouterLink as Link } from '../links';

class GenreNavigator extends Loading {
  constructor(props) {
    super(props);
    this.createLinkItems = this.createLinkItems.bind(this);
    this.createLink = this.createLink.bind(this);
  }

  createLink(value) {
    return (
      <Item key={ value }>
        <Link url={ `${ CATALOG_URL }/${ value }` } className={ this.props.classes.link }> { value } </Link>
      </Item>
    );
  }
  
  createLinkItems(list) {
    return list.map(this.createLink);
  }

  createBody() {
    return (
      <Menu>
        <Item>
          <Link url={ `${ CATALOG_URL }` } className={ this.props.classes.link }> all </Link>
        </Item>
        { this.createLinkItems(this.props.genres) }
      </Menu>
    );
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
}

function createStyles(theme) {
  return ({
    link: {
      fontSize: '1.5em',
      color: theme.palette.primary.main,
      textAlign: 'center',
      display: 'inline-block',
      width: '100%',
      height: '100%',
      '&:hover': {
        color: theme.palette.primary.dark
      }
    }
  });
}

export default withStyles(createStyles)(GenreNavigator);
