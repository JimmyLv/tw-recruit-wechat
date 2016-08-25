import React from 'react'
import { Link } from 'react-router'

import './Main.css'

const mainNav = [
  { title: '应聘校招', link: 'recruit', image: 'voice-of-the-customer.png' },
  { title: '校园活动', link: 'campus', image: 'campus-activities.png' },
  { title: '了解公司', link: 'company', image: 'go-self-service-2.png' },
]

const renderNav = ({ title, link, image }, index) => (
  <div key={index} className="col-xs-4 nav">
    <Link to={link}>
      <div className="text-center">
        <img src={require(`../../images/glyph-7-pink.png`)} className="img-responsive nav-image" alt={link}/>
        <h3 className="nav-title">{title}</h3>
      </div>
    </Link>
  </div>
)

const App = () => (
  <div className="container">
    <div className="wrap">
      <div className="main">
        <img src={require('../../images/TW Colour Logos_pink.png')} className="img-responsive center-block" alt="Logo"/>
        <img src={require('../../images/social-globe.png')} className="img-responsive center-block logo" alt="Logo"/>
        <img src={require('../../images/campus-activities.png')}
             className="center-block another-logo"/>
      </div>
    </div>
    <div className="footer">
      {mainNav.map((nav, index) => renderNav(nav, index))}
    </div>
  </div>
)

export default App
