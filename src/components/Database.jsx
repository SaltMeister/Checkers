import React, { Component } from 'react';
import {buildFirebase} from '../clients/firebase.js';


export function getDatabase(cb) {
     // firebase.database(app).ref('/round').on('value', (snapshot) => {
    //   let round = Object.values(snapshot.val());
    //   cb(round);
    // });
    var database = buildFirebase();
    var databaseRef = database.ref("/game");
    databaseRef.once("value").then(function(data) {
    const game = data.val();

  });
} 
// function writeUser(guess, cards ) {
  //   // A post entry.
  //   var userData = {
  //       player:{
  //       bet: guess,
  //       hand: cards}
  //   };
  
  //   // Get a key for a new Post.
  //   var newPlayerKey = firebase.database().ref().child('player').push().key;
  
  //   // Write the new post's data simultaneously in the posts list and the user's post list.
  //   var updates = {};
  //   updates['/bets/' + newPlayertKey] = postData;
  //   updates['/user-posts/' + uid + '/' + newPostKey] = postData;
  
  //   return firebase.database().ref().update(updates);
  // }
  // function writeTurn(round, pile, trump) {
  //   // A post entry.
  //   var turnData = {
  //     turn: round,
  //     pileTop: pile,
  //     trumpCard: trump
  //   };
  
  //   // Get a key for a new Post.
  //   var newTurnKey = firebase.database().ref().child('turn').push().key;
  
  //   // Write the new post's data simultaneously in the posts list and the user's post list.
  //   var updates = {};
  //   updates['/turn/' + newTurnKey] = postData;
  //   return firebase.database().ref().update(updates);
  // }