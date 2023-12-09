import React from 'react'
import HomeIcon from '../../assets/home-icon.svg';
import UserHome from '../../assets/user-home.svg';

import PropTypes from 'prop-types';

export default function NavigationTab({onHomeClick, onUserHomeClick}) {
  return (
    <nav id="home-bar" className="fixed inset-x-0 bottom-0 z-10 flex max-w-lg mx-auto py-[1.125rem] px-6 justify-center items-center gap-10 border-t border-t-neutral-800 bg-neutral-1000">
      <button className="w-6 h-6" onClick={onHomeClick}>
        <img src={HomeIcon} alt="Home Icon" />
      </button>
      <button className="flex w-6 h-6 bg-cover bg-no-repeat bg-custom-position p-1 justify-center items-center" onClick={onUserHomeClick}>
        <img src={UserHome} alt="User Home" />
      </button>
    </nav>
  ); 
}

NavigationTab.propTypes = {
  onHomeClick: PropTypes.func,
  onUserHomeClick: PropTypes.func,
};
