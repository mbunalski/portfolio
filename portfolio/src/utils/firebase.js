// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZc0KZDP4RVfFZRE0ufM9yh8vp8OmXEyk",
  authDomain: "url-shortener-2fdda.firebaseapp.com",
  projectId: "url-shortener-2fdda",
  storageBucket: "url-shortener-2fdda.appspot.com",
  messagingSenderId: "399823372685",
  appId: "1:399823372685:web:30c6bc12e38425a7bbfdc4",
  measurementId: "G-226BSJFRFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app);