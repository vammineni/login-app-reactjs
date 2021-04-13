import React from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardStore from '../DashboardStore';
import LoginNew from '../LoginNew';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicRoute from '../Utils/PublicRoute';


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={LoginNew} />
                <PublicRoute path="/login" component={LoginNew} />
                <PrivateRoute path="/productDashboard" component={DashboardStore} />
                {/* <PrivateRoute path="/dashboardModel2" component={Dashboard} /> */}
            </Switch>
        </Router>
    );
}

export default App;