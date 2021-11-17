import React, { useRef, useState } from 'react'
import { signup, login, logout, useAuth } from '../../firebase';
import './auth.css';


function Auth() {
   const [loading, setLoading] = useState(false);
   const currentUser = useAuth();

   const emailRef = useRef();
   const passwordRef = useRef();


   // SignUp: --->
   async function handleSignUp() {
      try {
         setLoading(true);
         await signup(
            emailRef.current.value,
            passwordRef.current.value
         );
      }
      catch {
         {alert("This email is already registered!")}
      };
      setLoading(false);
   }


   // LogIn: --->
   async function handleLogIn() {
      try {
         setLoading(true);
         await login(
            emailRef.current.value,
            passwordRef.current.value
         );
      }
      catch {
         {alert("This email is already registered!")}
      };
      setLoading(false);
   }


   // LogOut: --->
   async function handleLogOut() {
      try {
         setLoading(true);
         await logout();
      }
      catch {
         alert("Error!!!")
      }
      setLoading(false);
   }



   return (
      <div id="main">
         <h1>Login :)</h1>

         <div>Currently logged in as: { currentUser?.email }</div>

         <div id="fields">
            <input ref={emailRef} placeholder="Email" />
            <input ref={passwordRef} type="password" placeholder="Password" />
         </div>

         <button className="logIn_button"
            onClick={handleSignUp}
            disabled={loading || currentUser}

         >
            SignUp
         </button>

         <button
            className="logOut_button"
            onClick={handleLogIn}
            disabled={loading || currentUser}
         >
            LogIn
         </button>

         <button
            className="logOut_button"
            onClick={handleLogOut}
            disabled={loading || !currentUser}
         >
            LogOut
         </button>
      </div>
   )
}

export default Auth
