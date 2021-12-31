import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB4bSvKmNCt1K8MNvqbrMVonYcVYki1REQ",
    authDomain: "webapp-acamica.firebaseapp.com",
    projectId: "webapp-acamica",
    storageBucket: "webapp-acamica.appspot.com",
    messagingSenderId: "674451994960",
    appId: "1:674451994960:web:a97cb13192fe6fe0021455",
    measurementId: "G-60VGGB2N43"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const googleAuthProvider  = new firebase.auth.GoogleAuthProvider()
 
export {
  db,
  googleAuthProvider,
  firebase
}