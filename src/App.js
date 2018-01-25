import React, { Component } from 'react';
import Header from './components/Header';
import GenreNavigator from './components/GenreNavigator';

class App extends Component {
  render() {
    return (
      <div>
        <Header text='Manga client' />
        <nav>
          <ul>
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
          </ul>
        </nav>
        <main>
          <section className="navigation">
            <GenreNavigator />
          </section>
          <section className="content">Content</section>
        </main>
        <footer>footer</footer>
      </div>
    );
  }
}

export default App;
