import React, { Component } from 'react';
import Piece from './Piece.jsx';
import '../css/App.css';

class App extends Component {
  constructor (props) {
    super(props);
    //when turn is 0, it is player turn, 1 is enemy turn
    this.state = {  
        turn: 0,
        board: [
          [null, null, null],
          [null, null, null],
          [null, null, null],
        ]
                }
  }
  handleTurn()
  {
    if(this.state.turn === 0)
    {
      this.setState({
        turn: 1,
      })
    }
    else
    {
      this.setState({
        turn: 0,
      })
    }
  }
  makeBoard()
  {
    for(let i=0; i<this.state.board.length;i++)
    {
        for(let k=0;k<this.state.board[i].length;k++)
        {
          console.log(this.state.board[i][k]);
        }
    }
    console.log(this.state.board);
  }

  render() {
    return (
      <div className="app">
        <p>{this.state.turn}</p>
        <button onClick={ () => this.makeBoard()}>Click for turn change</button>
        <Piece pieceImg='https://i.ya-webdesign.com/images/checkers-king-png-11.png'></Piece>
      </div> 
    );
  }
}


export default App;