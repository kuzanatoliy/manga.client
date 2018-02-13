import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Router from './AppRouter';

class App extends Component {
  render() {
    return (
      <div>
        <Header text='Manga client' />
        <Router />
        <Footer />
      </div>
    );
  }
}

export default App;
