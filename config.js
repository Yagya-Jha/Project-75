import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBurF3rduzjdohdMj-UhC8RH1fBjy551zU",
    authDomain: "story-hub-79f06.firebaseapp.com",
    projectId: "story-hub-79f06",
    databaseURL: "https://story-hub-79f06.firebaseio.com",
    storageBucket: "story-hub-79f06.appspot.com",
    messagingSenderId: "500211070177",
    appId: "1:500211070177:web:298de17c6f042a39e0b3a0"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();