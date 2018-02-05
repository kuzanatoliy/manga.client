import React, { Component } from 'react';
import Header from './components/Header';
import Navigator from './components/Navigator';
import Router from './AppRouter';

class App extends Component {
  render() {
    return (
      <div>
        <Header text='Manga client' />
        <Navigator />
        <main>
          <Router />
        </main>
        <footer>footer</footer>
      </div>
    );
  }
}

export default App;
