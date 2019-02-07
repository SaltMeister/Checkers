import React, { Component } from 'react';
// import components


export class AnswerButton extends Component {
  
  render() {
    return (
        <div>
            <button className="answer" onClick={ () => this.props.onButtonClick() } >{this.props.answer}</button>
        </div>
    );
  }
}

export default AnswerButton;