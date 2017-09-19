import React from 'react'
import { Router, Route, Switch } from 'dva/router'

import HomePage from './HomePage'
import Users from './Users'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/users" exact component={Users} />
      </Switch>
    </Router>
  )
}

export default RouterConfig
