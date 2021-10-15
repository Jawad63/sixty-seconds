import firebase from "firebase";

const firebaseConfig = {
   apiKey: "AIzaSyBiVMWwpf3XWVrIMMuV7_Lip2gBFNASdZc",
   authDomain: "donation-app-766cc.firebaseapp.com",
   projectId: "donation-app-766cc",
   storageBucket: "donation-app-766cc.appspot.com",
   messagingSenderId: "201151456057",
   appId: "1:201151456057:web:647c543ce2db1afe3fbee8",
   measurementId: "G-5HQXRB68YM"
};
 
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
