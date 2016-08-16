import React from 'react'
import logo from './logo.svg'

const Header = () => (
	<div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React App</h2>
      <h3>Let me try hot reload work or not?</h3>
      <h4 className="pre">{decodeURI('hello')}</h4>
      <h5>why do onot reload by components, you have no reason to do this.</h5>
    </div>
)

export default Header