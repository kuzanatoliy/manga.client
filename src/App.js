import React, { Component } from 'react';
import Header from './components/Header';
import Router from './AppRouter';

class App extends Component {
  render() {
    return (
      <div>
        <Header text='Manga client' />
        <Router />
        <footer>footer</footer>
      </div>
    );
  }
}

export default App;
