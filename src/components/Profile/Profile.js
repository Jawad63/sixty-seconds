import React, { useState, useEffect } from "react";
import './profile.css';


const Profile = () => {

   //useSate to get info on profile:
   const [discription, setDiscription,] = useState([]);

   //useEffect to render and update those changes:
   useEffect(() => {
   // here comes the code that needs to be rendered based on person's
   // profile.      
   })

   return (

      <div>
         <h1>My Profile</h1>

         <div className="profile">
            <div className="row">
               <div className="col">
                  {discription.map(info => (
                     <div
                        className="img"
                        style={{ backgroundImage: `url`}}
                     >
                        
                     </div>
                  ))}
               </div>

               <div className="col">
                  
               </div>
            </div>
         </div>
      </div>

   )
}

export default Profile;