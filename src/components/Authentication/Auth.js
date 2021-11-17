import React, { useRef, useState } from 'react'
import { signup, useAuth } from '../../firebase';
import './auth.css';


function Auth() {
   const [loading, setLoading] = useState(false);
   const currentUser = useAuth();

   const emailRef = useRef();
   const passwordRef = useRef();

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

   return (
      <div id="main">
         <h1>Login :)</h1>

         <div>Currently logged in as: { currentUser?.email }</div>

         <div id="fields">
            <input ref={emailRef} placeholder="Email" />
            <input ref={passwordRef} type="password" placeholder="Password" />
         </div>

         <button disabled={loading || currentUser} onClick={handleSignUp}>Sign Up</button>
      </div>
   )
}

export default Auth
