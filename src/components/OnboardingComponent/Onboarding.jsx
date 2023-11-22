import React from 'react'
import Input from './Input';
import Button from '../Button/Button';

export default function Onboarding() {
    const monthOptions = [
        { value: '01', label: 'January' },
        { value: '02', label: 'February' },
        { value: '03', label: 'March' },
        { value: '04', label: 'April' },
        { value: '05', label: 'May' },
        { value: '06', label: 'June' },
        { value: '07', label: 'July' },
        { value: '08', label: 'August' },
        { value: '09', label: 'September' },
        { value: '10', label: 'October' },
        { value: '11', label: 'November' },
        { value: '12', label: 'December'}
    ];
  
    const dayOptions = Array.from({ length: 31 }, (_, i) => ({
        value: (i + 1).toString().padStart(2, '0'), // Ensuring two digits
        label: (i + 1).toString()
    }));
  
    const currentYear = new Date().getFullYear();
    const yearOptions = Array.from({ length: 121 }, (_, i) => ({
        value: (currentYear - i).toString(),
        label: (currentYear - i).toString()
    }));

  return (
    <>
    <section className="flex flex-col items-start gap-3 shrink-0 pt-0 px-1.24338rem pb-5 rounded-2xl bg-neutral-1000 text-neutral-50">
        <form className="flex flex-col gap-5 self-stretch items-start">
            <h3 className="font-inter font-bold text-2xl leading-normal">
                Create your account
            </h3>

            <Input type="text" width="w-72">
                Name
            </Input>

            <Input type="email" width="w-[18.3rem]">
                Email
            </Input>

            <div className="flex flex-col items-start gap-2 self-stretch">
                <label htmlFor="dob" className="text-base font-bold font-inter leading-normal text-neutral-50">
                    Date of birth
                </label>
                <span id="dob" className="text-secondary-gray font-inter text-sm font-normal leading-normal">
                    This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
                </span>
            </div>

            {/* <div className="flex flex-row gap-3 self-stretch"> import Chevron from "../../images/chevron-down.svg"; 
                <fieldset className="py-4 px-3 items-center gap-2.5 rounded-md border border-solid border-neutral-500 group focus-within:border-twitter-blue-default ">
                    <legend className="text-neutral-500 font-medium font-inter text-xs group-focus-within:text-twitter-blue-default">
                        <div className="px-1">
                            Month
                        </div>
                    </legend>
                    <div className="flex justify-around">
                        <input className="w-full peer font-normal font-inter text-xl text-neutral-100 border-none bg-transparent focus: outline-none placeholder:text-neutral-500" type="month" />
                    </div>
                </fieldset>

                <fieldset className="py-4 px-3 items-center gap-2.5 rounded-md border border-solid border-neutral-500 group focus-within:border-twitter-blue-default ">
                    <legend className="text-neutral-500 font-medium font-inter text-xs group-focus-within:text-twitter-blue-default">
                        <div className="px-1">
                            Day
                        </div>
                    </legend>
                    <div className="flex justify-around">
                        <input className="w-full peer font-normal font-inter text-xl deco text-neutral-100 border-none bg-transparent focus: outline-none placeholder:text-neutral-500 hide-arrows" type="number" min={1} max={31} />
                        <img className="visible" src={Chevron} alt="validation image" />
                    </div>
                </fieldset>

                <fieldset className="py-4 px-3 items-center gap-2.5 rounded-md border border-solid border-neutral-500 group focus-within:border-twitter-blue-default ">
                    <legend className="text-neutral-500 font-medium font-inter text-xs group-focus-within:text-twitter-blue-default">
                        <div className="px-1">
                            Year
                        </div>
                    </legend>
                    <div className="flex justify-around">
                        <input className="w-full peer font-normal font-inter text-xl text-neutral-100 border-none bg-transparent focus: outline-none placeholder:text-neutral-500 hide-arrows" type="number" min={1900} max={3000} />
                        <img className="visible" src={Chevron} alt="validation image" />
                    </div>
                </fieldset>
            </div> */}

{/* More options... */}
            <div className="flex flex-row gap-3 self-stretch">
                <Input type="select" options={monthOptions}>Month</Input>
                <Input type="select" options={dayOptions}>Day</Input>
                <Input type="select" options={yearOptions}>Year</Input>
            </div>

            <div className="flex flex-col pt-48 items-center gap-3 flex-grow flex-shrink-0 basis-0">
                <Button type='secondary' variant='solid'>
                    Create account 
                </Button>
            </div>
        </form>
    </section>
    </>
  )
}
