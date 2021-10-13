import React from 'react';
import "../Header/header.css"
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import  IconButton  from '@mui/material/IconButton';


function Header() {
   return (
      <div className="header">

         <IconButton>
            <PersonIcon className="header__icon" fontSize="large" />
         </IconButton>
         

         {/* Here goes logo img: keep the class same. */}
         <div className="header__logo">
            <span>S</span>ixty <span>S</span>econds
         </div>

         <IconButton>
            <MessageIcon className="header__icon" fontSize="large"/>
         </IconButton>

      </div>
   )
}

export default Header
