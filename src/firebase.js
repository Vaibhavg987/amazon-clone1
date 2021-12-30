import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyB7kJpgiIhUl9pnqEKsJgj6BH2Zh_T3II0",
  authDomain: "clone-e8b30.firebaseapp.com",
  projectId: "clone-e8b30",
  storageBucket: "clone-e8b30.appspot.com",
  messagingSenderId: "879976986484",
  appId: "1:879976986484:web:3a4c7eb66f377bc452de21",
  measurementId: "G-R7JWS4VQC5",
});


const auth = firebase.auth();

export { auth };
