// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfgsXvzF2LdRMYKz9BRBUk6pygl9JYc4I",
  authDomain: "netflixgpt-a4777.firebaseapp.com",
  projectId: "netflixgpt-a4777",
  storageBucket: "netflixgpt-a4777.appspot.com",
  messagingSenderId: "163590051988",
  appId: "1:163590051988:web:8f010987b172d0fbfc7c81",
  measurementId: "G-JVWNZBW8E4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

