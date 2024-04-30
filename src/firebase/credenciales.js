// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6PkpuqpLYqg5FWwymELxUYL36iicRK_k",
    authDomain: "delbarca.firebaseapp.com",
    projectId: "delbarca",
    storageBucket: "delbarca.appspot.com",
    messagingSenderId: "569082541642",
    appId: "1:569082541642:web:ab8d36d108d7d892e418b3",
    measurementId: "G-KR3TZNH41M"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp)

export default auth;