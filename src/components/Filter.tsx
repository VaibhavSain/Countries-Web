import searchIconLight from '../assets/magnifying-black.svg';
function Filter({ setSearch }) {
    return (
        <div className="h-16 relative top-6 bg-red-300 w-full ">
            <div className="h-12  flex flex-row items-center justify-evenly pl-4 absolute bg-[#ffffff] left-12 w-120 shadow-sm rounded-sm shadow-gray-400">
                <img alt="searchIcon" className='h-[1.50rem] w-8' src={searchIconLight} />
                <input onChange={(e) => setSearch(e.target.value)} placeholder="Search for a country..." className='h-full w-104 border-none outline-none text-lg' name='country' />
            </div>

        </div>
    )
}

export default Filter