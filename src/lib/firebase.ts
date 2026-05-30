import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore } from 'firebase/firestore';

const firebaseConfig = {
  projectId: "temporal-maxim-1jlsj",
  appId: "1:510066963557:web:1e3b27f25b07c4d1d6c28c",
  apiKey: "AIzaSyBR6lk8z_4y_2Rfye8p8rr6hr1N9hAbCrY",
  authDomain: "temporal-maxim-1jlsj.firebaseapp.com",
  firestoreDatabaseId: "ai-studio-734e9ebd-977b-4783-8770-d09a6cdad6b1",
  storageBucket: "temporal-maxim-1jlsj.firebasestorage.app",
  messagingSenderId: "510066963557",
  measurementId: ""
};

// Initialize Firebase App
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);

// Initialize Firestore with custom DB ID and experimental settings
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true
}, firebaseConfig.firestoreDatabaseId);
