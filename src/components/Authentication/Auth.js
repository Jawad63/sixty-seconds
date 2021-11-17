import React, { useRef } from 'react'
import { signup } from '../../firebase';


function Auth() {
   const emailRef = useRef();
   const passwordRef = useRef();

   async function handleSignUp() {
      try {
         await signup(
            emailRef.current.value,
            passwordRef.current.value
         );
      } catch {
         alert("This email is already registered!")
      }

   }

   return (
      <div id="main">
         <h1>Login :)</h1>

         <div id="fields">
            <input ref={emailRef} placeholder="Email" />
            <input ref={passwordRef} type="password" placeholder="Password" />
         </div>

         <button onClick={handleSignUp}>Sign Up</button>
      </div>
   )
}

export default Auth
