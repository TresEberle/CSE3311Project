
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Grab firebase's authentication and firestore
// import {...} from "firebase/auth";
// import {...} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdUcGHy4axbHt-lUjFAFT4g0w2TzmWD7Q",
  authDomain: "dev-gamify.firebaseapp.com",
  projectId: "dev-gamify",
  storageBucket: "dev-gamify.appspot.com",
  messagingSenderId: "961648105150",
  appId: "1:961648105150:web:7a49daf0f18010057c30ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);