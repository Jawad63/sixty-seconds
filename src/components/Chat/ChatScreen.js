import { Avatar } from '@mui/material';
import React, { useState }  from 'react'
import './chatscreen.css'

function ChatScreen() {
   const [input, setInput] = useState('');
   const [messages, setMessages] = useState([
      {
         name: 'Alina',
         image: '...',
         message: 'Heyy!'
      },

      {
         image: '...',
         message: 'Hello :)'
      },

      {
         name: 'Alina',
         image: '...',
         message: 'Just saw your video. I would like to donate €20 to your cause!'
      },

      {
         image: '...',
         message: 'Thank you so much!!'
      }

   ]);

   const handleSend = e => {
      e.preventDefault();

      setMessages([...messages, { message: input }]);
      setInput("");
   }

   return (
      <div className="chatScreen">
         {messages.map((info) => (
            info.name ? (
               <div className="chatScreen__message">
               <Avatar
                  className="chatScreen__image"
                  alt={info.name}
                  src={info.image}
               />
               <p className="chatScreen__text">{info.message}</p>
            </div>
            ) : (
               <div className="chatScreen__message">
                  <p className="chatScreen__textUser">{info.message}</p>
               </div>
            )
         ))}

         <form className="chatScreen__input">

            <input
               value={input}
               onChange={e => setInput(e.target.value)}
               className="chatScreen__inputField"
               placeholder="Messsage..."
               type="text"
            />
            <button
               onClick={handleSend}
               type="submit"
               className="chatScreen__inputButton">
               Send
            </button>

         </form>

      </div>
   );
}

export default ChatScreen;
