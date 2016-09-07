import React from 'react'
import './NavTitle.less'

const NavTitle = ({ title, image }) => (
  <div className="row NavTitle">
    <div className="col-xs-8 col-xs-offset-2">
      <div className="media">
        <div className="media-left media-middle">
          <img className="media-object nav-image" src={require(`../../../images/${image}`)}/>
        </div>
        <div className="media-body">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  </div>
)

export default NavTitle
