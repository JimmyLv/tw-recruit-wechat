import React from 'react'
import './NavItem.less'

const NavItem = ({ title, image }) => (
  <div className="NavItem">
    <img src={require(`../../images/${image}`)} className="img-responsive" alt={title}/>
    <div className="nav-item-title">
      {title.split('\n').map((t, index)=><h2 key={index}>{t}</h2>)}
    </div>
  </div>
)

export default NavItem
