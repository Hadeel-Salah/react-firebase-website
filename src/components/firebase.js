import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAyqfkmwg90MuYdgWCNp4xVCsGppJqQ-kw",
  authDomain: "react-website-blog.firebaseapp.com",
  databaseURL: "https://react-website-blog.firebaseio.com",
  projectId: "react-website-blog",
  storageBucket: "react-website-blog.appspot.com",
  messagingSenderId: "691893997670",
  appId: "1:691893997670:web:ea0ba549e160131a151da7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;