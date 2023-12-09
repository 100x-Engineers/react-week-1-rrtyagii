import React from 'react'
import AddContentIcon from '../../assets/content-content-add.svg';
import PropTypes from 'prop-types';

export default function AddContent({ onClick}) {
  return (
    // Adjust the bottom-20 to whatever value positions the button correctly above the navigation tab
    <button className="fixed bottom-20 left-[56rem] z-10 inline-flex items-center justify-center w-16 h-16 rounded-full bg-twitter-blue-default shadow-lc">
      <img src={AddContentIcon} alt="Add Content" className="w-8 h-8"/>
    </button>
  )
}


AddContent.propTypes = {
  onClick: PropTypes.func.isRequired,
};