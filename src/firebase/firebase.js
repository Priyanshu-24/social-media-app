import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDEnn89-0EgOAZV0pcSkEr-iD6wos4NmaI",
  authDomain: "social-media-app-aad56.firebaseapp.com",
  projectId: "social-media-app-aad56",
  storageBucket: "social-media-app-aad56.appspot.com",
  messagingSenderId: "971386396151",
  appId: "1:971386396151:web:8039fa09b1d9a59ec2a2f2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const google_provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, google_provider};