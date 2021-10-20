import React from 'react';
import { Link } from 'react-router-dom';
import "../Header/header.css"
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import IconButton from '@mui/material/IconButton';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';



function Header() {
   return (
      <div className="header">

         <IconButton>
            <PersonIcon className="header__icon" fontSize="large" />
         </IconButton>
         

         {/* Here goes logo img: keep the class same. */}
         <Link to="/">
            <MonetizationOnIcon className="header__icon" fontSize="large"/>
         </Link>

         <Link to="/chat" className="link">
            <IconButton>
               <MessageIcon className="header__icon" fontSize="large"/>
            </IconButton>
         </Link>

      </div>
   )
}

export default Header
