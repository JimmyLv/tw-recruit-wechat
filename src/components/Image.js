import React from 'react'
import './Image.less'

const Image = ({ title, image }) => (
  <div className="text-center">
    <img className="img-responsive image" src={require(`../../images/${image}`)} alt={title}/>
    <div className="img-title">{title}</div>
  </div>
)

export default Image