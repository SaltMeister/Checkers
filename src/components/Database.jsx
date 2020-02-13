import React, { Component } from 'react';
import {buildFirebase} from 'clients/firebase.js';

function getInfo(cb) {
    const app = firebase.initializeApp({
      apiKey: "AIzaSyDCaRkIv6PBiUG76UbKxcfuzyxG6mVHXWc",
      authDomain: "ohkrap-f53f1.firebaseapp.com",
      databaseURL: "https://ohkrap-f53f1.firebaseio.com",
      projectId: "ohkrap-f53f1",
      storageBucket: "ohkrap-f53f1.appspot.com",
      messagingSenderId: "207866735089"
    });
    // firebase.database(app).ref('/round').on('value', (snapshot) => {
    //   let round = Object.values(snapshot.val());
    //   cb(round);
    });
     var database = buildFirebase();
     var databaseRef = database.ref("/round");
     databaseRef.once("value").then(function(data) {
     const round = data.val();
   });
}