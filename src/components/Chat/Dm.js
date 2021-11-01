import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import './dm.css'


function Dm({ name, message, timestamp, profilePic }) {
   return (
      <Link to={`/chatScreen/${name}`}>
         <div className="dm">
            <Avatar className="dm__image" src={profilePic} />

            <div className="dm__details">
               <h2>{name}</h2>
               <p>{message}</p>
            </div>

            <p className="dm__timestamp">{timestamp}</p>

         </div>
      </Link>
   )
}

export default Dm;