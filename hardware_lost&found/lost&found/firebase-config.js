// Firebase v11.0.2 Configuration
const firebaseConfig = {
    apiKey: "AIzaSyClON9wltSBZq3nPq5rGMmd092JTmzohx0",
    authDomain: "lostfoundsystem-36252.firebaseapp.com",
    databaseURL: "https://lostfoundsystem-36252-default-rtdb.firebaseio.com",
    projectId: "lostfoundsystem-36252",
    storageBucket: "lostfoundsystem-36252.appspot.com",
    messagingSenderId: "584490644588",
    appId: "1:584490644588:web:ff76482a71cc0fc30b1449",
    measurementId: "G-5KG6312FVW"
};

// Initialize Firebase v11.0.2
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

console.log("🔥 Firebase Initialized Successfully");
