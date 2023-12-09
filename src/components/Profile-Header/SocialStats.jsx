import React from 'react'
import PropTypes from 'prop-types';

export const SocialStats = ({ number, text }) => {
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
  number: PropTypes.string,
  text: PropTypes.string,
};