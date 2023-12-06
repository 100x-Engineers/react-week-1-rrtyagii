import React from 'react'; 
import Input from '../../components/Input/Input'; 
import PageHeader from '../../components/Page Header/PageHeader';
import Button from '../../components/Button/Button';

export default function SignUpStep4() {
    return (
    <>
    <section className="flex flex-col items-start gap-y-4 shrink-0 pt-0 px-1.24338rem pb-5 rounded-2xl bg-neutral-1000 text-neutral-50">
        <PageHeader showCloseButton={true}>
            Step 4 of 4
        </PageHeader>

        <div className="pt-3 flex flex-col items-start gap-2 self-stretch">
            <h3 className="font-inter font-bold text-2xl leading-normal">
                You'll need a password
            </h3>
            <p className="self-stretch text-neutral-500 font-inter text-sm font-normal leading-normal">
                Make sure it's 8 characters or more.
            </p>
        </div>

        <form className="flex flex-col pt-6 gap-10 items-start w-full">
            <div className="flex flex-col w-full">
                <Input type="password" onChange={()=>{}} width='w-full' maxLength="6" pattern='[0-9]{6}'  autoComplete="one-time-code">
                    Password
                </Input>
            </div>

            <div className="flex flex-col items-center gap-3 flex-grow flex-shrink-0 basis-0 pt-56 w-full">
                <Button 
                    type='secondary' 
                    variant='solid'
                    width="w-72"
                    padding="px-6 py-3"
                >
                    Next
                </Button>
            </div>
        </form>
    </section>
    </>
  )
}
