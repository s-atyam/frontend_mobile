import React from 'react'
import Skip from '../components/Skip'
import { useNavigate } from "react-router-dom";

const Page1 = () => {
    const navigate = useNavigate();

    const moveToPath = () => {
        navigate("/page2")
    }

  return (
    <div className='main_container'>
        <Skip path="/page2"/>
        <div className='w-full h-96 flex_center'>
            <img  className='w-72' src="assets/image-13@2x.png" alt="" />
        </div>
        <h1 className='text_primary'>Track Your Goal</h1>
        <p className='text_secondary my-3'>Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals</p>
        <img onClick={moveToPath} className='w-16 relative top-20 left-[17rem] cursor-pointer' src="assets/group-1.svg" alt="" />
    </div>
  )
}

export default Page1