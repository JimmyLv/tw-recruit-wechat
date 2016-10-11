import React, { Component } from 'react';

import { Question, GameFooter } from '../../components'
import { shuffle } from '../../utils/random'

import Data from './questions.json'
import './QuestionsPage.less'

class QuestionsPage extends Component {
   constructor(props) {
      super(props)
      this.handleNext = this.handleNext.bind(this)
      this.state = {
         questions: QuestionsPage.loadQuestions(),
         indexCurrent: 0
      }
   }

   static loadQuestions() {
      return Data.map((question, index) => ({
         ...question,
         index,
         options: shuffle(question.options, 4)
      }))
   }

   render() {
      const { questions, indexCurrent } = this.state
      return (
         <div className="Game">
            <div className="QuestionsPage">
               <div className="Questions">
                  <img className="questionImage" src={require('../../../images/game/header/logo.svg')} alt=""/>
                  <Question question={questions[indexCurrent]} questionIndex={indexCurrent}
                            onNext={this.handleNext}/>
               </div>
               <GameFooter />
            </div>
         </div>
      )
   }

   handleNext(userAnswer) {
      const { questions, indexCurrent } = this.state
      const currentQuestion = questions[indexCurrent]

      if (currentQuestion.correctAnswer !== userAnswer) {
         this.props.history.push(`/game/result/failure/${indexCurrent}`)
         return
      }

      if (indexCurrent === questions.length - 1) {
         this.props.history.push('/game/result/success')
         return
      }

      this.setState({ indexCurrent: indexCurrent + 1 })
   }

}

export default QuestionsPage
