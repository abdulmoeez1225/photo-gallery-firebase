// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc3v2x2XfjF64eRhWsbAqfROP1OMJcVVw",
  authDomain: "photo-gallery-firegram-995bd.firebaseapp.com",
  projectId: "photo-gallery-firegram-995bd",
  storageBucket: "photo-gallery-firegram-995bd.appspot.com",
  messagingSenderId: "74583887398",
  appId: "1:74583887398:web:7639ef4c54bc56ae04e0e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
