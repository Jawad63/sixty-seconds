import React from 'react';
import "../Header/header.css"
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';


function Header() {
   return (
      <div className="header">
         <PersonIcon />
         <h2>Here comes the card (img)</h2>
         <MessageIcon />
      </div>
   )
}

export default Header
