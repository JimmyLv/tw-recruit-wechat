import React, { Component } from 'react'
import { Link } from 'react-router'

const renderSuccessChallengedPercentage = () => (
   <div className="success-challenged-percentage">

   </div>
)

const renderNobodySuccessYetPage = () => (
   <div className="nobody-success-yet">
      <p> 迄今为止还没有一个“站神”出现！ </p>
      <p> 快去挑战做“站神”第一人吧！ </p>
   </div>
)

const renderYouCanYouUpButton = () => (
   <div className="you-can-you-up-again">
      <Link to="/game/questions">
         不服再站！
      </Link>
   </div>
)


class Ranking extends Component {
   constructor(props) {
      super(props)
      this.state = {
         totalWonChallenge: 2
      }
   }

   componentDidMount() {
      this.setState({})
   }

   render() {
      const { totalWonChallenge } = this.state
      return (
         <div className="Ranking-container">
            { totalWonChallenge > 0 ? renderSuccessChallengedPercentage() : '' }
            { totalWonChallenge === 0 ? renderNobodySuccessYetPage() : this.renderRankingPage(totalWonChallenge) }
            { totalWonChallenge === 0 ? renderYouCanYouUpButton() : ''}
         </div>
      )
   }

   renderRankingPage(totalWonChallenge) {
      return (
         <div className="ranking-page">
            <p>前面已有{totalWonChallenge}名“站神”完成挑战！</p>
         </div>
      )
   }
}

export default Ranking