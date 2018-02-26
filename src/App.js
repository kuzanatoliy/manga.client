import React, { Component } from 'react';
import { Header } from './components/containers';
import Footer from './components/Footer';
import Router from './AppRouter';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router />
        <Footer />
      </div>
    );
  }
}

export default App;
