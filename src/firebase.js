import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC6PkpuqpLYqg5FWwymELxUYL36iicRK_k",
    authDomain: "delbarca.firebaseapp.com",
    projectId: "delbarca",
    storageBucket: "delbarca.appspot.com",
    messagingSenderId: "569082541642",
    appId: "1:569082541642:web:ab8d36d108d7d892e418b3",
    measurementId: "G-KR3TZNH41M"
};
firebaseConfig.initializeApp = initializeApp;

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;