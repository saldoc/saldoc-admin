import React from 'react'

import AdminPage from 'components/admin-page/admin-page.component'
import LandingPage from 'components/landing-page/landing-page.component'
import { routes } from 'routes';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
