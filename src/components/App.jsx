import React, { Component } from 'react';
import '../css/App.css';
import { Question } from './Question.jsx';
import AnswerButton from './AnswerButton.jsx';
import getDataBase from './Database.jsx';

// import { app } from 'firebase';
// import firebase from 'firebase';
import Bet from './Bet.jsx';
import Hand from './Hand.jsx';
import Card from "./Card.jsx";


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {  userChoice: 0,
                      opponentChoice: 0,
                      trumpCard: 0,
                      winAmount: 0,
                      deck: [
                        {
                              suit: "diamonds",
                              number: 1, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Playing_card_diamond_A.svg/1200px-Playing_card_diamond_A.svg.png",
                        },
                        {
                              suit: "diamonds",
                              number: 2, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Playing_card_diamond_2.svg/819px-Playing_card_diamond_2.svg.png",
                        },
                        {
                              suit: "diamonds",
                              number: 3, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/3_of_diamonds.svg/209px-3_of_diamonds.svg.png",
                        },
                        {
                              suit: "diamonds",
                              number: 4, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Playing_card_diamond_4.svg/614px-Playing_card_diamond_4.svg.png",
                        },
                        {
                              suit: "diamonds",
                              number: 5, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/English_pattern_5_of_diamonds.svg/360px-English_pattern_5_of_diamonds.svg.png",
                        },
                        {
                              suit: "diamonds",
                              number: 6, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Playing_card_diamond_6.svg/819px-Playing_card_diamond_6.svg.png",
                        },
                        {
                              suit: "diamonds",
                              number: 7, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/English_pattern_7_of_diamonds.svg/360px-English_pattern_7_of_diamonds.svg.png",
                        },
                        {
                              suit: "diamonds",
                              number: 8, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/1/18/English_pattern_8_of_diamonds.svg",
                         },
                         {
                              suit: "diamonds",
                              number: 9, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/English_pattern_9_of_diamonds.svg/360px-English_pattern_9_of_diamonds.svg.png",
                          },
                          {
                              suit: "diamonds",
                              number: 10, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/10_of_diamonds_-_David_Bellot.svg/1200px-10_of_diamonds_-_David_Bellot.svg.png",
                          },
                          {
                              suit: "diamonds",
                              number: 11, 
                              image: "https://media.istockphoto.com/photos/playing-card-jack-of-diamonds-picture-id163052036",
                          },
                          {
                              suit: "diamonds",
                              number: 12, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/English_pattern_queen_of_diamonds.svg/360px-English_pattern_queen_of_diamonds.svg.png",
                          },
                          {
                              suit: "diamonds",
                              number: 13, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/English_pattern_king_of_diamonds.svg",
                          },
                          {
                              suit: "clubs",
                              number: 1, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Ace_of_clubs.svg/1200px-Ace_of_clubs.svg.png",
                          },
                          {
                              suit: "clubs",
                              number: 2, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Playing_card_club_2.svg/614px-Playing_card_club_2.svg.png",
                          },
                          {
                              suit: "clubs",
                              number: 3, 
                              image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4d364ce1-cddf-46f1-8a9d-c0e8cc9c36cc/dawk6g5-43142995-2e3e-4bd8-8b9f-ff73c58a7841.png/v1/fill/w_1024,h_1364,q_80,strp/my_playing_cards_v2___three_of_clubs_by_gabe0530_dawk6g5-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM2NCIsInBhdGgiOiJcL2ZcLzRkMzY0Y2UxLWNkZGYtNDZmMS04YTlkLWMwZThjYzljMzZjY1wvZGF3azZnNS00MzE0Mjk5NS0yZTNlLTRiZDgtOGI5Zi1mZjczYzU4YTc4NDEucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.KpbhHkfZ6X_FND178RR9n5cicHdOO4Au15yDd3EvKuY",
                          },
                          {
                              suit: "clubs",
                              number: 4, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/4_of_clubs.svg/1200px-4_of_clubs.svg.png",
                          },
                          {
                              suit: "clubs",
                              number: 5, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_club_5.svg/1200px-Playing_card_club_5.svg.png",
                          },
                          {
                              suit: "clubs",
                              number: 6, 
                              image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/839f488c-d377-4eeb-999f-6bcace090bb4/d3kgfnt-02dfe6ed-7a7f-4690-bd25-ee1c055cfe71.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgzOWY0ODhjLWQzNzctNGVlYi05OTlmLTZiY2FjZTA5MGJiNFwvZDNrZ2ZudC0wMmRmZTZlZC03YTdmLTQ2OTAtYmQyNS1lZTFjMDU1Y2ZlNzEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.v1zHK3H3dHrfaHIyq8LsISLE8--CKPEtl_macvl4EEg",
                          },
                          {
                              suit: "clubs",
                              number: 7, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/7_of_clubs.svg/706px-7_of_clubs.svg.png",
                          },
                          {
                              suit: "clubs",
                              number: 8, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Playing_card_club_8.svg/819px-Playing_card_club_8.svg.png",
                          },
                          {
                              suit: "clubs",
                              number: 9, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Playing_card_club_9.svg/819px-Playing_card_club_9.svg.png",
                          },
                          {
                              suit: "clubs",
                              number: 10, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Playing_card_club_10.svg/1200px-Playing_card_club_10.svg.png",
                          },
                          {
                              suit: "clubs",
                              number: 11, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/English_pattern_jack_of_clubs.svg/360px-English_pattern_jack_of_clubs.svg.png",
                          },
                          {
                              suit: "clubs",
                              number: 12, 
                              image: "https://media.istockphoto.com/photos/playing-card-queen-of-clubs-picture-id155652049",
                          },
                          {
                              suit: "clubs",
                              number: 13, 
                              image: "https://i.pinimg.com/originals/12/f7/a4/12f7a4211bbbbae45ffa90de88e20b40.png",
                          },
                          {
                              suit: "hearts",
                              number: 1, 
                              image: "https://i.pinimg.com/originals/a9/c4/f4/a9c4f42d75c2012e7998cbeb04e399cc.jpg",
                          },
                          {
                              suit: "hearts",
                              number: 2, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Playing_card_heart_2.svg/1200px-Playing_card_heart_2.svg.png",
                          },
                          {
                              suit: "hearts",
                              number: 3, 
                              image: "https://cdn.pixabay.com/photo/2015/08/11/11/56/hearts-884154_960_720.png",
                          },
                          {
                              suit: "hearts",
                              number: 4, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/4_of_hearts.svg/1200px-4_of_hearts.svg.png",
                          },
                          {
                              suit: "hearts",
                              number: 5, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_heart_5.svg/1200px-Playing_card_heart_5.svg.png",
                          },
                          {
                              suit: "hearts",
                              number: 6, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Playing_card_heart_6.svg/1200px-Playing_card_heart_6.svg.png",
                          },
                          {
                              suit: "hearts",
                              number: 7, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Playing_card_heart_7.svg/819px-Playing_card_heart_7.svg.png",
                          },
                          {
                              suit: "hearts",
                              number: 8, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/8_of_hearts.svg/1200px-8_of_hearts.svg.png",
                          },
                          {
                              suit: "hearts",
                              number: 9, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Atlas_deck_9_of_hearts.svg",
                          },
                          {
                              suit: "hearts",
                              number: 10, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Playing_card_heart_10.svg/1200px-Playing_card_heart_10.svg.png",
                          },
                          {
                              suit: "hearts",
                              number: 11, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/5/56/English_pattern_jack_of_hearts.svg",
                          },
                          {
                              suit: "hearts",
                              number: 12, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Queen_of_hearts_fr.svg/800px-Queen_of_hearts_fr.svg.png",
                          },
                          {
                              suit: "hearts",
                              number: 13, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/English_pattern_king_of_hearts.svg/360px-English_pattern_king_of_hearts.svg.png",
                          },
                          {
                              suit: "spades",
                              number: 1, 
                              image: "https://i.etsystatic.com/12038720/r/il/524701/873103740/il_570xN.873103740_h44y.jpg",
                          },
                          {
                              suit: "spades",
                              number: 2, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Playing_card_spade_2.svg/1200px-Playing_card_spade_2.svg.png",
                          },
                          {
                              suit: "spades",
                              number: 3, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_spade_3.svg/819px-Playing_card_spade_3.svg.png",
                          },
                          {
                              suit: "spades",
                              number: 4, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Playing_card_spade_4.svg/1200px-Playing_card_spade_4.svg.pngs",
                          },
                          {
                              suit: "spades",
                              number: 5, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/5_of_spades.svg/1200px-5_of_spades.svg.png",
                          },
                          {
                              suit: "spades",
                              number: 6, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Playing_card_spade_6.svg/1200px-Playing_card_spade_6.svg.png",
                          },
                          {
                              suit: "spades",
                              number: 7, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Playing_card_spade_7.svg/1200px-Playing_card_spade_7.svg.png",
                          },
                          {
                              suit: "spades",
                              number: 8, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/8_of_spades.svg/1200px-8_of_spades.svg.png",
                          },
                          {
                              suit: "spades",
                              number: 9, 
                              image: "https://i.pinimg.com/originals/ec/10/e8/ec10e8ec3d917946e43d5944aade2ed5.png",
                          },
                          {
                              suit: "spades",
                              number: 10, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/English_pattern_10_of_spades.svg/682px-English_pattern_10_of_spades.svg.png",
                          },
                          {
                              suit: "spades",
                              number: 11, 
                              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/English_pattern_jack_of_spades.svg/360px-English_pattern_jack_of_spades.svg.png",
                          },
                          {
                              suit: "spades",
                              number: 12, 
                              image: "https://images.freeimages.com/images/premium/previews/3363/33634010-queen-of-spades.jpg",
                          },
                          {
                              suit: "spades",
                              number: 13, 
                              image: "https://www.heritage-print.com/p/731/king-spades-deck-goodall-son-ltd-playing-cards-14968580.jpg.webp",
                          }
          
                      ],
                      card1: [],
                      card2: [],
                      card3: [],
                   }
  }
  handleClick(clickedAnswer){
      if(clickedAnswer === this.state.correct_choice_index) 
      {
        this.setState({
          choices: ["Correct", "Correct", "Correct", "Correct"],
        })
      }
      else if (clickedAnswer !== this.state.correct_choice_index)
      {
        this.setState({
          choices: ["Incorrect", "Incorrect", "Incorrect", "Incorrect"],
        })
      }  
  }

  resetButton(){
    this.setState({
      questionText: this.state.questions[this.state.currentIndex].question_text,
      questions: this.state.questions,
      correct_choice_index: this.state.questions[this.state.currentIndex].correct_choice_index,
      questions: this.state.questions,
      choices: this.state.questions[this.state.currentIndex].choices,
      currentIndex: this.state.currentIndex += 1,
    })

    if (this.state.questionText === undefined)
    {
      this.setState({
        questions: "The game over stop play",
      })
    }
  }
  shuffleDeck(data){
    var j, x, i;
    for (i = data.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = data[i];
        data[i] = data[j];
        data[j] = x;
    }
    let randomDeck = data;
    this.setState({
        deck: randomDeck,
    })
    console.log(this.state.deck);
    this.assignCards();
  }

  assignCards()
  {
      let first = this.state.deck[0];
      let second = this.state.deck[1];
      let third = this.state.deck[2];
      this.setState({
            card1: first,
            card2: second,
            card3: third,
      });
      console.log(this.state.card1);
    }
  render() {
    return (
      <div className="app">
        <p>Turn:</p>
        <Bet></Bet>
            <div>
                <button onClick={ () => this.shuffleDeck(this.state.deck) }>Shuffle DECK</button>
            </div>
        <Card></Card>

        <Hand card1={this.state.card1} card2={this.state.card2} card3={this.state.card3}></Hand>
        
      </div> 
    );
  }
}


export default App;