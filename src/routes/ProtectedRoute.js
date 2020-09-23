import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const access = localStorage.getItem('beta-access')
  return (
    <Route
      {...rest}
      render={() => access ? <Component/> : <Redirect to='/beta-access'/>}
    />
  )
}

export default ProtectedRoute;


