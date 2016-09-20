import React, { Component } from 'react'

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

         <div className="Question-container">
            <h4 className="question-index">第 {questionIndex} 题</h4>
            <h4 className="question-content">{ question.question }</h4>
            <div className="options">{
               question.options.map((option, index) => this.renderOption(option, index))
            }</div>
         </div>
      )
   }

   renderOption(option, index) {
      return (
         <div className="option-container">
            <label className="option" key={index} htmlFor={ `option${index}` }>
               <input id={ `option${index}` } type="radio" value={option} name="option"
                      onChange={this.handleOptionSelected}
                      checked={option === this.state.userAnswer}/>
               <b><span className="option-text">{option}</span></b>
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