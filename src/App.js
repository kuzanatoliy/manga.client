import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header text='Manga client' />
        <header>header</header>
        <nav>nav</nav>
        <main>
          <section>User navigation</section>
          <section>Content</section>
        </main>
        <footer>footer</footer>
      </div>
    );
  }
}

export default App;
