import React, { useState } from 'react'
import Input from './Input';
import Button from '../Button/Button';

export default function Onboarding() {
    const [validated, setValidated] = useState({
        name: false, 
        email: false,
        month: false, 
        day: false,
        year: false, 
    }); 
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        month: '',
        day: '', 
        year:'',  
    });

    const allFilledFilled= Object.values(formData).every(field => field.trim() !== '');
    
    const handleInputChange = (event)=>{
        const {name, value} = event.target;
        setFormData(prevState=>({
            ...prevState, 
            [name]: value
        })); 
    }; 

    const handleFormSubmit=()=>{
    }


  return (
    <>
    <section className="flex flex-col items-start gap-3 shrink-0 pt-0 px-1.24338rem pb-5 rounded-2xl bg-neutral-1000 text-neutral-50">
        <form className="flex flex-col gap-5 self-stretch items-start" onSubmit={handleFormSubmit}> 
            <h3 className="font-inter font-bold text-2xl leading-normal">
                Create your account
            </h3>

            <Input type="text" onChange={handleInputChange} value={formData.name} width="w-72" >
                Name
            </Input>

            <Input type="email" onChange={handleInputChange} value={formData.email} width="w-[18.3rem]">
                Email
            </Input>
            
            {
                !validationStatus && (
                    <>
                    <div className="flex flex-col items-start gap-2 self-stretch">
                        <label htmlFor="dob" className="text-base font-bold font-inter leading-normal text-neutral-50">
                            Date of birth
                        </label>
                        <span id="dob" className="text-secondary-gray font-inter text-sm font-normal leading-normal">
                            This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
                        </span>
                    </div>
                    <div className="flex flex-row gap-3 self-stretch">
                        <Input type="select" onChange={handleInputChange} value={formData.month} options={monthOptions}>Month</Input>
                        <Input type="select" onChange={handleInputChange} value={formData.day} options={dayOptions}>Day</Input>
                        <Input type="select" onChange={handleInputChange} value={formData.year} options={yearOptions}>Year</Input>
                    </div>
                    </>
                )
            }

            {
                validationStatus && (
                    <Input type="date" width="w-[18.3rem]">
                        Date of Birth
                    </Input>
                )
            }

            <div className="flex flex-col pt-48 items-center gap-3 flex-grow flex-shrink-0 basis-0">
                <Button type='secondary' variant='solid' isDisabled={!allFilledFilled}>
                    Create account 
                </Button>
            </div>

            {
                validationStatus && (
                <div className="flex flex-col pt-36 items-center gap-3 flex-grow flex-shrink-0 basis-0">
                    <Button type='primary' variant='solid'>
                        Sign Up
                    </Button>
                </div>)
            }

        </form>
    </section>
    </>
  )
}
