import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import Loading from './Loading';

class LoadingComponent extends Component {
  static defaultProps = {
    loading: false,
    className: 'loading-component',
    component: null
  }

  static propTypes = {
    loading: PropTypes.bool,
    className: PropTypes.string,
    component: PropTypes.object
  }
  
  constructor(props) {
    super(props);
    this.createLoading = this.createLoading.bind(this);
    this.createBody = this.createBody.bind(this);
  }
  
  createLoading() {
    return <Loading className={ `loading-${ this.props.className }` }/>;
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
}

export default LoadingComponent;