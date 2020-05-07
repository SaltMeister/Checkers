import React, { Component } from 'react';
import Piece from './Piece.jsx';
import '../css/App.css';

class App extends Component {
  constructor (props) {
    super(props);
    //when turn is 0, it is player turn, 1 is enemy turn
    this.state = {  
        turn: 0,
        turnMessage: "Your Turn",
        board: [
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
        ]
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
  makeBoard()
  {
     this.state.board.map( row => row.map(column => <div className="box"></div>));
    //this.state.board.map((row, rowIndex) => { return (<div className="box"> {row.map((column, columnIndex) =>
      //    { return ( column => <div className="box"></div>)} )}</div>)}
    
  
  }//end of function
  render() {
    return (
      <div className="app">
        <div id="turn">
          <h1>{this.state.turnMessage}</h1>
        </div>
        
        <p>{this.state.turn}</p>
        <button onClick={ () => this.handleTurn()}>Click for turn change</button>
        <Piece pieceImg='https://i.ya-webdesign.com/images/checkers-king-png-11.png'></Piece>
    {this.state.board.map( row => { return (<div className="row"> { row.map( column => { return (<div className="box">{column}</div>)} )}</div>)})}      
      </div> 
    );
  }
}


export default App;