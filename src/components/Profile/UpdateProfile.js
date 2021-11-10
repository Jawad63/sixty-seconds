import React, { useState, useEffect } from 'react';
import './updateProfile.css';
import { database } from '../../firebase'
import {
   collection,
   getDocs,
   addDoc,
   updateDoc,
   doc,
   deleteDoc
} from 'firebase/firestore'



// getDocs: returns all documents from a specific collection.

function UpdateProfile() {

   // CRUD: 
   const [userName, setUserName] = useState("");
   const [userAge, setUserAge] = useState(0);
   const [userGender, setUserGender] = useState("");
   const [userStatus, setUserStatus] = useState("");
   const [userGoal, setUserGoal] = useState("");
   const [userDonation, setUserDonation] = useState(0);
   const [userImg, setUserImg] = useState("");
   const [userAboutMe, setUserAboutMe] = useState("")

   // Here comes the already exisiting data from your profile which you can edit: 
   const [user, setUser] = useState([]);

   // This is to Display our already exsisting data: 
   useEffect(() => {
      const getProfileInfo = async () => {
         const data = await getDocs(userCollectionRef);
         setUser(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      };

      getProfileInfo();
   }, [user])


   // to connect with the collection from firebase: 
   const userCollectionRef = collection(database, "profile");
   
   // To create User:
   const createUser = async () => {
      await addDoc(userCollectionRef,
         {
            name: userName,
            age: userAge,
            gender: userGender,
            status: userStatus,
            goal: userGoal,
            donation: userDonation,
            url: userImg,
            aboutMe: userAboutMe
         });
   }
   
   // To Update User: 
   const updateUser = async (id) => {
      const userDoc = doc(database, "profile", id)
      const newData = {
         name: userName,
         age: userAge,
         gender: userGender,
         status: userStatus,
         goal: userGoal,
         donation: userDonation,
         url: userImg,
         aboutMe: userAboutMe
      }
      await updateDoc(userDoc, newData)
   };

   // To delete User: DO NOT CLICK ON DELETE THOO!!!
   const deleteUser = async (id) => {
      const deleteUserDoc = doc(database, "profile", id);
      await deleteDoc(deleteUserDoc);
   }


   return (
      <div className="update__profile">
         
         <h1>Update your profile</h1>
         {user.map(update => (
            <>
               <h3 className="update_bio">Update your Picture:</h3>
               <div
                  
               style={{ backgroundImage: `url(${update.url})` }}
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
                        placeholder={update.name}
                        onChange={(event) => {setUserName(event.target.value)}}
                     />
                  </div>

                  <div className="field">
                     <label>Age</label>
                     <input
                        className="field_txt"
                        type="text"
                        placeholder={update.age}
                        onChange={(event) => {setUserAge(event.target.value)}}
                     />
                  </div>

                  <div className="field">
                     <label>Gender</label>
                     <input
                        className="field_txt"
                        type="text"
                        placeholder={update.gender}
                        onChange={(event) => {setUserGender(event.target.value)}}
                     />
                  </div>

                  <div className="field">
                     <label>Status</label>
                     <input
                        className="field_txt"
                        type="text"
                        placeholder={update.status}
                        onChange={(event) => {setUserStatus(event.target.value)}}
                     />
                  </div>

                  <div className="field">
                     <label>Goal</label>
                     <input
                        className="field_txt"
                        type="text"
                        placeholder={update.goal}
                        onChange={(event) => {setUserGoal(event.target.value)}}
                     />
                  </div>

                  <div className="field">
                     <label>Donation</label>
                     <input
                        className="field_txt"
                        type="text"
                        placeholder={update.donation}
                        onChange={(event) => {setUserDonation(event.target.value)}}
                     />
                  </div>

                  <div className="field">
                     <label>Img</label>
                     <input
                        className="field_txt"
                        type="text"
                        placeholder={update.url}
                        onChange={(event) => {setUserImg(event.target.value)}}
                     />
                  </div>

                  <div className="field">
                     <label>About me:</label>
                     <input
                        className="field_txt"
                        type="text"
                        cols="40" 
                        rows="3" 
                        placeholder={update.aboutMe}
                        onChange={(event) => {setUserAboutMe(event.target.value)}}
                     />
                  </div>

               </div>

               

               <button
                  onClick = {createUser}
                  className="button_update"
                  type="submit"
               >
                  Create new profile
               </button>

               <button
                  onClick={() => updateUser(
                     update.id,
                     update.name,
                     update.age,
                     update.gender,
                     update.sattus,
                     update.goal,
                     update.donation,
                     update.url,
                     update.aboutMe
                  )}
                  className="button_update"
                  type="submit"
               >
                  Update your profile
               </button>

               <button
                  onClick = {() => {deleteUser(update.id)}}
                  className="button_del"
                  type="submit"
               >
                  Delete your profile
               </button>
            </>
         ))}
      </div>
   )
}

export default UpdateProfile
