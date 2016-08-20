import React from 'react'

const NavItem = ({ title, image }) => (
  <div className="col-xs-4" style={{ transform: 'rotate(7deg)' }}>
    <img src={require(`../../images/${image}`)} className="img-responsive" alt="magenta"/>
    <h4 className="Recruit-nav">{title}</h4>
  </div>
)

export default NavItem
