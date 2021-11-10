import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import { database } from '../../firebase';
import {
   collection,
   getDocs
} from 'firebase/firestore'
import './cards.css';


function ProfileCards() {

   // useState: people is the variable array and the function is setPeople:
   const [people, setPeople] = useState([]);

   const userCollectionRef = collection(database, "people");

   useEffect(() => {
      const getProfileInfo = async () => {
         const data = await getDocs(userCollectionRef);
         setPeople(data.docs.map((doc) => ({...doc.data()})))
      };

      getProfileInfo();
   }, [])



   

   return (

      <div>
         <h1>"Help Others, Make difference"</h1>

         <div className="tinderCards__cardContainer">

            {people.map(person => (
               <TinderCard
                  className="swipe"
                  key={person.name}
                  // (1): By giving it a key it allows React to efficiently re-render a LIST.
                  // (2): It makes your app super fast.

                  preventSwipe= {['up', 'down']}
               >
                  <div
                     style={{ backgroundImage: `url(${person.url})`}}
                     className="card"
                  >
                     <h3 className="name">{person.name}</h3>    
                  </div>

               </TinderCard>
            ))}

         </div> 
      </div>
      
   );
}

export default ProfileCards
