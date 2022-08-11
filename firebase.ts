// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDNdlZkHZPVDbN-OC6mgN8mU76mN0GWXiI',
  authDomain: 'nextjs-netflix-project-9fa66.firebaseapp.com',
  projectId: 'nextjs-netflix-project-9fa66',
  storageBucket: 'nextjs-netflix-project-9fa66.appspot.com',
  messagingSenderId: '164236698173',
  appId: '1:164236698173:web:98a2fe0ca99621f02fc054',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
