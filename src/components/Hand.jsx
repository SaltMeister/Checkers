import React, { Component } from 'react';
import '../css/App.css';

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
      pile : card.image
    });
    
  }
  render() {
    return (
        <div>
            <img src={this.state.pile} classname="cardImg"></img>
           <button onClick={ () => this.handtoPile(this.props.card1)}><img src={this.props.card1.image} className="cardImg"></img></button>
           <button onClick={ () => this.handtoPile(this.props.card2)}><img src={this.props.card2.image} className="cardImg"></img></button>
           <button onClick={ () => this.handtoPile(this.props.card3)}><img src={this.props.card3.image} className="cardImg"></img></button>
        </div>
    );
  }
}

export default Hand;