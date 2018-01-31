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
    nextPage: '>',
    manyPages: '...',
    showingButtons: 10,
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
    nextPage: PropTypes.string,
    manyPages: PropTypes.string,
    showingButtons: PropTypes.number
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
    this.createFirstPageButton = this.createFirstPageButton.bind(this);
    this.createPrevPageButton = this.createPrevPageButton.bind(this);
    this.createNextPageButton = this.createNextPageButton.bind(this);
    this.createLastPageButton = this.createLastPageButton.bind(this);
    this.createManyPagesButton = this.createManyPagesButton.bind(this);
    this.createPagesButtons = this.createPagesButtons.bind(this);
    this.createButtonsList = this.createButtonsList.bind(this);
  }

  createButton(number, title, className, disabled = false) {
    return (
      <button 
        key={ className + number }
        className={ className + (this.state.activePage === number) ? ' active' : '' }
        onClick={ () => this.setState({ activePage: number }) }
        disabled={ disabled }
      >
        { title }
      </button>
    );
  }

  createFirstPageButton() {
    return this.createButton(1, this.props.firstPage, 'first-page');
  }

  createLastPageButton() {
    return this.createButton(this.state.pageCount, this.props.lastPage, 'last-page' );
  }

  createPrevPageButton() {
    const number = this.state.activePage - 1
    return this.createButton(number, this.props.prevPage, 'prev-page', !(number > 0))
  }

  createNextPageButton() {
    const number = this.state.activePage + 1;
    return this.createButton(number, this.props.nextPage, 'next-page', number > this.state.pageCount);
  }

  createManyPagesButton(number = 0) {
    return this.createButton(number, this.props.manyPages, 'page many-pages', true);
  }

  createButtonsList(start, end) {
    const result = [];
    let i = start;
    while (i < end) {
      result.push(this.createButton(i, i, `page page-${ i }`));
      i++;
    }
    return result;
  }

  createPagesButtons() {
    const { pageCount, activePage } = this.state;
    const { showingButtons } = this.props;
    const half = parseInt(showingButtons / 2);
    let result;
    if (pageCount < showingButtons) {
      result = this.createButtonsList(1, pageCount + 1);
    } else if (activePage <= half) {
      result = [].concat(
        this.createButtonsList(1, showingButtons),
        this.createManyPagesButton(showingButtons) 
      );
    } else if (activePage + half > pageCount) {
      const number = pageCount - showingButtons;
      result = [].concat(
        this.createManyPagesButton(number),
        this.createButtonsList(number + 1, pageCount + 1)
      );
    } else {
      const start = activePage - half;
      const end = activePage + half;
      result = [].concat(
        this.createManyPagesButton(start),
        this.createButtonsList(start + 1, end),
        this.createManyPagesButton(end),
      );
    }
    return result;
  }
  
  render () {
    const { activePage } = this.state;
    const { className, list, createComponent, numberOfItemsForPage } = this.props;
    const firstNumber = (activePage - 1) * numberOfItemsForPage;
    const lastNumber = firstNumber + numberOfItemsForPage;
    return (
      <div className={ className }>
        { list.slice(firstNumber, lastNumber ).map(createComponent) }
        <div className='paginator-controls'>
          { this.createFirstPageButton() }
          { this.createPrevPageButton() }
          { this.createPagesButtons() }
          { this.createNextPageButton() }
          { this.createLastPageButton() }
        </div>
      </div>
    );
  }
}

export default Paginator;
