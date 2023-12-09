import React from 'react';

import CloseIcon from '../../assets/create-account-1-signup-close.svg';
import BackIcon from '../../assets/profile-edit-1-arrow-left.svg';
import Logo100 from '../../assets/login-100.svg'; 
import LogoX from '../../assets/login-group-27162.svg';

import PropTypes from 'prop-types';

function IconButton({ icon, alt, onClick }) {
  return (
    <button onClick={onClick} className="z-10">
      <img src={icon} alt={alt} className="w-6 h-6" />
    </button>
  );
}

function LoginHeader(){
  return( 
  <>
  <div id="100x-group" className="flex gap-0 mx-auto">
    <img className="w-[2.56013rem] h-[1.12663rem] fill-neutral-50" src={Logo100} alt={100} />
    <img src={LogoX} alt="x" />
  </div>
  </>
  ); 
}

export default function PageHeader({
  children,
  showBackButton = false,
  onBackClick,
  showCloseButton = false,
  onCloseClick,
  actionButton,
  loginPage = false,
}) {
  return (
    <section className={`flex items-center ${loginPage ? 'justify-center' : 'justify-between'} w-full py-3 bg-black text-white font-inter font-bold`}>

      {loginPage && <LoginHeader/>}
      <>
        {showBackButton && (<IconButton icon={BackIcon} alt="Back" onClick={onBackClick} />)}
        {showCloseButton && (<IconButton icon={CloseIcon} alt="Close" onClick={onCloseClick} />)}

        <div className="flex-grow">
          <div className="w-full text-center">{children}</div>
        </div>

        {actionButton}
      </>
    </section>
  );
};

PageHeader.propTypes = {
  children: PropTypes.node,
  showBackButton: PropTypes.bool,
  onBackClick: PropTypes.func,
  showCloseButton: PropTypes.bool,
  onCloseClick: PropTypes.func,
  actionButton: PropTypes.node,
  loginPage: PropTypes.bool,
};