import React, { Component } from 'react';

import { Question, Navigation, Background, Header, Footer } from '../../components'

import Data from '../../data/questions.json'
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
      return Questions.shuffleQuestions(Data).map((question, index) => ({
         ...question,
         index
      })).map(question => ({
         ...question,
         options: Questions.shuffleOptions(question.options)
      }))
   }

   static shuffleQuestions(questions) {
      return Questions.random(questions, 2)
   }

   static shuffleOptions(options) {
      return Questions.random(options, 4)
   }

   static random(array, number) {
      if (array.length < number) return array
      let choosedIndecies = []
      let result = []

      while (result.length < number) {
         let index
         do {
            index = Math.floor(Math.random() * array.length)
         } while (choosedIndecies.includes(index))

         choosedIndecies.push(index)
         result.push(array[index])
      }

      return result
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

      if (currentQuestion.correctAnswer === userAnswer) {
         this.setState({ indexCurrent: indexCurrent + 1})
      } else {
         this.props.history.push('/game/result/failure')
      }
   }

}

export default Questions
