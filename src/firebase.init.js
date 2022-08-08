// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOoZFy6qiZM_Nc7DI-u4In1j3fQGWNDkI",
    authDomain: "muscle-mania-gym-center.firebaseapp.com",
    projectId: "muscle-mania-gym-center",
    storageBucket: "muscle-mania-gym-center.appspot.com",
    messagingSenderId: "132687365166",
    appId: "1:132687365166:web:e1c004aab93e19fc0b4bbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;