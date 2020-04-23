import React, { Component } from 'react';
// import components

export class Piece extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div>
            <img class="piece" src={this.props.pieceImg}></img>
        </div>
    );
  }
}

export default Piece;