import React from 'react'
import PropTypes from 'prop-types'
import Logo100 from "../../images/login-100.svg"; 
import LogoX from "../../images/login-group-27162.svg"

export default function LoginHeader() {
  return (
    <>
      <header className="flex flex-col shrink-0 gap-y-3 sm:gap-y-4 md:gap-y-5 lg:gap-y-6 xl:gap-y-7">
          <section id="100x-group" className="flex px-4 py-3 justify-center items-center gap-0 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8">
              <img className="w-[2.56013rem] h-[1.12663rem] fill-neutral-50 sm:w-[3rem] sm:h-[1.5rem] md:w-[8.5rem] md:h-[4rem] lg:w-[10rem] lg:h-[10rem] xl:w-[14.5rem] xl:h-[14rem]" src={Logo100} alt="100" />
              <img className="sm:w-[2rem] md:w-[2.5rem] lg:w-[3rem] xl:w-[3.5rem]" src={LogoX} alt="x" />
          </section>
      </header>
    </>
  ); 
};