import React from 'react'
import CustomSwitch from './CustomSwitch'

const UpcomingWorkourCard = (props) => {
    const  { title, time, imagePath } = props.items;
    return (
        <div className='w-full h-16 boxShadow rounded-xl my-3 flex items-center px-2'>
            <div className='w-12 aspect-square bg-slate-300 rounded-full mx-2'>
                <img src={imagePath} alt="" />
            </div>
            <div className='h-9 w-60% flex flex-grow flex-col justify-between'>
                <h1 className='font-medium text-gray-700 text-[12px]'>{title}</h1>
                <h6 className='font-medium text-gray-500 text-[10px]'>{time}</h6>
            </div>
            <CustomSwitch/>
            
        </div>
    )
}

export default UpcomingWorkourCard