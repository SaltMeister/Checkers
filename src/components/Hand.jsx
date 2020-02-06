import React, { Component } from 'react';
// import components


export class Hand extends Component {
  constructor(props){
    super(props);
    this.state = {
      myHand : ["card 1","card 2","card 3"],
      pile : "",
    };
  }
  handtoPile(card){
    this.setState({
      pile : card
    });
    
  }
  render() {
    return (
        <div>
          <p>{this.state.pile}</p>
           <button onClick={ () => this.handtoPile(this.state.myHand[0])}>Card</button>
           <button onClick={ () => this.handtoPile(this.state.myHand[1])}>Card</button>
           <button onClick={ () => this.handtoPile(this.state.myHand[2])}>Card</button>
        </div>
    );
  }
}

export default Hand;