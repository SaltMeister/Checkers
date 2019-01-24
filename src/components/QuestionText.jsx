import React, { Component } from 'react';
// import components


export class QuestionText extends Component {
  
  render() {
    return (
      <div>
          <h1 id="question">{this.props.question}</h1>
      </div>
    );
  }
}

export default QuestionText;