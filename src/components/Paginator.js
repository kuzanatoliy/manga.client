import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

class Paginator extends Component {
  static defaultProps = {
    list: [],
    className: 'paginator'
  };

  static propTypes = {
    list: PropTypes.array,
    createComponent: PropTypes.func,
    className: PropTypes.string
  };
  
  constructor (props) {
    super(props);
  }
  
  render () {
    const { className, list, createComponent } = this.props;
    console.log(typeof createComponent);
    return (
      <div className={ className }>
        { list.map(createComponent) }
      </div>
    );
  }
}

export default Paginator;
