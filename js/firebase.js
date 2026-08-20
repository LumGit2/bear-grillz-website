// Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyAFlnJJjCYm1R2xfUn1WZjgAWtUFl0mqbY",
  authDomain: "bear-grillz.firebaseapp.com",
  projectId: "bear-grillz",
  storageBucket: "bear-grillz.firebasestorage.app",
  messagingSenderId: "492240628675",
  appId: "1:492240628675:web:4599bf9e900d31265d6b76"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Firestore database
const db = getFirestore(app);


export { db };
