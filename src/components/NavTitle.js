import React from 'react'

const NavTitle = ({ title, image }) => (
  <div className="row" style={{ marginTop: '20px', marginBottom: '80px' }}>
    <div className="col-xs-8 col-xs-offset-2">
      <div className="media">
        <div className="media-left media-middle">
          <img className="media-object" style={{ width: '70px' }} src={require(`../../images/${image}`)}/>
        </div>
        <div className="media-body">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  </div>
)

export default NavTitle
