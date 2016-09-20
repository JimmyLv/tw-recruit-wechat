import React from 'react'
import { Link } from 'react-router'

import './Game/Questions.less'

const Game = () => (
   <div className="Game">
      <div className="introduction-panel">
         <p>
            程序员思维挑战之奋“站”到底！
         </p>
         <p>
            挖掘个性、充满悬念
         </p>
         <p>
            你会是“站”到最后的“惊世战神”吗？
         </p>
      </div>
      <Link to="/game/questions">我来应"站"！</Link>
   </div>
)

export default Game