import React, { Component } from 'react';
// import components


export class Pile extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      trumpCard: {
        suit: "spades",
        number: 2,
        image: " "
      },
      startingCard:{
        suit: "spades",
        number: 2,
        image: " "
      },
      player1Hand: {
        suit: "spades",
        number: 2,
        image: " "
      },
      player2Hand: {
        suit: "spades",
        number: 2,
        image: " "
      }
    };
  }
  highestCard(hand1, hand2){
    let highestCard;
    if(hand1.suit === hand2.suit){
      if(hand1.number > hand2.number){
        highestCard = hand1;
      } else {
        highestCard = hand2;
      }
    } else if(hand1.suit === trumpCard.suit && hand2.suit === trumpCard.suit){
        if(hand1.number > hand2.number){
          highestCard = hand1;
        } else {
          highestCard = hand2;
        }
    } else if(hand1.suit === trumpCard.suit && hand2.suit != trumpCard.suit){
        highestCard = hand1;
    }
  }
  render() {
    return (
        <div>
           
        </div>
    );
  }
}

export default Pile;