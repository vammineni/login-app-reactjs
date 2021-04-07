import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home';

import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';
import { Link } from '@material-ui/core';

function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    // axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
    //   setUserSession(response.data.token, response.data.user);
    //   setAuthLoading(false);
    // }).catch(error => {
    //   removeUserSession();
    //   setAuthLoading(false);
    // });
  }, []);

  if (authLoading && getToken()) {//TODO
    //return <div className="content">Checking Authentication...</div>
  }

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    // props.history.push('/login');
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            {/* <NavLink exact activeClassName="active" to="/">Home</NavLink> */}
            <NavLink activeClassName="active" to="/login"><Link>Login</Link></NavLink><small>(Access without token only)</small>
            <NavLink activeClassName="active" to="/dashboard"><Link>Dashboard</Link></NavLink><small>(Access with token only)</small>
            <NavLink to="/"><Link onClick={handleLogout} >Logout</Link></NavLink>
            
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Login} />
              <PublicRoute path="/login" component={Login} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
