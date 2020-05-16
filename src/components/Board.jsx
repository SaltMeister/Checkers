import React, { Component } from 'react';
import Piece from './Piece.jsx'
// import components

export class Board extends Component {
  constructor(props)
  {
    super(props);
    this.state = {        
      board: [
      ['https://i.ya-webdesign.com/images/checkers-king-png-11.png', 'https://i.ya-webdesign.com/images/checkers-king-png-11.png', 'https://i.ya-webdesign.com/images/checkers-king-png-11.png', 'https://i.ya-webdesign.com/images/checkers-king-png-11.png', 'https://i.ya-webdesign.com/images/checkers-king-png-11.png', 'https://i.ya-webdesign.com/images/checkers-king-png-11.png', 'https://i.ya-webdesign.com/images/checkers-king-png-11.png', 'https://i.ya-webdesign.com/images/checkers-king-png-11.png'],
      ['https://i.ya-webdesign.com/images/checkers-king-png-11.png', 'https://i.ya-webdesign.com/images/checkers-king-png-11.png', 'https://i.ya-webdesign.com/images/checkers-king-png-11.png', 'https://i.ya-webdesign.com/images/checkers-king-png-11.png', 'https://i.ya-webdesign.com/images/checkers-king-png-11.png', 'https://i.ya-webdesign.com/images/checkers-king-png-11.png', 'https://i.ya-webdesign.com/images/checkers-king-png-11.png', 'https://i.ya-webdesign.com/images/checkers-king-png-11.png'],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ['https://i.ya-webdesign.com/images/checkers-king-png-11.png', 'https://i.ya-webdesign.com/images/checkers-king-png-11.png', 'https://i.ya-webdesign.com/images/checkers-king-png-11.png', 'https://i.ya-webdesign.com/images/checkers-king-png-11.png', 'https://i.ya-webdesign.com/images/checkers-king-png-11.png', 'https://i.ya-webdesign.com/images/checkers-king-png-11.png', 'https://i.ya-webdesign.com/images/checkers-king-png-11.png', 'https://i.ya-webdesign.com/images/checkers-king-png-11.png'], 
      ['https://i.ya-webdesign.com/images/checkers-king-png-11.png', 'https://i.ya-webdesign.com/images/checkers-king-png-11.png', 'https://i.ya-webdesign.com/images/checkers-king-png-11.png', 'https://i.ya-webdesign.com/images/checkers-king-png-11.png', 'https://i.ya-webdesign.com/images/checkers-king-png-11.png', 'https://i.ya-webdesign.com/images/checkers-king-png-11.png', 'https://i.ya-webdesign.com/images/checkers-king-png-11.png', 'https://i.ya-webdesign.com/images/checkers-king-png-11.png'],
    ]
    }
  }

  render() {
    return (
        <div>
          {this.state.board.map( row => { return (<div className="row"> { row.map( (column, index) => { 
            return (<div className="box"><Piece pieceImg={column}></Piece></div>);
            } )}</div>)})}  
        </div>
    );
  }
}

export default Board;