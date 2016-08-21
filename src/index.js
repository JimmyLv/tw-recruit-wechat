import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './components/App'
import Recruit from './components/Recruit'
import Schedule from './components/Schedule'

import Campus from './components/Campus'
import Company from './components/Company'
import NotFound from './components/NotFound'

import './index.css'

ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/">
        <IndexRoute component={App}/>
        <Route path="recruit">
          <IndexRoute component={Recruit}/>
          <Route path="schedule" component={Schedule}/>
          <Route path="position" component={Schedule}/>
          <Route path="announce" component={Schedule}/>
          <Route path="faq" component={Schedule}/>
        </Route>
        <Route path="campus" component={Campus}/>
        <Route path="company" component={Company}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  ), document.getElementById('root')
)
