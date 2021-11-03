import React from 'react'
import Dm from './Dm'
import './chat.css'


function Chat() {
   return (
      <div className="chat">
         <h1>Send a message :)</h1>

         <Dm
            name="Kenny"
            message="Just saw your video. I would like to donate €20 to your cause!"
            timestamp="1 hour ago"
            profilePic="https://www.incimages.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg"
         />


         <Dm
            name="Alina"
            message="Heyy!"
            timestamp="30 minutes ago"
            profilePic="https://www.g20.org/wp-content/uploads/2021/01/people.jpg"
         />

      </div>
   )
}

export default Chat
