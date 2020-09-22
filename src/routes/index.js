import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import BetaAccess from 'pages/BetaAccess/BetaAccess'
import Home from 'pages/Home/Home'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/beta-access' component={BetaAccess} />
      <ProtectedRoute path='/' exact component={Home} />
    </Switch>
  </BrowserRouter>
)


export default Routes