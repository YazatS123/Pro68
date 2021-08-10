import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBWNO7Wp2NPuGWYbi0olo7YTC0JzjQY0ac",
    authDomain: "buzzer-app-fb395.firebaseapp.com",
    databaseURL: "https://buzzer-app-fb395-default-rtdb.firebaseio.com",
    projectId: "buzzer-app-fb395",
    storageBucket: "buzzer-app-fb395.appspot.com",
    messagingSenderId: "995495656349",
    appId: "1:995495656349:web:e61fefebd75f6b91670d74",
    measurementId: "G-FHEQ983114"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.database()