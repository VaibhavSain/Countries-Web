import arrowIcon from '../assets/arrow.svg'
import { useNavigate } from 'react-router-dom'
function BackButton() {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate("/")} className='flex shadow-sm shadow-gray-400 cursor-pointer absolute top-40 left-24 h-10 rounded-lg w-40 bg-white   items-center gap-2 justify-center'>
            <img className='h-6' src={arrowIcon} />
            <span className='text-lg'>Back</span>
        </button>
    )
}

export default BackButton