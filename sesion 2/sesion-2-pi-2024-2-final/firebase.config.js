// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3Y5pWZ-hAKv0ixG310sB4_8r9yRQt-v0",
  authDomain: "aluverse-81da5.firebaseapp.com",
  projectId: "aluverse-81da5",
  storageBucket: "aluverse-81da5.appspot.com",
  messagingSenderId: "208773572344",
  appId: "1:208773572344:web:4825738b038fa3438c7d0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firebase Firestore and get a reference to the service
export const db = getFirestore(app);