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

const renderRankingButton = () => (
   <div className="ranking">
      <Link to="/game/ranking">
         看看战神排名
      </Link>
   </div>
)
const ResultSuccess = () => (
   <div className="Result-container">
      { renderSuccessSummary() }
      { renderRankingButton() }
   </div>
)

export default ResultSuccess
