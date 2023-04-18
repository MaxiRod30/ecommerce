
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBhQQi5FoxUayTC6nNqDsNnef2VquZSACg",
  authDomain: "backendropmax.firebaseapp.com",
  projectId: "backendropmax",
  storageBucket: "backendropmax.appspot.com",
  messagingSenderId: "456474045173",
  appId: "1:456474045173:web:bca7672a265df6da7cb3bc"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)