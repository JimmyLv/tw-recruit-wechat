import React from 'react'
import { Link } from 'react-router'

import './App.css'

const mainNav = [
  { title: '应聘校招', link: 'recruit', image: 'voice-of-the-customer.png' },
  { title: '校园活动', link: 'campus', image: 'campus-activities.png' },
  { title: '了解公司', link: 'company', image: 'go-self-service-2.png' },
]

const renderNav = ({ title, link, image }, index) => (
  <div key={index} className="col-xs-4">
    <Link to={link}>
      <div className="text-center">
        <img src={require(`../../images/${image}`)} className="img-responsive" alt={link}/>
        <h3 className="main-nav-title">{title}</h3>
      </div>
    </Link>
  </div>
)

const App = () => (
  <div className="container">
    <img src={require('../../images/TW Colour Logos_pink.jpg')} className="img-responsive center-block" alt="Logo"/>
    <img src={require('../../images/social-globe.jpg')} className="img-responsive center-block" alt="Logo"/>
    <div className="row">
      {mainNav.map((nav, index) => renderNav(nav, index))}
    </div>
  </div>
)

export default App
