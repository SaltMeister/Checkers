import React, { Component } from 'react';
// import components

export class Bet extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      bet : 0,
      visualBet: 0,
      clicked: false
    };
  }

  handleChange = (event) =>
  {
      this.setState({bet : event.target.value});
  }
  checkInput()
  {
      if (this.state.bet > 3)
      {
        console.log("Please enter a smaller number that is equal to are more than your hand of cards");
      }
      else 
      {
        //push data to firebase about the bets the user made or the enemy.
        this.setState({
          visualBet: this.state.bet,
          clicked: true
        })
      }
  }

  render() {
    return (
        <div>
           <h3>Make a bet</h3>
           <input placeholder="enter a number" onChange={this.handleChange}></input>
           <button onClick={ () => this.checkInput()}>Make Bet</button>
           <p>Bet:{this.state.visualBet}</p>
        </div>
    );
  }
}

export default Bet;