import React from 'react'; 
import Input from '../../components/Input/Input'; 
import PageHeader from '../../components/Page Header/PageHeader';
import Button from '../../components/Button/Button';

export default function SignUpStep3() {
    return (
    <>
    <section className="flex flex-col items-start gap-y-4 shrink-0 pt-0 px-1.24338rem pb-5 rounded-2xl bg-neutral-1000 text-neutral-50">
        <PageHeader showCloseButton={true}>
            Step 3 of 4
        </PageHeader>

        <div className="pt-3 flex flex-col items-start gap-2 self-stretch">
            <h3 className="font-inter font-bold text-2xl leading-normal">
                We sent you a code
            </h3>
            <p className="self-stretch text-neutral-500 font-inter text-sm font-normal leading-normal">
                Enter it below to verify janedoe@gmail.com
            </p>
        </div>

        <form className="flex flex-col pt-6 gap-10 items-start w-full">
            <div className="flex flex-col w-full">
                <Input type="text" onChange={()=>{}} width='w-full' maxLength="6" pattern='[0-9]{6}'  autoComplete="one-time-code">
                    Verification Code
                </Input>
                <div className="self-end">
                    <a href="#" className="text-twitter-blue-default font-inter text-sm font-normal leading-normal">
                        Didn't receive a code?
                    </a>
                </div>
            </div>

            <div className="flex flex-col items-center gap-3 flex-grow flex-shrink-0 basis-0 pt-56">
                <Button 
                    type='secondary' 
                    variant='solid'
                    width="w-72"
                    padding="px-6 py-4"
                >
                    Next
                </Button>
            </div>
        </form>
    </section>
    </>
  )
}
