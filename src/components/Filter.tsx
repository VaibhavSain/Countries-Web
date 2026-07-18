import searchIconLight from '../assets/magnifying-black.svg';
function Filter({ setSearch, setRegion, region }) {
    return (
        <div className="h-16 relative top-6 bg-red-300 w-full ">
            <div className="h-12  flex flex-row items-center justify-evenly absolute bg-[#ffffff] left-12 w-120 shadow-sm rounded-sm shadow-gray-400">
                <img alt="searchIcon" className='h-[1.50rem] w-8' src={searchIconLight} />
                <input onChange={(e) => setSearch(e.target.value)} placeholder="Search for a country..." className='h-full w-104 border-none outline-none text-lg' name='country' />
            </div>
            <div className='absolute rounded-sm shadow-sm bg-[#ffffff] shadow-grey-400 flex items-center justify-center right-12 h-12 w-44'>
                <select value={region} onChange={(e) => setRegion(e.target.value)} >
                    <option value="">Filter by Region</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="africa">Africa</option>
                    <option value="americas">Americas</option>
                    <option value="ocenia">Oceania</option>
                    <option value="polar">Polar</option>
                    <option value="antarctic ocean">Antarctic Ocean</option>
                    <option value="antarctic">Antarctic</option>
                </select>
            </div>
        </div>
    )
}

export default Filter