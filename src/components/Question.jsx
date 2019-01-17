import React, { Component } from 'react'; 
import { QuestionText } from './QuestionText.jsx';
import { AnswerButton} from './AnswerButton.jsx';
// import components


export class Question extends Component {
  
  render() {
    return (
      <div>
        <QuestionText/>
        <AnswerButton/>
        <AnswerButton/>
        <AnswerButton/>
        <AnswerButton/>
      
      </div>
    );
  }
}

export default Question;