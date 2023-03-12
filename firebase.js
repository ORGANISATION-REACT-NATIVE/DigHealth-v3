import firebase from 'firebase';

// Configuration de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDxXZgZMZnuMM6FkSXgeyijE02YLIpvo9M",
    authDomain: "e-sante-577a1.firebaseapp.com",
    projectId: "e-sante-577a1",
    storageBucket: "e-sante-577a1.appspot.com",
    messagingSenderId: "515869819032",
    appId: "1:515869819032:web:0665eacccb5521f64ed0ed",
    measurementId: "G-VW8X3T0R88"
};

// Initialisation de Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
