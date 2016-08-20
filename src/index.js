import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './components/App'
import Company from './components/Company'
import Campus from './components/Campus'
import Recruit from './components/Recruit'
import NotFound from './components/NotFound'
import './index.css'

ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/">
        <IndexRoute component={App}/>
        <Route path="recruit" component={Recruit}/>
        <Route path="campus" component={Campus}/>
        <Route path="company" component={Company}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  ), document.getElementById('root')
)
