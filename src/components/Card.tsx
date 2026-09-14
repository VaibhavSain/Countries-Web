import { useNavigate } from "react-router-dom";

function Card({ search, data, setId, mode }) {
  const filterData = data.filter((country) => {
    return country.name.toLowerCase().includes(search.toLowerCase());
  });
  const navigate = useNavigate();
  return (
    <div className={`w-full relative  top-10 flex pb-10 ${mode == "bg-[#fafafa]" ? "bg-[#fafafa]" : "bg-[#202d36]"} pt-10 flex-wrap gap-10 justify-center min-h-screen max-h-max`}>
      {filterData.map((ind, key) => (
        <div
          key={key}
          onClick={() => {
            setId(ind)
            navigate("/details")
          }
          }
          className={`rounded-lg ${mode == 'bg-[#fafafa]' ? 'shadow-gray-300' : 'shadow-gray-900'} shadow-lg ${mode == 'bg-[#fafafa]' ? 'text-black' : 'text-white'} flex flex-col h-72 w-[18rem]`}
        >
          <img
            className="w-full bg-cover h-40 rounded-t-lg"
            alt="country Icon"
            src={ind.flag}
          />
          <h2 className="relative top-3 font-medium text-2xl left-4">
            {ind.name}
          </h2>
          <li className="relative list-none top-3 left-4">
            <p>Population: {ind.population}</p>
            <p>Region: {ind.region}</p>
            <p>Capital: {ind.capital}</p>
          </li>
        </div>
      ))}
    </div>
  );
}

export default Card;