import React from 'react';
import "../Header/header.css"
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import AppleIcon from '@mui/icons-material/Apple';


const Header = () => {
   return (
      <div className="header">
         <PersonIcon />
         <h1 className="header__logo">
            <span>S</span>ixty <span>S</span>econds
         </h1>
         <MessageIcon />
      </div>
   )
}

export default Header
