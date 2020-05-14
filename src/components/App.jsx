import React, { Component } from 'react';
//import Piece from './Piece.jsx';
import Board from './Board.jsx';
import '../css/App.css';

class App extends Component {
  constructor (props) {
    super(props);
    //when turn is 0, it is player turn, 1 is enemy turn
    this.state = {  
        turn: 0,
        turnMessage: "Your Turn",
        yourPiece: "https://i.ya-webdesign.com/images/checkers-king-png-11.png",
        enemyPiece: "",
                }
  }
  handleTurn()
  {
    if(this.state.turn === 0)
    {
      this.setState({
        turn: 1,
        turnMessage: "Enemy Turn",
      })
    }
    else
    {
      this.setState({
        turn: 0,
        turnMessage: "Your Turn",
      })
    }
  }
  placeBoard()
  {
    

  }//end of function

  render() {
    return (
      <div className="app">
        <div id="turn">
          <h1>{this.state.turnMessage}</h1>
        </div>
        
        <p>{this.state.turn}</p>
        <button onClick={ () => this.handleTurn()}>Click for turn change</button>
        <img src="../assets/yourPiece.png"></img>
        <Board piece={this.state.yourPiece}></Board>
      </div> 
    );
  }
}
//<img src={column} class="piece"></img>

export default App;