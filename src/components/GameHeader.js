import React from 'react'

import './GameHeader.less'

const GameHeader = () => (
   <div className="GameHeader">
      <img src={require('../../images/game/header/logo.svg')} alt=""/>
      <span className="honor-to-thoughtworks">ThoughtWorks出品</span>
   </div>
)

export default GameHeader