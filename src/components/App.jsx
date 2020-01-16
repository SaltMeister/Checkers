import React, { Component } from 'react';
import '../css/App.css';
import { Question } from './Question.jsx';
import AnswerButton from './AnswerButton';
import { app } from 'firebase';
import firebase from 'firebase';

export function getQuestions(cb) {
  const app = firebase.initializeApp({
    apiKey: "AIzaSyADAYC7lX5QVEspv8BUeV2uDqrFle8yQpk",
    authDomain: "studio-trivia-db.firebaseapp.com",
    databaseURL: "https://studio-trivia-db.firebaseio.com",
    projectId: "studio-trivia-db",
    storageBucket: "studio-trivia-db.appspot.com",
    messagingSenderId: "736024037811"
  });
  firebase.database(app).ref('/questions').on('value', (snapshot) => {
    let questions = Object.values(snapshot.val());
    cb(questions);
  });
}

class App extends Component {
  constructor (props) {
    super(props);
    this.state =   {  userChoice: 0,
                      opponentChoice: 0,
                      trumpCard: 0,
                      winAmount: 0,
                   }

      getQuestions((questions) => {
      console.log(questions);
        this.setState({
          ...this.state,
          "questions": questions
        });
      });
  }
  handleClick(clickedAnswer)
  {
      if(clickedAnswer === this.state.correct_choice_index) 
      {
        this.setState({
          choices: ["Correct", "Correct", "Correct", "Correct"],
        })
      }
      else if (clickedAnswer !== this.state.correct_choice_index)
      {
        this.setState({
          choices: ["Incorrect", "Incorrect", "Incorrect", "Incorrect"],
        })
      }  
  }

  resetButton()
  {
    this.setState({
      questionText: this.state.questions[this.state.currentIndex].question_text,
      questions: this.state.questions,
      correct_choice_index: this.state.questions[this.state.currentIndex].correct_choice_index,
      questions: this.state.questions,
      choices: this.state.questions[this.state.currentIndex].choices,
      currentIndex: this.state.currentIndex += 1,
    })

    if (this.state.questionText === undefined)
    {
      this.setState({
        questions: "The game over stop play",
      })
    }
  }

  render() {
    return (
      <div className="app">
        <Question className="question" QuestionText={this.state.questionText} choice={this.state.choices} onClick={ (clickedAnswer) => this.handleClick(clickedAnswer) }/>
        <button id="nextQuestion" onClick={ () => this.resetButton()}>Next Question</button>
      </div> 
    );
  }
}



export default App;