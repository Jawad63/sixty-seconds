import React, {useState, useEffect} from 'react';
import './updateProfile.css';
import database from '../../firebase';


function UpdateProfile() {

   const [updateUser, setUpdateUser] = useState([]);

   useEffect(() => {
      database
         .collection("profile")
         .onSnapshot((snapshot) =>
         setUpdateUser(snapshot.docs.map((doc) => doc.data()))
      );

      console.log(updateUser)
   }, []);



   return (
      <div className="update__profile">
         
         <h1>Update your profile</h1>
         {updateUser.map(details => (
            <>
               <h3 className="update_bio">Update your Picture:</h3>
               <div
                  
               style={{ backgroundImage: `url(${details.url})` }}
               className="image"
               >

               </div>

               <div className="update_bio">
                  <h3>Update your Bio:</h3>

                  <div className="field">
                     <label>Name</label>
                     <input className="field_txt" type="text" placeholder={details.name} />
                  </div>

                  <div className="field">
                     <label>Age</label>
                     <input className="field_txt" type="text" placeholder={details.age} />
                  </div>

                  <div className="field">
                     <label>Gender</label>
                     <input className="field_txt" type="text" placeholder={details.gender} />
                  </div>

                  <div className="field">
                     <label>Status</label>
                     <input className="field_txt" type="text" placeholder={details.status} />
                  </div>

                  <div className="field">
                     <label>Goal</label>
                     <input className="field_txt" type="text" placeholder={details.goal} />
                  </div>

               </div>

               <button
                  className="button_update"
                  type="submit"
               >
                  Update
               </button>

               <button
                  className="button_del"
                  type="submit"
               >
                  Delete
               </button>
            </>
         ))}
      </div>
   )
}

export default UpdateProfile
