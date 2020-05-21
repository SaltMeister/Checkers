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
        yourPiece: 'https://chongzizil.github.io/Checkers-SMG/imgs/black_man.png',
        enemyPiece: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2KGHea9sVjCtOtz1FidEXhtaQU8GLwjRxFbrpomFgRWSezqjS&usqp=CAU',
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

  render() {
    let containerStyle = {};
    if(this.state.turn === 1)
      containerStyle.background = "#CD5C5C";
    
    return (
      <div className="app">
        <div id="turn" style={containerStyle}>
          <h1>{this.state.turnMessage}</h1>
        </div>
        <Board turnNumber={this.state.turn} turn={() => this.handleTurn()}piece={this.state.yourPiece} enemyPiece={this.state.enemyPiece}></Board>
      </div> 
    );
  }
}

export default App;