import { onSnapshot } from "@firebase/firestore"
import React, { useState, useEffect } from 'react';
import { database } from '../../firebase';
import {
   collection,
   getDocs,
} from 'firebase/firestore'
import './cards.css';
import Header from "../Header/Header";


function ProfileCards({handleLogout}) {

   const [person1, setPerson1] = useState([])
   
   useEffect(
      () =>
         onSnapshot(collection(database, "people"), (snapshot) =>
         setPerson1(snapshot.docs.map((doc) => ({...doc.data(), id:doc.id})))
         ),
      []
   );


   return (
      <>
         <nav>
            <button
               className="button"
               onClick={handleLogout}
            >
               Logout
            </button>
         </nav>

         <Header />

         <h1>"Help Others, Make difference"</h1>
         <div className="cardContainer">

            {person1.map((displayCard) => (
               <div
                  key={displayCard.id}
                  style={{ backgroundImage: `url(${displayCard.url})`}}
                  className="card"
               >
                  <h3 className="name">{displayCard.name}</h3>
               </div>
            ))}

         </div>
      </>
   );
}

export default ProfileCards
