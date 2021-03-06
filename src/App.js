import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
// import axios from 'axios';

import Login from './Login';
import Dashboard from './Dashboard';
// import Home from './Home';

import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken, removeUserSession, /*setUserSession*/ } from './Utils/Common';
import DashboardStore from './DashboardStore';
import LoginNew from './LoginNew';

function App() {
  // const [authLoading, setAuthLoading] = useState(true);

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

  // if (authLoading && getToken()) {//TODO
  //   //return <div className="content">Checking Authentication...</div>
  // }

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
            <NavLink activeClassName="active" to="/login">Login</NavLink><small> (Access without token only)</small>
            <NavLink activeClassName="active" to="/dashboard">Dashboard Model 1</NavLink><small> (Access with token only)</small>
            <NavLink activeClassName="active" to="/dashboardModel2">Dashboard Model 2</NavLink><small> (Access with token only)</small>
            <NavLink activeClassName="active" to="/" onClick={handleLogout} >Logout</NavLink>
            
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={LoginNew} />
              <PublicRoute path="/login" component={LoginNew} />
              <PrivateRoute path="/dashboard" component={DashboardStore} />
              <PrivateRoute path="/dashboardModel2" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
