// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "process.env.AIzaSyDbQSd9g-tKSVksNzQB77RptmDpXq6lmAM",
  authDomain: "process.env.filmland-f3c60.firebaseapp.com",
  projectId: "process.env.filmland-f3c60",
  storageBucket: "process.env.filmland-f3c60.appspot.com",
  messagingSenderId: "process.env.269048560105",
  appId: "process.env.1:269048560105:web:1ffc88c8e028fe0b557378",
  measurementId: "process.env.G-MB0500Q3BN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;