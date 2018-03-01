import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { CircularProgress as Progress } from 'material-ui/Progress';

class Loading extends Component {
  createLoading() {
    return <Progress />;
  }

  createBody() {
    const Component = this.props.component;
    return Component ? <Component /> : null;
  }
  
  render() {
    const { loading, className } = this.props;
    return (
      <div className={ className } style={ { textAlign: 'center' } }>
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

export default Loading;
