import React from 'react'
import Dm from './Dm'
import './chat.css'


function Chat() {
   return (
      <div className="chat">
         <h1>Send a message :)</h1>

         <Dm
            name="Garry"
            message="yo how are you man !"
            timestamp="40 seconds ago"
            profilePic="..."
         />

         <Dm
            name="Jason"
            message="give me your money"
            timestamp="20 minutes ago"
            profilePic="..."
         />

         <Dm
            name="Kenny"
            message="nice video"
            timestamp="1 hour ago"
            profilePic="..."
         />


         <Dm
            name="Alina"
            message="nope!"
            timestamp="50 minutes ago"
            profilePic="..."
         />

      </div>
   )
}

export default Chat
