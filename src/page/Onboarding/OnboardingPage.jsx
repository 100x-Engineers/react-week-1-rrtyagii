import OnboardingMain from '../../components/Onboarding/OnboardingMain'; 
import PageHeader from '../../components/Page Header/PageHeader';

import React from 'react'

export default function Login() {
  return (
    <>
    <div className='flex w-full flex-grow bg-neutral-1000 min-h-screen mx-auto max-w-lg flex-col border-x border-x-neutral-600'>
      <div className='mx-auto'>
        <PageHeader loginPage={true}/>
      </div>
      <OnboardingMain />
    </div>
    </>
  );
};

//flex w-full flex-grow bg-neutral-1000 min-h-screen mx-auto max-w-lg flex-col border-x border-x-neutral-600


//border-x border-solid border-neutral-500 w-24.375rem