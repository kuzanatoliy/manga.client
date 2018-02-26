import React, { Component } from 'react';
import { Header, Footer } from './components/containers';
import Router from './AppRouter';

class App extends Component {
  render() {
    return (
      <div>
        <Header title='Manga Client'/>
        <Router />
        <Footer title='Kuzmiankou Anatoli'/>
      </div>
    );
  }
}

export default App;
