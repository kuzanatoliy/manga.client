import React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import * as PropTypes from 'prop-types';
import { CircleProgress } from 'material-ui/Progress';

class LoadingComponent extends Component {
  constructor(props) {
    super(props);
    this.createLoading = this.createLoading.bind(this);
    this.createBody = this.createBody.bind(this);
  }
  
  createLoading() {
    return <CircleProgress className={ this.props.classes.loading } />;
  }

  createBody() {
    const Component = this.props.component;
    return Component ? <Component /> : null;
  }
  
  render() {
    const { loading, className } = this.props;
    return (
      <div className={ className }>
        { loading ? this.createLoading() : this.createBody() }
      </div>
    );
  }

  static defaultProps = {
    loading: false,
    className: '',
    component: null
  }

  static propTypes = {
    loading: PropTypes.bool,
    className: PropTypes.string,
    component: PropTypes.object
  }
}

function createStyles() {
  return ({
    loading: {
      textAlign: 'center'
    }
  });
}

export default withStyles(createStyles)(Loading);
