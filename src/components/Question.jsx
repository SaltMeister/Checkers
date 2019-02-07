import React, { Component } from 'react'; 
import { QuestionText } from './QuestionText.jsx';
import { AnswerButton} from './AnswerButton.jsx';
// import components

export class Question extends Component {
  render() {
    return (
      <div>
        <QuestionText question={this.props.QuestionText}/>
        <AnswerButton answer={this.props.choice[0]} onButtonClick={this.props.onClick} />
        <AnswerButton answer={this.props.choice[1]} onButtonClick={this.props.onClick} />
        <AnswerButton answer={this.props.choice[2]} onButtonClick={this.props.onClick} />
        <AnswerButton answer={this.props.choice[3]} onButtonClick={this.props.onClick} />
      </div>
    );
  }
}

export default Question;