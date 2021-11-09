import React, { useState, useEffect } from 'react';
import './updateProfile.css';

import database, { getDocs } from '../../firebase'



// getDocs: returns all documents from a specific collection.

function UpdateProfile() {

   // CRUD: 
   const [userName, setUserName] = useState("");
   const [userAge, setUserAge] = useState(0);
   const [userGender, setUserGender] = useState("");
   const [userStatus, setUserStatus] = useState("");
   const [userGoal, setUserGoal] = useState("");

   // Here comes the already exisiting data from your profile which you can edit: 
   const [user, setUser] = useState([]);



   /* 
   // This will help us display the data that already exists in our DB:
   useEffect (() => {
      onSnapshot(collection(db, "profile"), (snapshot) => {
         console.log(snapshot.docs)
      });
   })
   */


   useEffect(() => {
         database
         .collection("profile")
         .onSnapshot((snapshot) =>
         setUser(snapshot.docs.map((doc) => doc.data()))
      );

   }, []);


   return (
      <div className="update__profile">
         
         <h1>Update your profile</h1>
         {user.map(doc => (
            <>
               <h3 className="update_bio">Update your Picture:</h3>
               <div
                  
               style={{ backgroundImage: `url(${doc.url})` }}
               className="image"
               >

               </div>

               <div className="update_bio">
                  <h3>Update your Bio:</h3>

                  <div className="field">
                     <label>Name</label>
                     <input
                        className="field_txt"
                        type="text"
                        placeholder={doc.name}
                        onChange={(event) => {setUserName(event.target.value)}}
                     />
                  </div>

                  <div className="field">
                     <label>Age</label>
                     <input
                        className="field_txt"
                        type="text"
                        placeholder={doc.age}
                        onChange={(event) => {setUserAge(event.target.value)}}
                     />
                  </div>

                  <div className="field">
                     <label>Gender</label>
                     <input
                        className="field_txt"
                        type="text"
                        placeholder={doc.gender}
                        onChange={(event) => {setUserGender(event.target.value)}}
                     />
                  </div>

                  <div className="field">
                     <label>Status</label>
                     <input
                        className="field_txt"
                        type="text"
                        placeholder={doc.status}
                        onChange={(event) => {setUserStatus(event.target.value)}}
                     />
                  </div>

                  <div className="field">
                     <label>Goal</label>
                     <input
                        className="field_txt"
                        type="text"
                        placeholder={doc.goal}
                        onChange={(event) => {setUserGoal(event.target.value)}}
                     />
                  </div>

               </div>

               

               <button
                  /*onClick = {createUser}*/
                  className="button_update"
                  type="submit"
               >
                  Create
               </button>

               <button
                  /*onClick = {() => updateUser(doc.id, doc.age)}*/
                  className="button_update"
                  type="submit"
               >
                  Update
               </button>

               <button
                  /*onClick = {() => {deleteUser(doc.id)}}*/
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
