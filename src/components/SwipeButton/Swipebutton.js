import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

import './swipebutton.css';
import { ThumbsUpDown } from '@mui/icons-material';

const Swipebutton = () => {
   return (
      <div className="swipeButtons">
         <ThumbUpIcon className="btn" fontSize="large" />
         <ThumbDownIcon className="btn" fontSize="large" />
      </div>
   );
};

export default Swipebutton;
