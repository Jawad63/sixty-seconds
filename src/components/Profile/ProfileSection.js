import React, { useState, useEffect } from 'react'
import { database } from '../../firebase.js';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from "react-router-dom";
import './profilesection.css';

function ProfileSection() {

   // collection: 1
   // First Import data from firebase: useState()
   const [profileOne, setProfileOne] = useState([]);

   const profileCollectionOne = collection(database, "profiles");
   // Now to display data: useEffect 

   useEffect(() => {
      const getProfileInfo = async () => {
         const data = await getDocs(profileCollectionOne);
         setProfileOne(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
      }
      getProfileInfo();
   }, []);



   return (
      <>
         <div className="profile__heading">
            <h3>Kenny</h3>
            <h3>Alina</h3>
         </div>

         <div className="profile__Section">
            {profileOne.map(display => (
               <>
                  <Link to={`/profile/`}>
                     <div
                        style={{ backgroundImage: `url(${display.imgOne})` }}
                        className="image"
                     ></div>
                  </Link>

                  <Link to={`/profile/`}>
                     <div
                        style={{ backgroundImage: `url(${display.imgTwo})` }}
                        className="image"
                     ></div>
                  </Link>
               </>
            ))}
         </div>
      </>
   );
}

export default ProfileSection
