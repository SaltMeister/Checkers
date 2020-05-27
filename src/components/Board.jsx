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
    }
    else 
    {
      if(this.state.clickedPieceCord.length > 0 && (this.state.pieceChosen === this.props.yourKingPiece || this.state.pieceChosen === this.props.enemyKingPiece))
      {
        if(this.state.pieceChosen === this.props.enemyKingPiece && this.props.turnNumber === 1)
          this.kingMove(this.state.clickedPieceCord[0], this.state.clickedPieceCord[1], rIndex, cIndex, this.state.pieceChosen);
        else if(this.state.pieceChosen === this.props.yourKingPiece && this.props.turnNumber === 0)
          this.kingMove(this.state.clickedPieceCord[0], this.state.clickedPieceCord[1], rIndex, cIndex, this.state.pieceChosen);
      }
      else
      {
        if((this.state.clickedPieceCord.length > 0 && this.state.pieceChosen === this.props.piece) && this.props.turnNumber === 0)
        {
          let rowDist = rIndex - this.state.clickedPieceCord[0];
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
            this.makeKing(rIndex, cIndex, this.state.pieceChosen);
            {this.props.turn()}
          }//end of the inside if statement
          //this else if determines if the user can kill an enemy piece
          else if((rIndex === this.state.clickedPieceCord[0] - 2 && (cIndex === this.state.clickedPieceCord[1] + 2 || cIndex === this.state.clickedPieceCord[1] - 2)) && this.state.board[rIndex][cIndex] === null)
          {
            let colDist = cIndex - this.state.clickedPieceCord[1];
            if((colDist === 2) && (this.state.board[this.state.clickedPieceCord[0] - 1][this.state.clickedPieceCord[1] + 1]) === this.props.enemyPiece || (this.state.board[this.state.clickedPieceCord[0] - 1][this.state.clickedPieceCord[1] + 1]) === this.props.enemyKingPiece)
            {
              newBoard[rIndex][cIndex] = this.props.piece;
              newBoard[this.state.clickedPieceCord[0]][this.state.clickedPieceCord[1]] = null;
              newBoard[this.state.clickedPieceCord[0] - 1][this.state.clickedPieceCord[1] + 1] = null;
              console.log("kill enemyPiece by going right");
  
              this.setState({
                clickedPieceCord: [],
                board: newBoard,          
                });
              this.makeKing(rIndex, cIndex, this.state.pieceChosen);
              {this.props.turn()}
            }
            else if ((colDist === -2) && (this.state.board[this.state.clickedPieceCord[0] - 1][this.state.clickedPieceCord[1] - 1]) === this.props.enemyPiece || (this.state.board[this.state.clickedPieceCord[0] - 1][this.state.clickedPieceCord[1] - 1]) === this.props.enemyKingPiece)
            {
              newBoard[rIndex][cIndex] = this.props.piece;
              newBoard[this.state.clickedPieceCord[0]][this.state.clickedPieceCord[1]] = null;
              newBoard[this.state.clickedPieceCord[0] - 1][this.state.clickedPieceCord[1] - 1] = null;
              console.log("killed enemyPiece going left");
  
              this.setState({
                clickedPieceCord: [],
                board: newBoard,          
                });
              this.makeKing(rIndex, cIndex, this.state.pieceChosen);
              {this.props.turn()}
            }  
          }
        }//end of first if statement
        else if((this.state.clickedPieceCord.length > 0 && this.state.pieceChosen === this.props.enemyPiece) && this.props.turnNumber === 1)
        {
          let rowDist = rIndex - this.state.clickedPieceCord[0];
          let newBoard = [...this.state.board];
          //determines if the which piece was clicked and when the moved happens, changes the board to the selected piece
          if((rIndex === this.state.clickedPieceCord[0] + 1 && (cIndex === this.state.clickedPieceCord[1] + 1 || cIndex === this.state.clickedPieceCord[1] - 1)) && this.state.board[rIndex][cIndex] === null)
          {
            newBoard[rIndex][cIndex] = this.props.enemyPiece;
            newBoard[this.state.clickedPieceCord[0]][this.state.clickedPieceCord[1]] = null;
  
            this.setState({
              clickedPieceCord: [],
              board: newBoard,          
            });
            this.makeKing(rIndex, cIndex, this.state.pieceChosen);
            {this.props.turn()}
          }//end of if
          else if((rIndex === this.state.clickedPieceCord[0] + 2 && (cIndex === this.state.clickedPieceCord[1] + 2 || cIndex === this.state.clickedPieceCord[1] - 2)) && this.state.board[rIndex][cIndex] === null)
          {
            let colDist = cIndex - this.state.clickedPieceCord[1];
  
            if((colDist === 2) && (this.state.board[this.state.clickedPieceCord[0] + 1][this.state.clickedPieceCord[1] + 1]) === this.props.piece || (this.state.board[this.state.clickedPieceCord[0] + 1][this.state.clickedPieceCord[1] + 1]) === this.props.yourKingPiece)
            {
              newBoard[rIndex][cIndex] = this.props.enemyPiece;
              newBoard[this.state.clickedPieceCord[0]][this.state.clickedPieceCord[1]] = null;
              newBoard[this.state.clickedPieceCord[0] + 1][this.state.clickedPieceCord[1] + 1] = null;
              console.log("killed Piece going right");
  
              this.setState({
                clickedPieceCord: [],
                board: newBoard,          
                });
              this.makeKing(rIndex, cIndex, this.state.pieceChosen);
              {this.props.turn()}
            }
            else if((colDist === -2) && (this.state.board[this.state.clickedPieceCord[0] + 1][this.state.clickedPieceCord[1] - 1]) === this.props.piece || (this.state.board[this.state.clickedPieceCord[0] + 1][this.state.clickedPieceCord[1] - 1]) === this.props.yourKingPiece)
            {
              
              newBoard[rIndex][cIndex] = this.props.enemyPiece;
              newBoard[this.state.clickedPieceCord[0]][this.state.clickedPieceCord[1]] = null;
              newBoard[this.state.clickedPieceCord[0] + 1][this.state.clickedPieceCord[1] - 1] = null;
              console.log("killed Piece going left");
  
              this.setState({
                clickedPieceCord: [],
                board: newBoard,          
                });
              this.makeKing(rIndex, cIndex, this.state.pieceChosen);
              {this.props.turn()}
            } 
          }
        }//end of else if
      }//end of the else statement
    }//end of the big else statement
    this.checkWinner();
  }

  checkWinner()
  {
    let enemyCount = 0;
    let pieceCount = 0;
    for(let i=0;i<this.state.board.length;i++)
    {
      for(let k=0;k<this.state.board[i].length;k++)
      {
        if(this.state.board[i][k] === this.props.piece || this.state.board[i][k] === this.props.yourKingPiece)
          pieceCount++;
        else if(this.state.board[i][k] === this.props.enemyPiece || this.state.board[i][k] === this.props.enemyKingPiece)
          enemyCount++;
      }
    }
    if(pieceCount === 0)
      alert("Red has won");
    else if(enemyCount === 0)
      alert("Black has won");
  }

  makeKing(row, column, pieceType)
  {
   let newBoard = [...this.state.board];
   if(pieceType === this.props.piece && row === 0)
   {
      newBoard[row][column] = this.props.yourKingPiece;
   }
   else if(pieceType === this.props.enemyPiece && row === 7)
   {
      newBoard[row][column] = this.props.enemyKingPiece;   
      console.log("make red king");  
   }
   this.setState({
      board: newBoard,     
   })
  }

  kingMove(currentRow, currentColumn, moveRow, moveColumn, pieceType)
  {
    let newBoard = [...this.state.board];
    //movement for all kings
    if(((moveRow === currentRow - 1 && (moveColumn === currentColumn + 1 || moveColumn === currentColumn - 1)) || (moveRow === currentRow + 1 && (moveColumn === currentColumn + 1 || moveColumn === currentColumn - 1))) && this.state.board[moveRow][moveColumn] === null)
    {
      newBoard[moveRow][moveColumn] = pieceType;
      newBoard[currentRow][currentColumn] = null;
      
      this.setState({
        clickedPieceCord: [],
        board: newBoard,          
        });
      {this.props.turn()}
    }
    //movement for your king
    else if( ((moveRow === currentRow - 2 && (moveColumn === currentColumn + 2 || moveColumn === currentColumn - 2)) || ((moveRow === currentRow + 2 && (moveColumn === currentColumn + 2 || moveColumn === currentColumn - 2)))) && (this.state.board[moveRow][moveColumn] === null && pieceType === this.props.yourKingPiece) )
    {
      let colDist = moveColumn - currentColumn;
      let rowDist = moveRow - currentRow;
      console.log(rowDist);
      //forward killing for your king
      if((colDist === 2 && rowDist === -2) && ((this.state.board[currentRow - 1][currentColumn + 1]) === this.props.enemyPiece || (this.state.board[currentRow - 1][currentColumn + 1]) === this.props.enemyKingPiece))
      {
        newBoard[moveRow][moveColumn] = pieceType;
        newBoard[currentRow][currentColumn] = null;
        newBoard[currentRow - 1][currentColumn + 1] = null;
        console.log("kill enemyPiece by going top right");

        this.setState({
          clickedPieceCord: [],
          board: newBoard,          
          });
        {this.props.turn()}
      }
      else if ((colDist === -2 && rowDist === -2) && ((this.state.board[currentRow - 1][currentColumn - 1]) === this.props.enemyPiece || (this.state.board[currentRow - 1][currentColumn - 1]) === this.props.enemyKingPiece))
      {
        newBoard[moveRow][moveColumn] = pieceType;
        newBoard[currentRow][currentColumn] = null;
        newBoard[currentRow - 1][currentColumn - 1] = null;
        console.log("killed enemyPiece going top left");

        this.setState({
          clickedPieceCord: [],
          board: newBoard,          
          });
        {this.props.turn()}
      } 
      //backward killing for your king
      else if ((colDist === 2 && rowDist === 2) && ((this.state.board[currentRow + 1][currentColumn + 1]) === this.props.enemyPiece || (this.state.board[currentRow + 1][currentColumn + 1]) === this.props.enemyKingPiece))
      {
        newBoard[moveRow][moveColumn] = pieceType;
        newBoard[currentRow][currentColumn] = null;
        newBoard[currentRow + 1][currentColumn + 1] = null;
        console.log("killed enemyPiece going down Right");

        this.setState({
          clickedPieceCord: [],
          board: newBoard,          
          });
        {this.props.turn()}
      }   
      else if ((colDist === -2 && rowDist === 2) && ((this.state.board[currentRow + 1][currentColumn - 1]) === this.props.enemyPiece || (this.state.board[currentRow + 1][currentColumn - 1]) === this.props.enemyKingPiece))
      {
        newBoard[moveRow][moveColumn] = pieceType;
        newBoard[currentRow][currentColumn] = null;
        newBoard[currentRow + 1][currentColumn - 1] = null;
        console.log("killed enemyPiece going down left");

        this.setState({
          clickedPieceCord: [],
          board: newBoard,          
          });
        {this.props.turn()}
      }  
    }
    //killing for enemy king
    else if( ((moveRow === currentRow - 2 && (moveColumn === currentColumn + 2 || moveColumn === currentColumn - 2)) || ((moveRow === currentRow + 2 && (moveColumn === currentColumn + 2 || moveColumn === currentColumn - 2)))) && (this.state.board[moveRow][moveColumn] === null && pieceType === this.props.enemyKingPiece) )
    {
      let colDist = moveColumn - currentColumn;
      let rowDist = moveRow - currentRow;
      console.log(rowDist);
      //forward killing for enemy king
      if((colDist === 2 && rowDist === -2) && ((this.state.board[currentRow - 1][currentColumn + 1]) === this.props.yourKingPiece || (this.state.board[currentRow - 1][currentColumn + 1]) === this.props.yourKingPiece))
      {
        newBoard[moveRow][moveColumn] = pieceType;
        newBoard[currentRow][currentColumn] = null;
        newBoard[currentRow - 1][currentColumn + 1] = null;
        console.log("kill Piece by going top right");

        this.setState({
          clickedPieceCord: [],
          board: newBoard,          
          });
        {this.props.turn()}
      }
      else if ((colDist === -2 && rowDist === -2) && ((this.state.board[currentRow - 1][currentColumn - 1]) === this.props.yourKingPiece || (this.state.board[currentRow - 1][currentColumn - 1]) === this.props.yourKingPiece))
      {
        newBoard[moveRow][moveColumn] = pieceType;
        newBoard[currentRow][currentColumn] = null;
        newBoard[currentRow - 1][currentColumn - 1] = null;
        console.log("killed Piece going top left");

        this.setState({
          clickedPieceCord: [],
          board: newBoard,          
          });
        {this.props.turn()}
      } 
      //backward killing for enemy king
      else if ((colDist === 2 && rowDist === 2) && ((this.state.board[currentRow + 1][currentColumn + 1]) === this.props.yourKingPiece || (this.state.board[currentRow + 1][currentColumn + 1]) === this.props.yourKingPiece))
      {
        newBoard[moveRow][moveColumn] = pieceType;
        newBoard[currentRow][currentColumn] = null;
        newBoard[currentRow + 1][currentColumn + 1] = null;
        console.log("killed Piece going bot right");

        this.setState({
          clickedPieceCord: [],
          board: newBoard,          
          });
        {this.props.turn()}
      }   
      else if ((colDist === -2 && rowDist === 2) && ((this.state.board[currentRow + 1][currentColumn - 1]) === this.props.yourKingPiece || (this.state.board[currentRow + 1][currentColumn - 1]) === this.props.yourKingPiece))
      {
        newBoard[moveRow][moveColumn] = pieceType;
        newBoard[currentRow][currentColumn] = null;
        newBoard[currentRow + 1][currentColumn - 1] = null;
        console.log("killed Piece going bot left");

        this.setState({
          clickedPieceCord: [],
          board: newBoard,          
          });
        {this.props.turn()}
      }  
    }
  }
  render() {
    return (
        <div className="container">
          {this.state.board.map( (row, rowIndex) => { return (<div className="row"> { row.map( (column, columnIndex) => { 
            return (columnIndex % 2 === 0 && rowIndex % 2 === 0 ?<div className="box white" onClick={() => this.handleMove(column, rowIndex, columnIndex)}><Piece pieceImg={column}></Piece></div> : columnIndex % 2 === 1 && rowIndex % 2 === 1 ? <div className="box white" onClick={() => this.handleMove(column, rowIndex, columnIndex)}><Piece pieceImg={column}></Piece></div> : <div className="box black" onClick={() => this.handleMove(column, rowIndex, columnIndex)}><Piece pieceImg={column}></Piece></div>);
            } )}</div>)})}  
        </div>
    );
  }
}

export default Board;