import arrowIcon from '../assets/arrow.svg'
import { useNavigate } from 'react-router-dom'
function BackButton({ mode }) {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate("/")} className={`flex shadow-sm shadow-gray-400 cursor-pointer absolute top-40 left-24 h-10 rounded-lg w-40 ${mode === 'bg-[#fafafa]' ? 'bg-white' : 'bg-gray-700'}    items-center gap-2 justify-center`}>
            <img className='h-6' src={arrowIcon} />
            <span className='text-lg'>Back</span>
        </button>
    )
}

export default BackButton