import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { getToken } from './utils/auth';
import ProtectedRoute from './components/PrivateRoute';

import Login from './components/Login';
import BubblePage from './components/BubblePage';
import './styles.scss';

function App() {
    const LoggedIn = getToken();
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={Login} />
        <ProtectedRoute exact path='/bubbles' component={BubblePage} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
