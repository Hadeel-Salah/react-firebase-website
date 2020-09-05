require('firebase/firestore');
import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAV2w7XGaqDNZc6eXDI0RBbPXHAyJXjjGM",
    authDomain: "react-blo.firebaseapp.com",
    databaseURL: "https://react-blo.firebaseio.com",
    projectId: "react-blo",
    storageBucket: "react-blo.appspot.com",
    messagingSenderId: "51646556862",
    appId: "1:51646556862:web:7603c5a8e6f423e52b0cef"
  };
  firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();



export const auth = firebase.auth();
export const firestore = firebase.firestore;
export default db;