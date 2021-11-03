import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import './swipebutton.css';

const Swipebutton = () => {
   
   return (
      <div className="swipeButtons">
         <ThumbDownIcon className="btn" fontSize="large" />
         <ThumbUpIcon className="btn" fontSize="large" />
      </div>
   );

};


export default Swipebutton;
