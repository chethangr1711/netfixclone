import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1ICkMdYuXNOfKVX4daq6jbby8f3I3xV4",
  authDomain: "netflix-clone-ccf01.firebaseapp.com",
  projectId: "netflix-clone-ccf01",
  storageBucket: "netflix-clone-ccf01.appspot.com",
  messagingSenderId: "640516223190",
  appId: "1:640516223190:web:a31f48f9b35f311b2f5977",
  measurementId: "G-ZMZJ8L7GH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
