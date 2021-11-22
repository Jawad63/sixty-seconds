import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
   apiKey: "AIzaSyBiVMWwpf3XWVrIMMuV7_Lip2gBFNASdZc",
   authDomain: "donation-app-766cc.firebaseapp.com",
   databaseURL: "https://donation-app-766cc-default-rtdb.europe-west1.firebasedatabase.app",
   projectId: "donation-app-766cc",
   storageBucket: "donation-app-766cc.appspot.com",
   messagingSenderId: "201151456057",
   appId: "1:201151456057:web:647c543ce2db1afe3fbee8",
   measurementId: "G-5HQXRB68YM"
 };
 
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);


export { database };