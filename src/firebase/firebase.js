// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcc9TB-orUA1KkOf-VisSZMDXNrx0z8B8",
    authDomain: "sigeclid.firebaseapp.com",
    projectId: "sigeclid",
    storageBucket: "sigeclid.appspot.com",
    messagingSenderId: "514123636289",
    appId: "1:514123636289:web:3d27392157737f08f6f0c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
