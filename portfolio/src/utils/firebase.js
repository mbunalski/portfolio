// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD4RQFJsVfLjKTM5rwGMEYrsAUCg6_PUBs",
    authDomain: "url-app-a191c.firebaseapp.com",
    projectId: "url-app-a191c",
    storageBucket: "url-app-a191c.appspot.com",
    messagingSenderId: "570818146318",
    appId: "1:570818146318:web:2814638009d6ab1aaa0c5f",
    measurementId: "G-4HT0WW83Y3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app);