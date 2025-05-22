// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEeAKlHFlS4LsKKiW-VIWVelg3u0qfJ7w",
    authDomain: "justintime-32560.firebaseapp.com",
    projectId: "justintime-32560",
    storageBucket: "justintime-32560.firebasestorage.app",
    messagingSenderId: "1036492230203",
    appId: "1:1036492230203:web:c513b9685c87f2cba8161e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);