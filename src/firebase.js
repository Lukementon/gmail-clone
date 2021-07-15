import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA8efsPk7IZW4g2IMjhthsMs2mfJoihCfs",
  authDomain: "clone-e4611.firebaseapp.com",
  projectId: "clone-e4611",
  storageBucket: "clone-e4611.appspot.com",
  messagingSenderId: "685818713415",
  appId: "1:685818713415:web:4abb40c2e3bcba3e03e862",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
