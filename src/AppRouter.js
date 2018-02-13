import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { HOME_URL, CATALOG_URL, SEARCH_URL, MANGA_URL } from './constants/urls';
import { CatalogPage } from './pages';
import Main from './components/Main';

function AppRouter() {
  return (
    <Router>
      <Main>
        <Switch>
          <Redirect exact from={ HOME_URL } to={ CATALOG_URL } />
          <Route exact path={ `${ CATALOG_URL }/:genreId` } component={ CatalogPage } />
          <Route exact path={ CATALOG_URL } component={ CatalogPage }/>
          <Route exact path={ SEARCH_URL } render={ () => <div>SEARCH</div> } />
          <Route exact path={ MANGA_URL } render={ () => <div>MANGA</div> } />
          <Route render={ () => <div>ERROR</div> } />
        </Switch>
      </Main>
    </Router>
  );
}

export default AppRouter;
