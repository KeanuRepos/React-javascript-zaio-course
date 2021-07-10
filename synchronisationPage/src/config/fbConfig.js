import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAgfG2AhZfRcGvrKAikISm9_9D-QqG0iok",
    authDomain: "syncpage-fd9d9.firebaseapp.com",
    databaseURL: "https://syncpage-fd9d9.firebaseio.com",
    projectId: "syncpage-fd9d9",
    storageBucket: "syncpage-fd9d9.appspot.com",
    messagingSenderId: "418547034188",
    measurementId: "G-8MLZGWMZ0L"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;
