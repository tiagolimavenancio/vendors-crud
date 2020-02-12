import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ compoment: Component, ...rest }) => (
    <Route { ...rest } render={ props => (
        localStorage.getItem('auth') 
        ? <Component { ...props } /> 
        : <Redirect to={{ pathname: '/', state: { from: props.location }}} />
    )} />
)

export default PrivateRoute;