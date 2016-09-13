import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Main from './pages/Main'
import Recruit from './pages/Recruit'
import { Schedule, Position, Announce, FAQ } from './pages/Recruit/'

import Campus from './pages/Campus'
import { Coding, OpenDay, Girl } from './pages/Campus/'

import Company from './pages/Company'
import { Introduction, Activity, Training, Benefit, Office } from './pages/Company/'

import Game from './pages/Game'
import { Result } from './pages/Game/'

import NotFound from './pages/NotFound'

import './index.css'

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRoute component={Main}/>
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
        <Route path="company">
          <IndexRoute component={Company}/>
          <Route path="introduction" component={Introduction}/>
          <Route path="activity" component={Activity}/>
          <Route path="training" component={Training}/>
          <Route path="benefit" component={Benefit}/>
          <Route path="office" component={Office}/>
        </Route>
        <Route path="game">
          <IndexRoute component={Game}/>
          <Route path="result" component={Result}/>
        </Route>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  ), document.getElementById('root')
)
