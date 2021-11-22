import React from 'react'
import './login.css'

function Login(props) {

   const {
      email,
      setEmail,
      password,
      setPassword,
      handleLogin,
      handleSignup,
      hasAccount,
      setHasAccount,
      emailError,
      passwordError,
   } = props;

   return (
      <section>
         <div className="loginContainer">
            <label className="label">Username</label>
            <input
               className="input-field"
               type="text" autoFocus required
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
            <p className="errorMessage">{emailError}</p>

            <label className="label">Password</label>
            <input
               className="input-field"
               type="password"
               required
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />
            <p className="errorMessage">{passwordError}</p>

            <div className="btnContainer">
               {hasAccount ? (
                  <>
                     <button className="button" onClick={handleLogin}>Sign in</button>
                     <p>Don't have an account ? <span className="span"
                        onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                  </>
               ) : (
                  <>
                        <button className="button" onClick={handleSignup}>Sign up</button>
                        <p>Have an account ? <span className="span"
                           onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                  </> 
               )}
            </div>
         </div>
      </section>
   )
};

export default Login;
