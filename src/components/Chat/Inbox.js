import React from 'react'
import Dm from './Dm'


function Inbox() {
   return (
      <div className="chat">
         <h1>Send a message :)</h1>

         <Dm
            name="Kenny"
            message="Just saw your video. I would like to donate €20 to your cause!"
            timestamp="1 hour ago"
            profilePic="https://img.24baby.nl/2021/01/b5b79efa-vruchtbaarheid-man.jpg"
         />


         <Dm
            name="Alina"
            message="Heyy!"
            timestamp="30 minutes ago"
            profilePic="https://image.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg"
         />

      </div>
   )
}

export default Inbox