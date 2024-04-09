// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiX7hj8xlr5xNQLMmbeBpfF0hNztOhOPo",
  authDomain: "react-authentication-app-1f139.firebaseapp.com",
  projectId: "react-authentication-app-1f139",
  storageBucket: "react-authentication-app-1f139.appspot.com",
  messagingSenderId: "685750721311",
  appId: "1:685750721311:web:2fe518d362443ccc87ee2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth