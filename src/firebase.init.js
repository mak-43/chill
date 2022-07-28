// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFVHvyE1lbvBXvejVan_ZxxmhHUOwSU2A",
  authDomain: "chill-c486b.firebaseapp.com",
  projectId: "chill-c486b",
  storageBucket: "chill-c486b.appspot.com",
  messagingSenderId: "264185455462",
  appId: "1:264185455462:web:d7babb08f43341a3409ea7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
export default auth