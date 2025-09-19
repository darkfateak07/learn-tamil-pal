import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA68rYWkyN0f7ZW5rrn5tgKd13vZLHjtyY",
  authDomain: "vanakkam-tamil-97975.firebaseapp.com",
  projectId: "vanakkam-tamil-97975",
  storageBucket: "vanakkam-tamil-97975.firebasestorage.app",
  messagingSenderId: "304516466558",
  appId: "1:304516466558:web:246e845f882b222de4d52f",
  measurementId: "G-K3YGCW2KVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };