import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ErrorPage, MangaChaptersPage, MangaListPage, MangaPage } from './pages';

function AppRouter() {
  //return <div>Bla</div>
  return (
    <Router>
      <Switch>
        <Route exact path='/manga' component={ MangaPage } />
        <Route exact path='/manga-list' component={ MangaListPage } />
        <Route exact path='/manga-chapters' component={ MangaChaptersPage } />
        <Route exact path='/*' component={ ErrorPage } />
      </Switch>
    </Router>
  );
}

export default AppRouter;
