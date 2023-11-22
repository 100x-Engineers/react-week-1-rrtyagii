import Button from "../Button/Button";
import Divider from "./Divider";

import React from 'react'

export default function LoginMain() {

  return (
    <>
      <article className="flex flex-col items-center gap-10 flex-shrink-0 px-7 mt-44">
        
        <section className="felx flex-col items-start gap-3 self-stretch">
          <div className=" text-neutral-50 font-inter font-extrabold leading-normal text-3xl self-stretch">
          Happening now
          </div>
          <div className="text-neutral-50 font-inter text-base font-medium leading-normal  flex items-start mt-3">
          Join today.
          </div>
        </section>

        <Button type="secondary">
          Create a new Account
        </Button>

        <Divider text="or" orientation="horizontal"/>

        <section className="flex flex-col items-start gap-5 self-stretch">
          <div className="text-neutral-50 font-inter text-base font-normal leading-4">Already have an account?</div>
        </section>

        <Button type="primary" variant="outline">
          Sign up
        </Button>
      </article>
    </>  
  ); 
}; 