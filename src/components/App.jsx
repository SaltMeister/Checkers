import React, { Component } from 'react';
import '../css/App.css';
import { Question } from './Question.jsx';
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
                      choices: ["Austin", "SF", "Albany", "New York City"]
                   }
  }

  handleClick()
  {
    alert("You clicked the button");
  }
  
  render() {
    return (
      <div className="app">
        <Question QuestionText={this.state.questionText} choice={this.state.choices} onClick={ () => this.handleClick() }/>
      </div> 
    );
  }
}



export default App;