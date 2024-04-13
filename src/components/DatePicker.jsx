import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'

const day = ["Sun", "Mon", "Tue", "Wed", "Thu"];

const DatePicker = () => {
    const [selected, setSelected] = useState(1);
    
    const handleClick = (option) => {
        setSelected(option)
    }

    return (
        <div className='w-full h-28 rounded-lg my-3 flex flex-col'>
            <div className='w-2/5 flex_between mx-auto'>
                <ChevronLeft className='cursor-pointer' size={24} strokeWidth={1} />
                <h1 className='font-medium text-sm'>Feb 2024</h1>
                <ChevronRight className='cursor-pointer' size={24} strokeWidth={1} />
            </div>
            <div className='w-full h-20 my-auto flex_between px-5'>
                {
                    day.map((value,index) =>
                        <div key={index} onClick={()=>{handleClick(index)}} className={`cursor-pointer flex_center flex-col rounded-lg w-14 h-16 text-gray-700 ${selected===index?"gradientBg text-white":""}`}>
                            <h6 className='text-[9px] font-medium'>{value}</h6>
                            <h1 className='text-lg font-medium'>{index+5}</h1>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default DatePicker