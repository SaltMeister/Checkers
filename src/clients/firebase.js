import firebase from 'firebase';

export function buildFirebase() {
  if (firebase.apps.length === 0) {
    const app = firebase.initializeApp({
      apiKey: "AIzaSyDCaRkIv6PBiUG76UbKxcfuzyxG6mVHXWc",
      authDomain: "ohkrap-f53f1.firebaseapp.com",
      databaseURL: "https://ohkrap-f53f1.firebaseio.com",
      projectId: "ohkrap-f53f1",
      storageBucket: "ohkrap-f53f1.appspot.com",
      messagingSenderId: "207866735089"
    });
    return firebase.database(app);
  } else {
    return firebase.apps[0].database();
  }
}

export function getRandomQuestion(questions) {
  var keys = Object.keys(questions)
  const randomIndex = Math.floor(Math.random() * keys.length);
  return questions[keys[randomIndex]];
}