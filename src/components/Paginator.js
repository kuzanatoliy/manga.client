import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

class Paginator extends Component {
  static defaultProps = {
    list: [],
    className: 'paginator',
    activePage: 1,
    numberOfItemsForPage: 15,
    firstPage: '<<',
    lastPage: '>>',
    prevPage: '<',
    nextPage: '>'
  };

  static propTypes = {
    list: PropTypes.array,
    createComponent: PropTypes.func,
    className: PropTypes.string,
    activePage: PropTypes.number,
    numberOfItemsForPage: PropTypes.number,
    firstPage: PropTypes.string,
    lastPage: PropTypes.string,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string
  };
  
  constructor (props) {
    super(props);
    const pageCount = Math.floor(props.list.length / props.numberOfItemsForPage);
    const activePage = (props.activePage > 0 && props.activePage < pageCount)
      ? props.activePage
      : Paginator.defaultProps.activePage;
    this.state = {
      activePage,
      pageCount
    }
    this.createButton = this.createButton.bind(this);
  }

  createButton(number, title, className) {
    return (
      <button className={ className } onClick={ () => this.setState({ activePage: number }) } >
        { title }
      </button>
    );
  }
  
  render () {
    const { activePage } = this.state;
    const { 
      className,
      list,
      createComponent,
      numberOfItemsForPage,
      firstPage,
      lastPage,
      prevPage,
      nextPage
    } = this.props;
    return (
      <div className={ className }>
        { list.slice((activePage - 1) * numberOfItemsForPage, numberOfItemsForPage ).map(createComponent) }
        <div className='paginator-controls'>
          { this.createButton(1, firstPage, 'first-page') }
          <button className='first-page'>{ firstPage }</button>
          <button className='prev-page'>{ prevPage }</button>
          <button className='next-page'>{ nextPage }</button>
          <button className='lastPage'>{ lastPage }</button>
        </div>
      </div>
    );
  }
}

export default Paginator;
