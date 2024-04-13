import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import FooterSignupLogin from '../components/FooterSignupLogin'

const Signup = () => {
  const navigate = useNavigate();

  const moveToPath = () => {
    navigate("/page2")
  }
  return (
    <form className='main_container'>
      <div className='w-full flex my-3'>
        <ChevronLeft onClick={moveToPath} className='back_arrow' size={20} strokeWidth={1} />
        <h1 className='text_primary mx-5'>Create an account</h1>
      </div>
      <input className='input_field text_primary' placeholder='First Name' type="text" />
      <input className='input_field text_primary' placeholder='Last Name' type="text" />
      <input className='input_field text_primary' placeholder='Email' type="email" />
      <input className='input_field text_primary' placeholder='Password' type="password" />
      <div className='flex my-3'>
        <input className='mx-2' type="checkbox" name="" id="" />
        <p className='text-xs text-gray-500'>By proceeding, I agree to all <span>T&C</span> and <span>Privacy Policy</span></p>
      </div>
      <FooterSignupLogin btnClickPath="/login" btnName="Create an Account" text="Already have an account?" link="Login" />
    </form>
  )
}

export default Signup