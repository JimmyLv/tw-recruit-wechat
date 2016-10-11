import React from 'react'
import { Link } from 'react-router'

import { GameHeader } from '../../components/'
import './ResultSuccess.less'

const renderSuccessSummary = () => (
   <div className="success-summary">
      <p>
         Cool，挑站成功！
      </p>
      <p>
         您总共获得20枚元宝，
      </p>
      <p>
         成功镀了一身土豪金！
      </p>
      <p>
         全世界为你惊呼～
      </p>
   </div>
)

const renderRankingButton = () => (
   <div className="ranking">
      <img src={require('../../../images/game/golden_people.svg')} className="golden-people" alt=""/>
      <Link to="/game/ranking">
         <div className="ranking-background">
            <img src={require('../../../images/game/button_word_2.svg')} className="ranking-word" alt=""/>
            <img src={require('../../../images/game/decorator.svg')} className="decorator" alt=""/>
         </div>
      </Link>
   </div>
)

const ResultSuccess = () => (
   <div className="ResultSuccess">
      <div className="result-container">
         <GameHeader />
         <div className="result-content">
            { renderSuccessSummary() }
            { renderRankingButton() }
         </div>
      </div>
      <div className="more-info">
         <img src={require('../../../images/game/bottom_2.svg')} alt=""/>
      </div>
   </div>
)

export default ResultSuccess
