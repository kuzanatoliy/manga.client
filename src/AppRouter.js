import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { HOME_URL, CATALOG_URL, SEARCH_URL, MANGA_URL } from './constants/urls';

function AppRouter() {
  //return <div>Bla</div>
  return (
    <Router>
      <Switch>
        <Redirect exact from={ HOME_URL } to={ CATALOG_URL } />
        <Route path={ `${ CATALOG_URL }/:genreId` } render={ () => <div>CATALOG_GENREID</div> } />
        <Route path={ CATALOG_URL } render={ () => <div>CATALOG</div> }/>
        <Route path={ SEARCH_URL } render={ () => <div>SEARCH</div> } />
        <Route path={ MANGA_URL } render={ () => <div>MANGA</div> } />
        <Route render={ () => <div>ERROR</div> } />
      </Switch>
    </Router>
  );
}

export default AppRouter;
