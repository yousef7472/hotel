import { initializeApp } from "firebase/app";
// import {firebase} from 'firebase/app';
import { getAuth } from 'firebase/auth';

// import { getDatabase } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyDK7dLT2jqVVjquVaFtsv80tuofPpTVwWw",
  authDomain: "auth-development-85879.firebaseapp.com",
  projectId: "auth-development-85879",
  storageBucket: "auth-development-85879.appspot.com",
  messagingSenderId: "649818716749",
  appId: "1:649818716749:web:667419298f5065669d3a04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const projectAuth = firebase.auth();
export const auth = getAuth(app)
// export const DB = getDatabase(app)

// export { projectAuth };
export default app