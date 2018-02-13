import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class RouterLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
    this.mouseout = this.mouseout.bind(this);
    this.mouseover = this.mouseover.bind(this);
  }
  
  mouseover() {
    this.setState({ hover: true });
  }

  mouseout() {
    this.setState({ hover: false });
  }

  render() {
    const { to, children, style, hoverStyle } = this.props;
    const useStyle = (this.state.hover) ? { ...style, ...hoverStyle } : style;
    return(
      <NavLink 
        to={ to }
        style={ useStyle }
        onMouseOver={ this.mouseover }
        onMouseOut={ this.mouseout }
      >
        { children }
      </NavLink>
    );
  }

  static propTypes = {
    to: PropTypes.string,
    style: PropTypes.object,
    hoverStyle: PropTypes.object
  }

  static defaultProps = {
    to: '#',
    style: {},
    hoverStyle: {}
  }
}

export default RouterLink;