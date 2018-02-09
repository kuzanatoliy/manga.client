import React, { Component } from 'react';
import Button from 'material-ui/RaisedButton';
import Header from './components/Header';
import Navigator from './components/Navigator';
import Router from './AppRouter';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Header text='Manga client' />
        </header>
        <nav>
          <Navigator />
        </nav>
        <footer>
          <div>footer</div>
        </footer>
      </div>  
    );
  }
  /*render() {
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
  }*/
}

export default App;
