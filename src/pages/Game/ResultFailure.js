import React from 'react'
import { Link } from 'react-router'

import { GameHeader } from '../../components/'
import './ResultFailure.less'

const titles = (correctAnswers) => {

   switch (Number(correctAnswers)) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
         return "无敌坑王"
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
         return "护坑使者"
      case 11:
      case 12:
      case 13:
         return "站坑大盗"
      case 14:
      case 15:
      case 16:
         return "站坑神人"
      default:
         return "十大杰出站神"
   }
}
const renderFailureSummary = (correctAnswerCount) => {
   return (
      <div className="failure-summary">
         <p>
            Oops，挑站失败！
         </p>
         <p>
            在程序员思维挑战之奋“站”到底中不慎掉坑，获得“{titles(correctAnswerCount)}”称号！
         </p>
      </div>
   )
}

const renderYouCanYouUpAgainButton = () => (
   <div className="you-can-you-up-again">
      <Link to="/game/questions">
         <div className="ranking-background">
            <span>不服再站！</span>
         </div>
      </Link>
   </div>
)

const ResultFailure = ({ params }) => (
   <div className="ResultFailure">
      <div className="result-container">
         <GameHeader />
         <div className="result-content">
            { renderFailureSummary(params.correctAnswerCount) }
            { renderYouCanYouUpAgainButton() }
         </div>
      </div>
      <div className="more-info">
         <img src={require('../../../images/game/bottom_2.svg')} alt=""/>
      </div>
   </div>
)

export default ResultFailure