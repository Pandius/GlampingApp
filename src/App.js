import React from 'react';
import { Router } from '@reach/router'

import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Router>
        <Home path='/' />
        <Articles path='/sites' />
        <ErrorPage default />
      </Router>    </div>
  );
}

export default App;
