import React, { useState, useEffect } from 'react';
import Login from './Login';
import Cards from '../Cards/Cards.js'
import { database } from '../../firebase'
import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   onAuthStateChanged,

} from 'firebase/auth';

function Auth() {

   const [user, setUser] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [emailError, setEmailError] = useState('');
   const [passwordError, setPasswordError] = useState('');
   const [hasAccount, setHasAccount] = useState(false);

   const auth = getAuth();

   const clearInputs = () => {
      setEmail('');
      setPassword('');
   }

   const clearErrors = () => {
      setEmailError('');
      setPasswordError('');
   } 

   // LOGIN:
   const handleLogin = () => {
      clearErrors();

      signInWithEmailAndPassword(auth, email, password)
      .catch((err) => {
         switch (err.code) {

            case "Invalid Email":
            case "User Disabled":
            case "User Not Found":
               setEmailError(err.message);
            break;
         
            case "Wrong Password. Try again":
               setPasswordError(err.message);
            break;
         }
      });
   };


   //SIGNUP:
   const handleSignup = () => {
      clearErrors();

      createUserWithEmailAndPassword(auth, email, password)
      .catch((err) => {
         switch (err.code) {

            case "Email already in use":
            case "auth/invalid-email":
               setEmailError(err.message);
            break;
         
            case "Password too weak or short":
               setPasswordError(err.message);
            break;
         }
      });
   }

   // LOGOUT:
   const handleLogout = () => {
      getAuth().signOut();
   }


   const authListener = () => {
      
      getAuth().onAuthStateChanged((user) => {
         if (user) {
            clearInputs();
            setUser(user);
         } else {
            setUser("");
         }
      });
   };


   useEffect(() => {
      authListener();
   }, []);



   return (
      
      <div className="auth">

         {user ? (
            <Cards handleLogout={handleLogout} />
         ) : (
               
            <Login
               email={email}
               setEmail={setEmail}

               password={password}
               setPassword={setPassword}

               handleLogin={handleLogin}
               handleSignup={handleSignup}

               hasAccount={hasAccount}
               setHasAccount={setHasAccount}

               emailError={emailError}
               passwordError={passwordError}
            />
         )}

      </div>
   )
}

export default Auth
