// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEjFi4xc9ES96uIdXOEFILG6UkvqURUSM",
  authDomain: "task-manager-e1e8e.firebaseapp.com",
  projectId: "task-manager-e1e8e",
  storageBucket: "task-manager-e1e8e.appspot.com",
  messagingSenderId: "728921568752",
  appId: "1:728921568752:web:da4be56d86fb722dd35935",
  measurementId: "G-BZ9KZ21NVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};
