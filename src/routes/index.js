import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import BetaAccess from 'pages/BetaAccess/BetaAccess'
import Home from 'pages/Home/Home'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute path='/' exact component={Home} />
        <Route path='/beta-access' component={BetaAccess} />
      </Switch>
    </BrowserRouter>
  )
}


export default Routes