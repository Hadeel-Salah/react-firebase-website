import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyATYgVXI21Mhps462rafGy4jfIVZ6I0Dj0",
  authDomain: "crwn-db-2c4aa.firebaseapp.com",
  databaseURL: "https://crwn-db-2c4aa.firebaseio.com",
  projectId: "crwn-db-2c4aa",
  storageBucket: "crwn-db-2c4aa.appspot.com",
  messagingSenderId: "701302998600",
  appId: "1:701302998600:web:0adad97009933de8587a7d",
  measurementId: "G-YPZQ7HHB7H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();



export const auth = firebase.auth();
export const firestore = firebase.firestore;
export default db;