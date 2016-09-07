import React from 'react'

import './Person.css'

const Person = ({ image, position, intro }) => (
  <div className="media">
    <div className="media-left media-middle">
      <img className="media-object person-image" src={require(`../../../images/${image}`)}/>
    </div>
    <div className="media-body">
      <strong className="position">{position}</strong>
      <div>{intro}</div>
    </div>
  </div>
)

export default Person
