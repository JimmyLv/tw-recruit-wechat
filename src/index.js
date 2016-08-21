import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './pages/App'
import Recruit from './pages/Recruit'
import Schedule from './pages/Schedule'
import Position from './pages/Position'
import Announce from './pages/Announce'
import FAQ from './pages/FAQ'

import Campus from './pages/Campus'
import Company from './pages/Company'
import NotFound from './pages/NotFound'

import './index.css'

ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/">
        <IndexRoute component={App}/>
        <Route path="recruit">
          <IndexRoute component={Recruit}/>
          <Route path="schedule" component={Schedule}/>
          <Route path="position" component={Position}/>
          <Route path="announce" component={Announce}/>
          <Route path="faq" component={FAQ}/>
        </Route>
        <Route path="campus" component={Campus}/>
        <Route path="company" component={Company}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  ), document.getElementById('root')
)