import React from "react";
import { Avatar } from "@mui/material";
import './dm.css'


function Dm({ name, message, timestamp, profilePic }) {
   return (
      <div className="dm">
         <Avatar className="dm__image" src={profilePic} />

         <div className="dm__details">
            <h2>{name}</h2>
            <p>{message}</p>
         </div>

         <p className="dm__timestamp">{timestamp}</p>

      </div>
   )
}

export default Dm;