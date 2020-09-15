import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyClFAK-ROv1vlGAWVeQszYns5R7IM780UA",
  authDomain: "clone-raj.firebaseapp.com",
  databaseURL: "https://clone-raj.firebaseio.com",
  projectId: "clone-raj",
  storageBucket: "clone-raj.appspot.com",
  messagingSenderId: "422379786829",
  appId: "1:422379786829:web:711a7f35e10b428c458204",
  measurementId: "G-JE4BZF69RY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
