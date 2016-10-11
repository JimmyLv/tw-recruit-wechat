import React, { Component } from 'react'

import './Question.less'

class Question extends Component {
   constructor(props) {
      super(props)
      this.renderOption = this.renderOption.bind(this)
      this.handleOptionSelected = this.handleOptionSelected.bind(this)
      this.state = { userAnswer: props.question.userAnswer }
   }

   componentWillReceiveProps(nextProps) {
      this.setState({
         userAnswer: nextProps.question.userAnswer
      })
   }

   render() {
      const { question, questionIndex } = this.props
      return (

         <div className="Question">
            <div className="questionContainer">
               <h4 className="question-content"><b>{ questionIndex + 1 }. { question.question }</b></h4>
               <div className="options">{
                  question.options.map((option, index) => this.renderOption(option, index))
               }</div>
            </div>
         </div>
      )
   }

   renderOption(option, index) {
      const labels = { 0: 'A', 1: 'B', 2: 'C', 3: 'D' }
      return (
         <div className={ `option-container option${index}` } key={index}>
            <label className="option" htmlFor={ `option${index}` }>
               <input id={ `option${index}` } type="none" value={option} name="option"
                      onClick={this.handleOptionSelected}
                      checked={option === this.state.userAnswer}/>
               <b><span className="option-text" onChange={this.handleOptionSelected}>
                  {labels[index]}. {option}</span></b>
            </label>
         </div>
      )
   }

   handleOptionSelected(event) {
      const userAnswer = event.target.value
      this.props.onNext(userAnswer)
   }
}

export default Question