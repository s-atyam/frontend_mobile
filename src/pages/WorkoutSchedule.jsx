import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Plus } from 'lucide-react';
import DatePicker from '../components/DatePicker';
import Menubar from '../components/Menubar';

const timing = [ "06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM" ]

const WorkoutSchedule = () => {
    const navigate = useNavigate();

    const moveToPath = () => {
        navigate("/workout_tracker")
    }
    return (
        <div className='main_container relative'>
            <div className='w-full flex'>
                <ChevronLeft onClick={moveToPath} className='border bg-gray-200 rounded-sm cursor-pointer' size={20} strokeWidth={1} />
                <h1 className='font-medium mx-auto'>Workout Schedule</h1>
            </div>
            <DatePicker />
            <div className='w-full h-2/3'>
                {
                    timing.map((time,index)=> 
                        <h2 key={index} className='h-8 w-full border border-transparent border-b-gray-300 my-1 text-xs font-medium text-gray-700 py-1'>{time}</h2>
                    )
                }
            </div>
            <div className='absolute bottom-36 left-72 w-14 bg-purple-400 text-white aspect-square border flex_center rounded-full cursor-pointer'><Plus strokeWidth={1.5} /></div>
            <h2 className='absolute bottom-[28.3rem] left-40 w-fit px-2 bg-purple-400 text-white flex_center rounded-full cursor-pointer text-xs font-medium py-1'>Ab Workout, 7:30am</h2>
            <h2 className='absolute bottom-[24.4rem] left-20 w-fit px-2 bg-purple-400 text-white flex_center rounded-full cursor-pointer text-xs font-medium py-1'>Upper body Workout, 9pm</h2>
            {/* <h2 className='absolute bottom-56 left-20 w-fit px-2 bg-slate-100 text-gray-700 flex_center rounded-full cursor-pointer text-xs font-medium py-1'>Lower body Workout, 3pm</h2> */}
            <Menubar/>
        </div>
    )
}

export default WorkoutSchedule