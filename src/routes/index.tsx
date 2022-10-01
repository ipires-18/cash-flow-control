import { Switch } from 'react-router-dom'
import { SignIn } from '../page/SignIn'
import { Dashboard } from '../page/Dashboard'
import { Report } from '../page/Report'

import React from 'react'
import Route from './Route'


const Routes: React.FC = () => {
  return (
    <Switch>
      <Route
        component={SignIn}
        path="/"
        exact
      />
      <Route
        component={Dashboard}
        path="/inicio"
        exact
      />
      <Route
        component={Report}
        path="/relatorio"
        exact
      />
    </Switch>
  )
}

export default Routes
