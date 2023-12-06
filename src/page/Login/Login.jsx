import LoginMain from '../../components/Login/LoginMain'; 
import PageHeader from '../../components/Page Header/PageHeader';

import React from 'react'

export default function Login() {
  return (
    <>
    <div className='flex flex-col border-x border-solid border-neutral-500 w-24.375rem'>
      <PageHeader loginPage={true}/>
      <LoginMain />
    </div>
    </>
  )
}


