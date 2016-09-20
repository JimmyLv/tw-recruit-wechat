import React, { Component } from 'react';

import { Question, Navigation, Background, Header, Footer } from '../../components'
import { shuffle } from '../../utils/random'

import Data from './questions.json'
import './Questions.less'

class Questions extends Component {
   constructor(props) {
      super(props)
      this.handleNext = this.handleNext.bind(this)
      this.state = {
         questions: Questions.loadQuestions(),
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
         <div className="Game-container">
            <div className="Game">
               <Header />
               <Question question={questions[indexCurrent]} questionIndex={indexCurrent} onNext={this.handleNext}/>
               <Background />
               <Navigation index={this.state.indexCurrent} total={this.state.questions.length} onNext={this.handleNext}
               />
               <Footer />
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

export default Questions
