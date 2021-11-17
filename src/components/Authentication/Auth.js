import React from 'react'
import { signup } from '../../firebase';


function Auth() {

   function handleSignUp() {
      
   }







   return (
      <div id="main">
         <h1>Login :)</h1>

         <div id="fields">
            <input placeholder="Email" />
            <input type="password" placeholder="Password" />
         </div>

         <button onClick={handleSignUp}>Sign Up</button>

      </div>
   )
}

export default Auth
