import { Home, Image, Search, Camera, User } from 'lucide-react'
import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Menubar = (props) => {
  const { btnClickPath } = props;
  const navigate = useNavigate();

  const [selected, setSelected] = useState('image');

  const handleClick = useCallback(() => {
    navigate(btnClickPath);
  }, [navigate]);

  const handleSelect = (option) => {
    setSelected(option);
  }
  return (
    <div className='absolute w-[96%] bottom-0 h-20 bg-white flex_between px-2 text-gray-500'>
      
      <Home onClick={() => { handleSelect("home") }} className={`cursor-pointer ${selected === 'home' ? "text-customPurpleBlue" : ""}`} strokeWidth={1} />

      <Image onClick={() => { handleSelect("image") }} className={`cursor-pointer ${selected === 'image' ? "text-customPurpleBlue" : ""}`} strokeWidth={1} />

      <div onClick={handleClick} className='relative bottom-10 [background:linear-gradient(150deg,_#ffffff,#95beff)] p-4 rounded-full cursor-pointer text-white boxShadow'>
        <Search strokeWidth={1} />
      </div>

      <Camera onClick={() => { handleSelect("camera") }} className={`cursor-pointer ${selected === 'camera' ? "text-customPurpleBlue" : ""}`} strokeWidth={1} />

      <User onClick={() => { handleSelect("user") }} className={`cursor-pointer ${selected === 'user' ? "text-customPurpleBlue" : ""}`} strokeWidth={1} />
    </div>
  )
}

export default Menubar