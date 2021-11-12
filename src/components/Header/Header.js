import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import "../Header/header.css"
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import IconButton from '@mui/material/IconButton';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



function Header({ backButton }) {

   const history = useHistory();

   return (
      <div className="header">

         {backButton ? (
            <IconButton onClick={() => history.replace(backButton)}>
               <ArrowBackIcon className="header__icon" fontSize="large" />
            </IconButton>   
         ) : (
         
         <Link to="/profileSection">       
            <IconButton>
               <PersonIcon className="header__icon" fontSize="large" />
            </IconButton>
         </Link>
               
         )}
         

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
