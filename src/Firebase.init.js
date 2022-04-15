// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQsiYS2I1ACy8w3OEaR6WmqvhrIuPVihQ",
  authDomain: "generate-color-website.firebaseapp.com",
  projectId: "generate-color-website",
  storageBucket: "generate-color-website.appspot.com",
  messagingSenderId: "1022567191493",
  appId: "1:1022567191493:web:445fd37a31d0eaa131f1ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth