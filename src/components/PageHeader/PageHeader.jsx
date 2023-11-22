import React from 'react'
import PropTypes from 'prop-types'
import Logo100 from "../../images/login-100.svg"; 
import LogoX from "../../images/login-group-27162.svg"
import Close from "../../images/create-account-1-signup-close.svg";
import Back from "../../images/profile-edit-1-arrow-left.svg";

function CloseButton({onClick}){
  return (
    <>
    <button onClick={onClick}>
      <img className="w-6 h-6" src={Close} alt="close"/>
    </button>
    </>
  )
}

function BackButton({onClick}){
  return (
    <>
    <button onClick={onClick}>
      <img className="w-6 h-6" src={Back} alt="close"/>
    </button>
    </>
  )
}

function LoginHeader(){
  return( 
  <>
  <section id="100x-group" className="flex px-4 py-3 justify-center items-center gap-0">
    <img className="w-[2.56013rem] h-[1.12663rem] fill-neutral-50" src={Logo100} alt={100} />
    <img src={LogoX} alt="x" />
  </section>
  </>
  ); 
}

export default function PageHeader({
  children, 
  showBackButton=false,
   ...rest})
{
  const baseClasses = `flex flex-row px-4 py-3 items-center`;
  const buttonClasses = `${!rest.buttonChildren ? "justify-start gap-4" : "justify-between"}` ; 
  const textClasses = `font-inter text-[0.9375rem] font-bold leading-normal text-neutral-50`; 

  return (
    <>
      {rest.loginPage && <LoginHeader />}
      {!rest.loginPage && (
        <div className={`${baseClasses} ${!rest.buttonChildren ? textClasses : buttonClasses}`}>
          {rest.showCloseButton && <CloseButton />}
          {showBackButton && <BackButton />}
          {children}
        </div>
      )}
    </>
  ); 
};