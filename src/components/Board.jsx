import React, { Component } from 'react';
import Piece from './Piece.jsx'
// import components

export class Board extends Component {
  constructor(props)
  {
    super(props);
    this.state = {        
      board: [
      [this.props.enemyPiece, null, this.props.enemyPiece, null, this.props.enemyPiece, null, this.props.enemyPiece, null],
      [null, this.props.enemyPiece, null, this.props.enemyPiece, null, this.props.enemyPiece, null, this.props.enemyPiece],
      [this.props.enemyPiece, null, this.props.enemyPiece, null, this.props.enemyPiece, null, this.props.enemyPiece, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, this.props.piece, null, this.props.piece, null, this.props.piece, null, this.props.piece],
      [ this.props.piece, null, this.props.piece, null, this.props.piece, null, this.props.piece, null], 
      [null, this.props.piece, null, this.props.piece, null, this.props.piece, null, this.props.piece],
    ],
    isClick: false,
    clickedPieceCord: [],
    pieceChosen: null,
    turn: 0,
    turnMessage: "Your Turn",
    }
  }

  handleMove(x, rIndex, cIndex)
  {
    if(x != null)
    {
      this.setState({
        clickedPieceCord: [rIndex, cIndex],
        pieceChosen: x,
      });
      console.log(this.state.clickedPieceCord);
    }
    else 
    {
      if((this.state.clickedPieceCord.length > 0 && this.state.pieceChosen === this.props.piece) && this.props.turnNumber === 0)
      {
        console.log(this.state.pieceChosen);
        let newBoard = [...this.state.board];
        
        //determines if the which piece was clicked and when the moved happens, changes the board to the selected piece
        if(rIndex === this.state.clickedPieceCord[0] - 1 && (cIndex === this.state.clickedPieceCord[1] + 1 || cIndex === this.state.clickedPieceCord[1] - 1))
        {
          newBoard[rIndex][cIndex] = this.props.piece;
          newBoard[this.state.clickedPieceCord[0]][this.state.clickedPieceCord[1]] = null;
          this.setState({
            clickedPieceCord: [],
            board: newBoard,          
            });
        }//end of the inside if statement
        {this.props.turn()}
      }//end of first if statement
      else if((this.state.clickedPieceCord.length > 0 && this.state.pieceChosen === this.props.enemyPiece) && this.props.turnNumber === 1)
      {
        console.log("pieceenemy");
        let newBoard = [...this.state.board];
        
        //determines if the which piece was clicked and when the moved happens, changes the board to the selected piece
        if(rIndex === this.state.clickedPieceCord[0] + 1 && (cIndex === this.state.clickedPieceCord[1] + 1 || cIndex === this.state.clickedPieceCord[1] - 1))
        {
          newBoard[rIndex][cIndex] = this.props.enemyPiece;
          newBoard[this.state.clickedPieceCord[0]][this.state.clickedPieceCord[1]] = null;

          this.setState({
            clickedPieceCord: [],
            board: newBoard,          
          });
        }//end of if
        {this.props.turn()}
      }//end of else if
    }
  }
  
  render() {
    return (
        <div className="container">
          {this.state.board.map( (row, rowIndex) => { return (<div className="row"> { row.map( (column, index) => { 
            return (index % 2 === 0 && rowIndex % 2 === 0 ?<div className="box white" onClick={() => this.handleMove(column, rowIndex, index)}><Piece pieceImg={column}></Piece></div> : index % 2 === 1 && rowIndex % 2 === 1 ? <div className="box white" onClick={() => this.handleMove(column, rowIndex, index)}><Piece pieceImg={column}></Piece></div> : <div className="box black" onClick={() => this.handleMove(column, rowIndex, index)}><Piece pieceImg={column}></Piece></div>);
            } )}</div>)})}  
        </div>
    );
  }
}

export default Board;