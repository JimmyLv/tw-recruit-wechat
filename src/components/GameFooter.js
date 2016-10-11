import React from 'react'

import './GameFooter.less'

const GameFooter = () => (
   <div className="GameFooter">
      <img className="people" src={require('../../images/game/people.svg')} alt=""/>
      <img className="money" src={require('../../images/game/money.svg')} alt=""/>
      <img src={require('../../images/game/bottom.svg')} alt=""/>
   </div>
)

export default GameFooter
