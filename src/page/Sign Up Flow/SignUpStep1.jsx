import React, { useState } from 'react'
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import DatePicker from '../../components/DatePicker/DatePicker';
import PageHeader from '../../components/Page Header/PageHeader';

export default function SignUpStep1() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        month: '',
        day: '', 
        year:'',  
    });

  return (
    <>
    <section className="flex flex-col items-start gap-3 shrink-0 pt-0 px-1.24338rem pb-5 rounded-2xl bg-neutral-1000 text-neutral-50">
        <PageHeader showBackButton={false} loginPage={false} showCloseButton={true}>
            Step 1 of 4
        </PageHeader>

        <h3 className="flex flex-col pt-5 self-stretch items-start font-inter font-bold text-2xl leading-normal">
                Create your account
        </h3>

        <form className="flex flex-col gap-5 self-stretch items-start"> 

            <Input type="text" onChange={()=>{}} value={formData.name} width="w-72" >
                Name
            </Input>

            <Input type="email" onChange={()=>{}} value={formData.email} width="w-72">
                Email
            </Input>

            <div className="flex flex-col items-start gap-2 w-72">
                <p className="text-base font-bold font-inter leading-normal text-neutral-50">
                    Date of birth
                </p>
                <p className="text-secondary-gray font-inter text-sm font-normal leading-normal">
                    This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
                </p>
                <DatePicker />
            </div>

            <div className="flex flex-col items-center gap-3 flex-grow flex-shrink-0 basis-0 pt-56">
                <Button 
                    type='secondary' 
                    variant='solid'
                    width="w-72"
                    padding="px-6 py-3"
                >
                    Create account 
                </Button>
            </div>
        </form>
    </section>
    </>
  )
}
