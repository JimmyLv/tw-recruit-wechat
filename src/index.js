import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import App from './App'
import './index.css'

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="about" component={App}/>
        <Route path="users" component={App}>
          <Route path="/user/:userId" component={App}/>
        </Route>
        <Route path="*" component={App}/>
      </Route>
    </Router>
  ), document.getElementById('root')
)
