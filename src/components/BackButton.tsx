import arrowIcon from '../assets/arrow.svg'

function BackButton() {
    return (
        <button className='flex absolute top-[10rem] left-[6rem] h-[2.50rem] rounded-lg w-[10rem] bg-white left-[6rem]  items-center gap-2 justify-center'>
            <img className='h-[1.50rem]' src={arrowIcon} />
            <span className='text-lg'>Back</span>
        </button>
    )
}

export default BackButton