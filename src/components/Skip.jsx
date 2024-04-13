import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Skip = (props) => {
    const { path } = props;
    const navigate = useNavigate();

    const handleSkip = useCallback(() => {
        navigate(path);
    }, [navigate]);

  return (
    <div onClick={handleSkip} className='text-right w-full h-6 rounded-lg text-customPurpleBlue underline px-2 cursor-pointer'>
        Skip
    </div>
  )
}

export default Skip