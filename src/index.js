import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './pages/App'
import Recruit from './pages/Recruit'
import { Schedule, Position, Announce, FAQ } from './pages/Recruit/'

import Campus from './pages/Campus'
import { Coding, OpenDay, Girl } from './pages/Campus/'

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
        <Route path="campus">
          <IndexRoute component={Campus}/>
          <Route path="coding" component={Coding}/>
          <Route path="openday" component={OpenDay}/>
          <Route path="girl" component={Girl}/>
        </Route>
        <Route path="company" component={Company}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  ), document.getElementById('root')
)
