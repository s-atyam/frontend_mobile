import React, { useState } from 'react'

const CustomSwitch = () => {
    const [isChecked, setIsChecked] = useState(true)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }
    return (
        <label className='autoSaverSwitch relative inline-flex cursor-pointer select-none items-center m-2'>
            <input
                type='checkbox'
                name='autoSaver'
                className='sr-only'
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <span
                className={`slider mr-3 flex h-[21px] w-[40px] items-center rounded-full p-[0.2rem] duration-200 ${!isChecked ? 'bg-[#CCCCCE]' : 'bg-customPurpleBlue'
                    }`}
            >
                <span
                    className={`dot h-[16px] w-[16px] rounded-full bg-white duration-200 ${!isChecked ? 'translate-x-[1.1rem]' : ''
                        }`}
                ></span>
            </span>
        </label>
    )
}

export default CustomSwitch