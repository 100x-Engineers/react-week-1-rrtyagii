import React from 'react'
import PropTypes from 'prop-types';

export default function SocialStats({ number, text }){
  return (
   <>
     <div className="flex items-center gap-1">
        <div className="text-neutral-50 font-Inter font-normal leading-normal text-base">
            {number}
        </div>

        <div className="text-neutral-500 font-Inter font-normal leading-normal text-base">
            {text}
        </div>
    </div>
   </>
  ); 
};

SocialStats.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string,
};