import React, { Component } from 'react';
import Piece from './Piece.jsx'
// import components

export class Board extends Component {
  constructor(props)
  {
    super(props);
    this.state = {        
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

  render() {
    return (
        <div>
          {this.state.board.map( row => { return (<div className="row"> { row.map( (column, index) => { 
            if(index === 5)
            {
            return (<div className="box"><Piece pieceImg='https://i.ya-webdesign.com/images/checkers-king-png-11.png'></Piece></div>);
            }
            else
            {
              return (<div className="box"></div>)
            }
            } )}</div>)})}  
        </div>
    );
  }
}

export default Board;