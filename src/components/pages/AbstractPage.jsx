import React, { Component, Fragment } from 'react';
import withStyles from 'material-ui/styles/withStyles';
import * as PropTypes from 'prop-types';

class AbstractPage extends Component {
  constructor(props) {
    super(props);
    this.createControlPanel = this.createControlPanel.bind(this);
    this.createBody = this.createBody.bind(this);
  }
  
  createControlPanel() {
    const { ControlPanel } = this.props;
    return ControlPanel ? <ControlPanel /> : null;
  }

  createBody() {
    const { Body } = this.props;
    return Body ? <Body /> : null;
  }
  
  render() {
    return (
      <Fragment>
        <section className={ this.props.classes.controls }>{ this.createControlPanel() }</section>
        <section className={ this.props.classes.body }>{ this.createBody() }</section>
      </Fragment>
    );
  }

  static propTypes = {
    ControlPanel: PropTypes.func.isRequired,
    Body: PropTypes.func.isRequired
  };
}

function createStyles(theme) {
  return ({
    controls: {
      maxWidth: '15em',
      float: 'left'
    },
    body: {
      overflow: 'hidden'
    }
  });
}

export default withStyles(createStyles)(AbstractPage);
