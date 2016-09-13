import React, { Component } from 'react'
import { Link } from 'react-router'
import { Header, PercentageCircle } from '../../components'
import 'whatwg-fetch'

import './Result.css'

class Result extends Component {

   constructor(props) {
      super(props)
      this.state = { record: {} }
   }

   componentDidMount() {
      const questions = JSON.parse(localStorage.getItem('questions'))
      const record = this.calculateScore(questions)

      fetch('http://182.92.6.60:28080/tw-game/record', {
         method: 'post',
         headers: new Headers({
            'Content-Type': 'application/json'
         }),
         body: JSON.stringify(record)
      }).then(res => res.json())
         .then(content => {
            fetch(`http://182.92.6.60:28080/tw-game/record/${content.id}/defeatPercent`)
               .then(res => res.json())
               .then(content => {
                  this.setState({
                     record: { ...record, ranking: content }
                  })
               })
         })
   }

   calculateScore(questions) {
      if (!questions.every(question => question.userAnswer)) {
         console.log('perhaps you have questions not filling up')
      }

      const correctAnswers = questions.filter(those => {
         return those.correctAnswer === those.userAnswer
      }).length
      const score = Math.round((correctAnswers / questions.length) * 100)
      const id = new Date().getTime()

      return { id, score }
   }

   render() {
      const { score, ranking } = this.state.record
      console.log(ranking)
      return (
         <div className="Result-container">
            <div className="result">
               <Header />
               <div className="score-panel">
                  <p>
                     您本次答题得分
                  </p>
               </div>
               <div className="ranking-panel">
                  <span className="score-result">
                     <span className="score">{score}</span>
                     分
                  </span>
                  <PercentageCircle ranking={ranking}/>
               </div>
               <div className="ranking-text">
                  <p>
                     击败了全国 { (ranking * 100).toFixed(2) + '%' } 的小伙伴!
                  </p>
               </div>
               <div className="marketing">
                  <ul className="marketing-option">
                     <li className="join-us">
                        <a>加入我们</a>
                     </li>
                     <li className="play-again">
                        <Link to="/game">再玩一次</Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      )
   }

}

export default Result
