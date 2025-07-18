// js/firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyD_utYzbzuTb5T9kSpAA4D8GlfsEtLulYQ",
  authDomain: "otmanager-b61c5.firebaseapp.com",
  projectId: "otmanager-b61c5",
  storageBucket: "otmanager-b61c5.firebasestorage.app",
  messagingSenderId: "270249686012",
  appId: "1:270249686012:web:685d302f544015e20c7879",
  measurementId: "G-TMY659TRK3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(); // ใช้สำหรับ Firestore