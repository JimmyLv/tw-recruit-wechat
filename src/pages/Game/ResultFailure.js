import React from 'react'
import { Link } from 'react-router'

import './Result.css'

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

const ResultFailure = () => (
   <div className="ResultFailure container">
      { renderFailureSummary() }
      { renderYouCanYouUpAgainButton() }
   </div>
)

export default ResultFailure