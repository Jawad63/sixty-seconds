import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './cards.css';


function ProfileCards() {

   const [people, setPeople] = useState([ 

      // here i have the list of people to swipe through. It will be in an array: They will have an image and a name.

      {
         name: 'Dude One',
         url: '../../assets/dudeone.jpg',
      },
   
      {
         name: 'Dude Two',
         url: '../../assets/dudetwo.jpg',
      },
   
   ]); 

   return (
      <div>
         <h1>This is card section</h1>

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
                     style={{ backgroundImage: `url(${person.url})`}}
                     className="card"
                  >
                     <h3>{person.name}</h3>
                  </div>
               </TinderCard>
            ))}
         </div>
      </div>
   );
}

export default ProfileCards
