import searchIconLight from '../assets/magnifying-black.svg';

function Filter({ setSearch, mode }) {

    return (
        <div className="h-16 relative top-6 w-full ">
            <div className={`h-12  flex flex-row items-center justify-evenly absolute ${mode === "bg-[#fafafa]" ? 'bg-[#ffffff]' : 'bg-gray-700'} left-12 w-120 shadow-sm rounded-sm shadow-gray-400`}>
                <img alt="searchIcon" className='h-6 w-8' src={searchIconLight} />
                <input onChange={(e) => setSearch(e.target.value)} placeholder="Search for a country..." className='h-full w-104 border-none outline-none text-lg' name='country' />
            </div>

        </div>
    )
}

export default Filter