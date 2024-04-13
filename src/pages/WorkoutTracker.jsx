import React from 'react'
import { ChevronLeft, TriangleAlert } from 'lucide-react';

import BarGraph from '../components/BarGraph'
import UpcomingWorkourCard from '../components/UpcomingWorkourCard';
import Menubar from '../components/Menubar';
import { useNavigate } from 'react-router-dom';

const data = [
  {
    title: "Full Body Workout",
    time: "Today 3pm",
    imagePath: "assets/ellipse-53@2x.png"
  },
  {
    title: "Upper Body Workout",
    time: "4 Feb, 3:30 pm",
    imagePath: "assets/ellipse-54@2x.png"
  },
]

const WorkoutTracker = () => {
  const navigate = useNavigate();

  const moveToPath = () => {
    navigate("/goals")
  }

  return (
    <div className='main_container relative'>
      <div className='w-full flex'>
        <ChevronLeft onClick={moveToPath} className='back_arrow' size={20} strokeWidth={1} />
        <h1 className='font-medium mx-auto'>Workout Tracker</h1>
      </div>
      <BarGraph />
      <div className='alertWithIcon gradientBg my-3'>
        <TriangleAlert size={35} className='mx-2' color='#718dff' />
        <p className='text-sm text-gray-700'>You have burned fewer calories than yesterday. Time to get moving!</p>
      </div>
      <div className='w-full flex_between'>
        <h1 className='text_primary my-3'>Upcoming Workout</h1>
        <p className='text_secondary cursor-pointer'>see more</p>
      </div>
      {
        data.map((item, index) =>
          <UpcomingWorkourCard key={index} items={item} />
        )
      }
      <h1 className='text_primary my-3'>What do you want to train</h1>
      <div className='w-full h-32 bg-customPurpleBlueLight rounded-xl flex_between px-6 py-2'>
        <div className='flex flex-col text-xs font-medium text-gray-700'>
          <h2 className='my-1'>Full body Workout</h2>
          <h2 className='my-1'>Arms</h2>
          <h2 className='my-1'>Chest</h2>
        </div>
        <div className='w-24 aspect-square rounded-full'>
          <img src="assets/ellipse-55@2x.png" alt="" />
        </div>
      </div>
      <Menubar btnClickPath="/workout_schedule" />
    </div>
  )
}

export default WorkoutTracker