import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ErrorPage, MangaChaptersPage, MangaPage } from './pages';
import MangaListPage from './redux-components/MangaListPage';

function AppRouter() {
  //return <div>Bla</div>
  return (
    <Router>
      <Switch>
        <Route path='/manga' component={ MangaPage } />
        <Route path='/manga-list' component={ MangaListPage } />
        <Route path='/manga-list/:id' component={ MangaListPage } />
        <Route path='/manga-chapters' component={ MangaChaptersPage } />
        <Route path='/*' component={ ErrorPage } />
      </Switch>
    </Router>
  );
}

export default AppRouter;
