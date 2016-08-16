import React, { Component } from 'react'
import './App.css'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div>
        <img src="http://7xjbdq.com1.z0.glb.clouddn.com/images/2016/1471267222857.png" className="img-responsive" alt="Logo"/>
        <img src="http://7xjbdq.com1.z0.glb.clouddn.com/Social%20globe.jpg" className="img-responsive" alt="Logo"/>
        <ul className="list-inline">
          <li>
            <Link to={'/apply'}>
              <img src="http://7xjbdq.com1.z0.glb.clouddn.com/voice-of-the-customer.png" className="img-responsive" alt=""/>
            </Link>
          </li>
          <li>
            <Link to={'/campus'}>
              <img src="http://7xjbdq.com1.z0.glb.clouddn.com/voice-of-the-customer.png" className="img-responsive" alt=""/>
            </Link>
          </li>
          <li>
            <Link to={'/company'}>
              <img src="http://7xjbdq.com1.z0.glb.clouddn.com/voice-of-the-customer.png" className="img-responsive" alt=""/>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default App
