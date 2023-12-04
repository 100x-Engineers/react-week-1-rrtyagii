import React from 'react'; 
import Input from '../../components/Input/Input'; 
import PageHeader from '../../components/Page Header/PageHeader';
import Button from '../../components/Button/Button';

export default function SignUpStep2() {
  return (
    <>
    <section className="flex flex-col items-start gap-3 shrink-0 pt-0 px-1.24338rem pb-5 rounded-2xl bg-neutral-1000 text-neutral-50">
        <PageHeader showBackButton={false} loginPage={false} showCloseButton={true}>
            Step 2 of 4
        </PageHeader>

        <h3 className="flex flex-col self-stretch items-start font-inter font-bold text-2xl leading-normal">
            Create your account
        </h3>

        <form className="flex flex-col gap-5 self-stretch items-start"> 
            <Input type="text" onChange={()=>{}} value='' width="w-72" >
                Name
            </Input>

            <Input type="email" onChange={()=>{}} value='' width="w-72">
                Email
            </Input>

            <Input type="text" onChange={()=>{}} value='' width="w-72">
                Date of Birth
            </Input>

            <div className="flex flex-col items-center gap-3 flex-grow flex-shrink-0 basis-0 pt-56">
                <Button 
                    type='primary' 
                    variant='solid'
                    width="w-72"
                    padding="px-6 py-4"
                >
                    Sign Up
                </Button>
            </div>
        </form>
    </section>
    </>
  )
}
