import React, { Component } from 'react';
// import components


export class card extends Component {
    constructor(){
      super(props);
      let deck = [
              {
                    suit: "diamonds",
                    number: 2, 
                    image: "",
              },
              {
                    suit: "diamonds",
                    number: 3, 
                    image: "",
              },
              {
                    suit: "diamonds",
                    number: 4, 
                    image: "",
              },
              {
                    suit: "diamonds",
                    number: 5, 
                    image: "",
              },
              {
                    suit: "diamonds",
                    number: 6, 
                    image: "",
              },
              {
                    suit: "diamonds",
                    number: 7, 
                    image: "",
              },
              {
                    suit: "diamonds",
                    number: 8, 
                    image: "",
               },
               {
                    suit: "diamonds",
                    number: 9, 
                    image: "",
                },
                {
                    suit: "diamonds",
                    number: 10, 
                    image: "",
                },
                {
                    suit: "diamonds",
                    number: 11, 
                    image: "",
                },
                {
                    suit: "diamonds",
                    number: 12, 
                    image: "",
                },
                {
                    suit: "diamonds",
                    number: 13, 
                    image: "",
                },
                {
                    suit: "diamonds",
                    number: 1, 
                    image: "",
                },
                {
                    suit: "clubs",
                    number: 2, 
                    image: "",
                },
                {
                    suit: "clubs",
                    number: 2, 
                    image: "",
                },
                {
                    suit: "clubs",
                    number: 3, 
                    image: "",
                },
                {
                    suit: "clubs",
                    number: 4, 
                    image: "",
                },
                {
                    suit: "clubs",
                    number: 5, 
                    image: "",
                },
                {
                    suit: "clubs",
                    number: 6, 
                    image: "",
                },
                {
                    suit: "clubs",
                    number: 7, 
                    image: "",
                },
                {
                    suit: "clubs",
                    number: 8, 
                    image: "",
                },
                {
                    suit: "clubs",
                    number: 9, 
                    image: "",
                },
                {
                    suit: "clubs",
                    number: 10, 
                    image: "",
                },
                {
                    suit: "clubs",
                    number: 11, 
                    image: "",
                },
                {
                    suit: "clubs",
                    number: 12, 
                    image: "",
                },
                {
                    suit: "clubs",
                    number: 13, 
                    image: "",
                },
                {
                    suit: "hearts",
                    number: 1, 
                    image: "",
                },
                {
                    suit: "hearts",
                    number: 2, 
                    image: "",
                },
                {
                    suit: "hearts",
                    number: 3, 
                    image: "",
                },
                {
                    suit: "hearts",
                    number: 4, 
                    image: "",
                },
                {
                    suit: "hearts",
                    number: 5, 
                    image: "",
                },
                {
                    suit: "hearts",
                    number: 6, 
                    image: "",
                },
                {
                    suit: "hearts",
                    number: 7, 
                    image: "",
                },
                {
                    suit: "hearts",
                    number: 8, 
                    image: "",
                },
                {
                    suit: "hearts",
                    number: 9, 
                    image: "",
                },
                {
                    suit: "hearts",
                    number: 10, 
                    image: "",
                },
                {
                    suit: "hearts",
                    number: 11, 
                    image: "",
                },
                {
                    suit: "hearts",
                    number: 12, 
                    image: "",
                },
                {
                    suit: "hearts",
                    number: 13, 
                    image: "",
                },
                {
                    suit: "spades",
                    number: 1, 
                    image: "",
                },
                {
                    suit: "spades",
                    number: 2, 
                    image: "",
                },
                {
                    suit: "spades",
                    number: 3, 
                    image: "",
                },
                {
                    suit: "spades",
                    number: 4, 
                    image: "",
                },
                {
                    suit: "spades",
                    number: 5, 
                    image: "",
                },
                {
                    suit: "spades",
                    number: 6, 
                    image: "",
                },
                {
                    suit: "spades",
                    number: 7, 
                    image: "",
                },
                {
                    suit: "spades",
                    number: 8, 
                    image: "",
                },
                {
                    suit: "spades",
                    number: 9, 
                    image: "",
                },
                {
                    suit: "spades",
                    number: 10, 
                    image: "",
                },
                {
                    suit: "spades",
                    number: 11, 
                    image: "",
                },
                {
                    suit: "spades",
                    number: 12, 
                    image: "",
                },
                {
                    suit: "spades",
                    number: 13, 
                    image: "",
                }

            ]
        this.state = { deck: deck };
    };
      
    shuffleDeck(){
      let randomDeck = shuffle(deck);
      this.setState({
          deck: randomDeck
      })
    }
    render(){
        return (
            <div>
            <p></p>
            </div>
        );
    }
}

export default Card;