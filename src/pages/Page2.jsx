import React from 'react'
import Skip from '../components/Skip'
import { useNavigate } from "react-router-dom";

const Page2 = () => {
    const navigate = useNavigate();

    const moveToPath = () => {
        navigate("/signup")
    }
  return (
    <div className='main_container'>
        <Skip path="/signup"/>
        <div className='w-full h-96 flex_center'>
            <img  className='w-72 ' src="assets/image-16@2x.png" alt="" />
        </div>
        <h1 className='text_primary'>Get Burn</h1>
        <p className='text_secondary my-3'>Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever</p>
        <img onClick={moveToPath} className='w-16 relative top-20 left-[17rem] cursor-pointer' src="assets/group-12.svg" alt="" />
    </div>
  )
}

export default Page2