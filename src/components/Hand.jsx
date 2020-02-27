import React, { Component } from 'react';
import Card from './Card.jsx';
import '../css/App.css';

// import components


export class Hand extends Component {
  constructor(props){
    super(props);
    this.state = {
      pile : "",
      click: [false, false, false],
      trumpCard: this.props.card1
    };
  }
  handtoPile(card, index){
    let clickVal = this.state.click;
    console.log(this.state.trumpCard);
    console.log(this.state.pile);
    if(this.state.trumpCard.suit === card.suit){
      clickVal[index] = !this.state.click[index];
    } else{
      alert("Can't choose that!");
    }
    this.setState({
      pile : card.image,
      click: clickVal
    })
  }
  render() {
    return (
         <div>
           <div>
            <img classname="cardImg" height="100px" src={this.props.card4.image}></img>
          </div>
           <div>
            <img classname="cardImg" height="100px" src={this.state.pile}></img>
           </div>
           <div>
            <button hidden={this.state.click[0]} onClick={ () => this.handtoPile(this.props.card2, 0)}><img src={this.props.card2.image} className="cardImg"></img></button>
            <button hidden={this.state.click[1]} onClick={ () => this.handtoPile(this.props.card3, 1)}><img src={this.props.card3.image} className="cardImg"></img></button>
            <button hidden={this.state.click[2]} onClick={ () => this.handtoPile(this.props.card4, 2)}><img src={this.props.card4.image} className="cardImg"></img></button>
         </div>
         </div>
    );
  }
}

export default Hand;