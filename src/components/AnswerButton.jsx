import React, { Component } from 'react';
// import components


export class AnswerButton extends Component {
  
  render() {
    return (
        <div>
            <button class="answer">{this.props.answer}</button>
        </div>
    );
  }
}

export default AnswerButton;