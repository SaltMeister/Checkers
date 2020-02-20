import React, { Component } from 'react';
import {buildFirebase} from '../clients/firebase.js';


export function getDatabase(cb) {
     // firebase.database(app).ref('/round').on('value', (snapshot) => {
    //   let round = Object.values(snapshot.val());
    //   cb(round);
    // });
    var database = buildFirebase();
    var databaseRef = database.ref("/round");
    databaseRef.once("value").then(function(data) {
    const round = data.val();
  });
} 
// function turnCountWrite(){
//   buildFirebase.database().ref(/* turns destination*/).set({
//     turn: turn + 1
//   });

// }
// function turnCountRead(){
 
 }