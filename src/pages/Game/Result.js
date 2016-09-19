import React from 'react'
import { Link } from 'react-router'

import './Result.css'

const renderSuccessSummary = () => (
   <div className="success-summary">
      <p>
         Cool，挑站成功！
      </p>
      <p>
         在程序员思维挑战之奋“站”到底中荣获“惊世站神”称号！
      </p>
      <p>
         全世界为你惊呼～
      </p>
   </div>
)

const renderFailureSummary = (title) => (
   <div className="failure-summary">
      <p>
         Oops，挑站失败！
      </p>
      <p>
         在程序员思维挑战之奋“站”到底中不慎掉坑，获得“{title}”称号！
      </p>
   </div>
)

const renderYouCanYouUpAgainButton = () => (
   <div className="you-can-you-up-again">
      <Link to="/game/questions">
         不服再站！
      </Link>
   </div>
)

const renderRankingButton = () => (
   <div className="ranking">
      <Link to="/game/ranking">
         看看战神排名
      </Link>
   </div>
)
const Result = ({ challengeSuccess, title }) => (
   <div className="Result-container">
      { challengeSuccess ? renderSuccessSummary() : renderFailureSummary(title) }
      { !challengeSuccess ? renderYouCanYouUpAgainButton() : '' }
      { renderRankingButton() }
   </div>
)

export default Result
