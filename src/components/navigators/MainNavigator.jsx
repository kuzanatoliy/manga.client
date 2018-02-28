import React, { Component } from 'react';
import withStyles from 'material-ui/styles/withStyles';
import * as PropTypes from 'prop-types';
import { RouterLink as Link } from '../links';
import { MAIN_URLS } from '../../constants/urls';

class MainNavigator extends Component {
  constructor(props) {
    super(props);
    this.createItem = this.createItem.bind(this);
  }
  
  createItem(key) {
    return (
      <li className={ this.props.classes.item } key={ key }>
        <Link url={ MAIN_URLS[key] } className={ this.props.classes.link }>{ key }</Link>
      </li>
    );
  }
  
  render() {
    return (
      <ul className={ this.props.classes.container }>
        { Object.keys(MAIN_URLS).map(this.createItem) }
      </ul>
    );
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string
  };
  
  static defaultProps = {
    className: ''
  };
}

function createStyles(theme) {
  return ({
    container: {
      margin: 0,
      padding: 0,
      height: '100%',
      width: '100%',
      backgroundColor: theme.palette.primary.main
    },
    item: {
      height: '100%',
      fontSize: theme.sizing.nav.fontSize,
      display: 'inline-block',
      verticalAlign: 'middle',
      '&:after': {
        height: '100%',
        display: 'inline-block',
        content: '""',
        verticalAlign: 'middle'
      }
    },
    link: {
      display: 'inline-block',
      padding: '0 0.5em',
      verticalAlign: 'middle',
      color: theme.palette.grey[50],
      textShadow: `0.05em 0.05em ${ theme.palette.primary.dark }`,
      '&:hover': {
        textShadow: `0.05em 0.05em ${ theme.palette.error.dark }`
      }
    }
  });
}

export default withStyles(createStyles)(MainNavigator);
