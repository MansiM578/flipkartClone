import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBGvBkDBO-dsvWqkeU28fP3mjTxSXCB8t4",
  authDomain: "flipkartclone-396906.firebaseapp.com",
  projectId: "flipkartclone-396906",
  storageBucket: "flipkartclone-396906.appspot.com",
  messagingSenderId: "768292126378",
  appId: "1:768292126378:web:73828e090a932e43e69ad3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
