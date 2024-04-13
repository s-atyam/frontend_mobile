import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import FooterSignupLogin from '../components/FooterSignupLogin'

const Login = () => {
  const navigate = useNavigate();

  const moveToPath = () => {
    navigate("/signup")
  }
  return (
    <div className='main_container'>
      <div className='w-full flex my-3'>
        <ChevronLeft onClick={moveToPath} className='back_arrow' size={20} strokeWidth={1} />
        <h1 className='text_primary mx-5'>Welcome Back</h1>
      </div>
      <input className='input_field text_primary' placeholder='Email' type="email" />
      <input className='input_field text_primary' placeholder='Password' type="password" />
      <p className='underline my-2 cursor-pointer text_small'> Forgot your password?</p>
      <FooterSignupLogin btnClickPath="/goals" btnName="Sign In" text="Don't have an account yet?" link="Create an account" />
    </div>
  )
}

export default Login