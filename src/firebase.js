import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCLAb81cLOT50zp1FYRYK6Sem4y43xnT7I",
    authDomain: "tinderclone-6cb80.firebaseapp.com",
    databaseURL: "https://tinderclone-6cb80.firebaseio.com",
    projectId: "tinderclone-6cb80",
    storageBucket: "tinderclone-6cb80.appspot.com",
    messagingSenderId: "1024334380714",
    appId: "1:1024334380714:web:890c9d6db65eaf18f4dad3",
    measurementId: "G-TDF1BL2T6Q"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;