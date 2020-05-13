import React, { Component } from 'react';
// import components

export class Board extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div>
            <img src={this.props.image}></img>
        </div>
    );
  }
}

export default Board;