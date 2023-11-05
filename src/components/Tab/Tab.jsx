import React from 'react'

export default function Tab({children}) {
  return (
    <>
        <nav className="w-full flex px-20 py-5 justify-center items-center self-stretch border-b border-b-neutral-700 gap-24">
            <button className="relative font-Inter text-base leading-normal font-medium text-neutral-500 group focus:text-neutral-50">
                For you
                <div className="absolute block w-15 h-1 rounded-4xl bg-twitter-blue-default invisible group-focus:visible mt-4" />
            </button>
        <button className="relative font-Inter text-base leading-normal font-medium text-neutral-500 group focus:text-neutral-50">
            Following
            <div className="absolute block w-[4.5rem] h-1 rounded-4xl bg-twitter-blue-default invisible group-focus:visible mt-4" />
        </button>
        </nav>
    </>
  ); 
}; 


{/* <nav className="w-full flex px-20 py-5 justify-center items-center self-stretch border-b border-b-neutral-700 gap-24">
<button className="relative font-Inter text-base leading-normal font-medium text-neutral-500 group focus:text-neutral-50">
    For you
    <div className="absolute block w-15 h-1 rounded-4xl bg-twitter-blue-default invisible group-focus:visible mt-4" />
</button>
<button className="relative font-Inter text-base leading-normal font-medium text-neutral-500 group focus:text-neutral-50">
Following
<div className="absolute block w-[4.5rem] h-1 rounded-4xl bg-twitter-blue-default invisible group-focus:visible mt-4" />
</button>
</nav> */}