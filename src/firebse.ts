import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAE7VHd7GLr81lYQBftOwrLL7J_mk3B5mw",
  authDomain: "flipkart--clone.firebaseapp.com",
  projectId: "flipkart--clone",
  storageBucket: "flipkart--clone.appspot.com",
  messagingSenderId: "613771533123",
  appId: "1:613771533123:web:33c17b92c29834eddfadf6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
