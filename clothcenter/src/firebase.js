import firebase from 'firebase'
const firebaseConfig = {
        apiKey: "AIzaSyCl5srsHWDMSldXHm7gQhB5VfAQXkzxLIw",
        authDomain: "e-commproject.firebaseapp.com",
        projectId: "e-commproject",
        storageBucket: "e-commproject.appspot.com",
        messagingSenderId: "613109160403",
        appId: "1:613109160403:web:8b2f739eeebed1a4367726"
      };

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage();

export {storage}

