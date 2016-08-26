import React from 'react'
import './Image.less'

const Image = ({ title, image }) => (
  <div className="Image">
    <img className="img-responsive center-block image" src={require(`../../images/${image}`)} alt={title}/>
    <div className="img-title">{title}</div>
  </div>
)

export default Image