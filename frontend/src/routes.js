import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Vendor from './pages/Vendor'
import AddVendor from './pages/AddVendor';
import PrivateRoute from './components/PrivateRoute';

export default function Routes() {
    return (
        <Switch>                
            <PrivateRoute exact path='/home' component={Home} />        
            <Route exact path='/' component={Login} />
        </Switch>
    )
}