import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyD766lXHAznUnolHug1wPCvN6ACVOyyFmk",
    authDomain: "m-city-f5f3a.firebaseapp.com",
    databaseURL: "https://m-city-f5f3a.firebaseio.com",
    projectId: "m-city-f5f3a",
    storageBucket: "m-city-f5f3a.appspot.com",
    messagingSenderId: "483541173845",
    appId: "1:483541173845:web:ac165619fe5a79f9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');


// firebaseDB.ref('matches').once('value').then((snapshot)=>{
//     console.log(snapshot.val());
// });

export {
    firebase,
    firebaseMatches
}