import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import database from '../../firebase';
import './cards.css';


function ProfileCards() {

   // useState: people is the variable array and the function is setPeople:
   const [people, setPeople] = useState([]);

   // useEffect is a piece of code that runs based on a condition:
   useEffect(() => {
      const unsubscribe = database
         .collection("people")
         .onSnapshot((snapshot) =>
            setPeople(snapshot.docs.map((doc) => doc.data()))
      );

      return () => {
         // this is the clean up...
         unsubscribe();
      }

   }, []);

   return (
      <div>
         <h1>"Help Others, Make difference"</h1>

         <div className="tinderCards__cardContainer">
            {people.map(person => (
               <TinderCard
                  className="swipe"
                  key={person.name}
                  // (1): By giving it a key it allows React to efficiently 
                     // re-render a LIST.
                  // (2): It makes your app super fast.

                  preventSwipe= {['up', 'down']}
               >
                  <div
                     style={{ backgroundImage: `url(${people.url})`}}
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
