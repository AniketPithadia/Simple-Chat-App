// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries}
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "mern-chat-app-c5f6f.firebaseapp.com",
  projectId: "mern-chat-app-c5f6f",
  storageBucket: "mern-chat-app-c5f6f.appspot.com",
  messagingSenderId: "333523614129",
  appId: "1:333523614129:web:2a992661d018edff28a590",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
