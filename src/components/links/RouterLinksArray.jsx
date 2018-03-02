import React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import * as PropTypes from 'prop-types';
import RouterLink from './RouterLink';

class RouterLinksArray extends React.Component {
  constructor(props) {
    super(props);
    this.createLink = this.createLink.bind(this);
  }
  
  createLink(link) {
    const { classes, urlPattern } = this.props;
    return (
      <RouterLink className={ classes.link } key={ link } url={ `${ urlPattern }/${ link }` }>
        { link }
      </RouterLink>
    );
  }
  
  render() {
    return this.props.links.map(this.createLink);
  }

  static propTypes = {
    urlPattern: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.string)
  };
  
  static defaultProps = {
    urlPattern: '/',
    links: []
  };
}

function createStyles(theme) {
  return ({
    color: theme.palette.primary.main,
    link: {
      '&::after': {
        content: '" "'
      },
      '&:hover': {
        color: theme.palette.primary.dark
      }
    }
  });
}

export default withStyles(createStyles)(RouterLinksArray);
