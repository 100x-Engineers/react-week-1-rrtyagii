import LoginHeader from "./LoginHeader";
import Button from "../Button/Button";

import React from 'react'

function LoginMain() {
    
  return (
    <>
      <LoginHeader />
      <article className="flex flex-col w-24.375rem items-center gap-10 flex-shrink-0 px-7 mt-44">
        <section className="felx flex-col items-start gap-3 self-stretch">
          <div className="w-[20.875rem] text-neutral-50 font-inter font-extrabold leading-normal text-3xl self-stretch">
          Happening now
          </div>
          <div className="text-neutral-50 font-inter text-base font-medium leading-normal w-[5.25rem] flex items-start mt-3">
          Join today.
          </div>
        </section>

        <Button type="secondary">
          Create a new Account
        </Button>

        <section className="flex flex-row text-neutral-50 justify-center items-center gap-1 self-stretch">
          <div className="w-80 h-[0.0625rem] bg-neutral-700" />
          <div className="font-Chirp font-normal leading-normal text-center">or</div>
          <div className="w-80 h-[0.0625rem] bg-neutral-700" />
        </section>

        <section className="flex flex-col items-start gap-5 self-stretch">
          <div className="text-neutral-50 font-inter text-[0.9375rem] font-normal leading-normal">Already have an account?</div>
        </section>

        <Button type="primary" variant="outline">
          Sign up
        </Button>
      </article>
    </>  
  )
}

export default LoginMain