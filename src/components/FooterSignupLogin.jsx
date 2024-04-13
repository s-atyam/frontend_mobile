import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom';

const FooterSignupLogin = (props) => {
    const { btnClickPath, btnName, text, link  } = props;
    const navigate = useNavigate();

    const handleClick = useCallback(() => {
        // something to do
        navigate(btnClickPath);
    }, [navigate]);
  return (
    <div className='mt-auto w-full h-fit rounded-lg'>
        <button onClick={handleClick} className='w-full rounded-xl [background:linear-gradient(270deg,_#7b91ff,_#95beff)] text-white h-10 font-medium'>{btnName}</button>
        <h6 className='text_with_line text_secondary my-5'>Or</h6>
        <div className='w-full h-12 flex_center'>
            <button className='w-10 aspect-square border border-gray-400 rounded-md flex_center mr-2'>
                <img src="assets/flatcoloriconsgoogle.svg" alt="" />
            </button>
            <button className='w-10 aspect-square border border-gray-400 rounded-md flex_center ml-2'>
                <img src="assets/vector-1.svg" alt="" />
            </button>
        </div>
        <p className='w-full text-center my-4 text_small'>{text} <span> {link}</span></p>

    </div>
  )
}

export default FooterSignupLogin