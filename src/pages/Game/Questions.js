import React, { Component } from 'react';
import { Question, Navigation, Background, Header, Footer } from '../../components'

import Data from '../../data/questions.json'
import './Questions.less'

class Questions extends Component {
   constructor(props) {
      super(props)
      this.handleNext = this.handleNext.bind(this)
      this.handlePrevious = this.handlePrevious.bind(this)
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
      return Questions.random(questions, 13)
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
               <Question question={questions[indexCurrent]} questionIndex={indexCurrent} />
               <Background />
               <Navigation index={this.state.indexCurrent} total={this.state.questions.length}
                           onNext={this.handleNext} onPrevious={this.handlePrevious}
               />
               <Footer />
            </div>
         </div>
      )
   }

   handlePrevious(current) {
      if (current <= 0) return;

      this.setState({ indexCurrent: current - 1 })
   }

   handleNext() {
      const { questions, indexCurrent } = this.state
      if (!questions[indexCurrent].userAnswer) return;

      if (indexCurrent < questions.length - 1) {
         this.setState({ indexCurrent: indexCurrent + 1 })
         return;
      }

      localStorage.setItem('questions', JSON.stringify(questions))
   }
}

export default Questions