import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AdminPage from 'components/admin-page/admin-page.component'
import LandingPage from 'components/landing-page/landing-page.component'
import { routes } from 'routes';

import './App.css';

const App = () => {

  const { landing, admin } = routes

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={landing.path}>
            <LandingPage />
          </Route>
          <Route exact path={admin.path}>
            <AdminPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
