import { initializeApp } from 'firebase/app'; 
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup 
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCtAVPIMdx-NicLN0uNp2gA22l8jtwemPM",
  authDomain: "humchat-fedb9.firebaseapp.com",
  projectId: "humchat-fedb9",
  storageBucket: "humchat-fedb9.appspot.com",
  messagingSenderId: "812822906421",
  appId: "1:812822906421:web:04f45688860e7a9b0a537c",
  measurementId: "G-32DW2HXYVV"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const Popup = signInWithPopup ;
export { auth, provider, Popup };