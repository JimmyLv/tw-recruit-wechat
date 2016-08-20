import React from 'react'
import './NavItem.css'

const NavItem = ({ title, image }) => (
  <div className="col-xs-6">
    <img src={require('../../images/' + image)} className="img-responsive" alt="magenta"/>
    <h2 className="nav-item-title">{title}</h2>
  </div>
)

export default NavItem
