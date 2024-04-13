import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const options = ['Weight Loss', 'Muscle Gain', 'Flexibility and Mobility', 'General Fitness', 'Event - specific training', 'Mindfulness and Mental Health']

const Goals = () => {
    const navigate = useNavigate();

    const moveToPath = (path) => {
        navigate(path)
    }

    return (
        <div className='main_container'>
            <div className='w-full flex my-3'>
                <ChevronLeft onClick={() => { moveToPath("/login") }} className='back_arrow' size={20} strokeWidth={1} />
                <h1 className='text_primary mx-auto'>What are your goals?</h1>
            </div>
            {
                options.map((option, index) =>
                    <div key={index} className='input_field flex_between'>
                        <p className='text-gray-700 font-medium'>{option}</p>
                        <input className='w-10' type="checkbox" name="" id="" />
                    </div>
                )
            }
            <button onClick={() => { moveToPath("/workout_tracker") }} className='btn mb-14 mt-auto'>Confirm</button>
        </div>
    )
}

export default Goals