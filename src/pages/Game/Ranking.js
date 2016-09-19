import React, { Component } from 'react'
import { Link } from 'react-router'

class Ranking extends Component {
   constructor(props) {
      super(props)
      this.state = { totalWonChallenge: 0 }
   }

   componentDidMount() {
      this.setState({})
   }

   render() {
      const { totalWonChallenge } = this.state
      return (
         <div className="Ranking-container">
            { totalWonChallenge > 0 ? this.renderSuccessChallengedPercentage() : '' }
            { totalWonChallenge === 0 ? this.renderNobodySuccessYetPage() : this.renderRankingPage() }
            { totalWonChallenge === 0 ? this.renderYouCanYouUpButton() : ''}
         </div>
      )
   }

   renderSuccessChallengedPercentage() {
      return (
         <div className="success-challenged-percentage">

         </div>
      )
   }

   renderNobodySuccessYetPage() {
      return (
         <div className="nobody-success-yet">
            <p> 迄今为止还没有一个“站神”出现！ </p>
            <p> 快去挑战做“站神”第一人吧！ </p>
         </div>
      )
   }

   renderRankingPage() {
      return (
         <div className="ranking-page">
            <p>前面已有855名“站神”完成挑战！</p>
         </div>
      )
   }

   renderYouCanYouUpButton() {
      return (
         <div className="you-can-you-up-again">
            <Link to="/game/questions">
               不服再站！
            </Link>
         </div>
      )
   }
}

export default Ranking