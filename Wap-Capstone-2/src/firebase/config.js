import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmz0DhsTe0oaTqgsFAiCs1WYS-cI77Gt0",
  authDomain: "wap-capstone-project-11edd.firebaseapp.com",
  projectId: "wap-capstone-project-11edd",
  storageBucket: "wap-capstone-project-11edd.firebasestorage.app",
  messagingSenderId: "373551393624",
  appId: "1:373551393624:web:e5a9689493af1d5c89932d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app; 

