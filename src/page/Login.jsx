import LoginMain from '../components/Login/LoginMain'; 
import PageHeader from '../components/PageHeader/PageHeader';


import React from 'react'

export default function Login() {
  return (
    <>
        <PageHeader loginPage={true}/>
        <LoginMain />
    </>
  )
}


