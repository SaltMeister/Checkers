import React, { Component } from 'react';
import '../css/App.css';
import { Question } from './Question.jsx';
import AnswerButton from './AnswerButton';
import { app } from 'firebase';
//import { buildFirebase} from '../clients/firebase.js';
// import components

//var firebaseDatabase = buildFirebase();
 // firebaseDatabase.ref("question").once("value", (snapshot) => {
  //  this.setState();
   //   console.log(snapshot.val());
//});
class App extends Component {
  constructor (props) {
    super(props);
    this.state =   {  questionText: "What is the capital of New York",
                      answer: "Albany",
                      choices: ["Austin", "SF", "Albany", "New York City"],
                      answerClicked: false,
                   }
  }

  handleClick(clickedAnswer)
  {
      this.setState({
          answerClicked: true,
      })
      if(this.state.choices[clickedAnswer] === this.state.answer) 
      {
        this.setState({
          choices: ["Correct", "Correct", "Correct", "Correct"],
        })
      }
      else if (this.state.choices[clickedAnswer] !== this.state.answer)
      {
        this.setState({
          choices: ["Incorrect", "Incorrect", "Incorrect", "Incorrect"],
        })
      }

  }

  render() {
    return (
      <div className="app">
        <Question className="question" QuestionText={this.state.questionText} choice={this.state.choices} onClick={ (clickedAnswer) => this.handleClick(clickedAnswer) }/>
      </div> 
    );
  }
}



export default App;