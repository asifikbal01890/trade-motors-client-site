// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIY3J1BO_1eKlPyB7pzZggsmnOdOhm3zc",
  authDomain: "trade-motors.firebaseapp.com",
  projectId: "trade-motors",
  storageBucket: "trade-motors.appspot.com",
  messagingSenderId: "865882823733",
  appId: "1:865882823733:web:9f882f491089300690a57c",
  measurementId: "G-G4PY0EN48P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;