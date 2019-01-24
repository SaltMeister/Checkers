import React, { Component } from 'react'; 
import { QuestionText } from './QuestionText.jsx';
import { AnswerButton} from './AnswerButton.jsx';
// import components

export class Question extends Component {

  render() {
    return (
      <div>
        <QuestionText question = "What is the right answer?"/>
        <AnswerButton answer = "Answer 1" />
        <AnswerButton answer = "Answer 2"/>
        <AnswerButton answer = "Answer 3"/>
        <AnswerButton answer = "Answer 4"/>
      </div>
    );
  }
}

export default Question;