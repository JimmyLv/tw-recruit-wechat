import React, { Component } from 'react'
import { Link } from 'react-router'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <img src={require('../../images/TW Colour Logos_pink.jpg')} className="img-responsive" alt="Logo"/>
        <img src={require('../../images/social-globe.jpg')} className="img-responsive" alt="Logo"/>
        <table>
          <tr>
            <td>
              <Link to={'/recruit'}>
                <img src={require('../../images/voice-of-the-customer.png')} className="img-responsive" alt=""/>
              </Link>
            </td>
            <td>
              <Link to={'/campus'}>
                <img src={require('../../images/campus-activities.png')} className="img-responsive" alt=""/>
              </Link>
            </td>
            <td>
              <Link to={'/company'}>
                <img src={require('../../images/go-self-service-2.png')} className="img-responsive" alt=""/>
              </Link>
            </td>
          </tr>
          <tr>
            <td className="text-center"><h3>应聘校招</h3></td>
            <td className="text-center"><h3>校园活动</h3></td>
            <td className="text-center"><h3>了解公司</h3></td>
          </tr>
        </table>
      </div>
    )
  }
}

export default App
