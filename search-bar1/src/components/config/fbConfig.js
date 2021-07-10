import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC8WGzL4m7UhC7PxwW2uxCCO5ZlYxHHBV4",
    authDomain: "dyna-sync-page.firebaseapp.com",
    databaseURL: "https://dyna-sync-page.firebaseio.com",
    projectId: "dyna-sync-page",
    storageBucket: "dyna-sync-page.appspot.com",
    messagingSenderId: "1086551925403",
    appId: "1:1086551925403:web:e696e3ef59b86c54899c3e",
    measurementId: "G-W0JPWQ62EZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampInSnapshots:true});
  firebase.analytics();
  export default firebase;