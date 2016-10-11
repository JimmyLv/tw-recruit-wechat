import React from 'react'
import { Link } from 'react-router'

import { GameHeader, GameFooter } from '../../components/'
import './GameEntry.less'

const GameEntry = () => (
   <div className="GameEntry">
      <div className="introduction-panel">
         <GameHeader />
         <div className="gameContainer">
            <h2>
               <img src={require('../../../images/game/title.svg')} alt=""/>
            </h2>
            <p>
               <span className="pink">挖掘个性、充满悬念、</span>
               <span className="orange">小心有炸！</span>
            </p>
            <p>
               <span className="pink">拾得</span>
               <span className="green">20枚</span>
               <span className="darkorange">元宝即可镀金，</span>
            </p>
            <p>
               <span className="pink">看你</span>
               <span className="darkbrown">是否可以镀成</span>
               <span className="yellow">"土豪金"</span>！
            </p>
            <div className="let-me-try-link">
               <Link to="/game/questions">
                  <div className="let-me-try-background">
                     <img src={require('../../../images/game/button_word_1.svg')} className="let-me-try-word" alt=""/>
                     <img src={require('../../../images/game/decorator.svg')} className="decorator" alt=""/>
                  </div>
               </Link>
            </div>
         </div>
      </div>
      <div className="gameFooter">
         <GameFooter />
      </div>

   </div>
)

export default GameEntry