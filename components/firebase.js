import firebase from 'firebase';
import '@firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAGw45Se3k8wthNUfyhcxfIBU8ClbjZiPE",
  authDomain: "todolistfirebase-2ae4e.firebaseapp.com",
  projectId: "todolistfirebase-2ae4e",
  storageBucket: "todolistfirebase-2ae4e.appspot.com",
  messagingSenderId: "897839967272",
  appId: "1:897839967272:web:6b26028bfe6a0489fd991d"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;