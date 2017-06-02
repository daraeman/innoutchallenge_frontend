import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App/App'
import About from './modules/About'
import Users from './modules/Users/Users'
import User from './modules/User/User'
import Home from './modules/Home'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/challengers" component={Users}/>
      <Route path="/challengers/:userName" component={User}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
