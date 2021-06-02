import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { AdminPageContainer } from 'containers/admin-page.container'
import { LandingPageContainer } from 'containers/landing-page.container'

import { routes } from 'routes';

import './App.css';
import 'assets/styles/global.scss'

const App = () => {

  const { landing, admin } = routes

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={landing.path}>
            <LandingPageContainer />
          </Route>
          <Route exact path={admin.path}>
            <AdminPageContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
