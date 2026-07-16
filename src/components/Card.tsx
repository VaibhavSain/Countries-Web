import users from "../assets/data.json";
function Card() {
  return (
    <div className="w-full flex pt-10 flex-wrap gap-10 justify-center min-h-screen max-h-max">
      {users.map((ind, key) => (
        <div
          key={key}
          className=" rounded-lg  shadow-gray-300 shadow-lg flex flex-col h-72 w-[18rem]"
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
            <p>Population:{ind.population}</p>
            <p>Region:{ind.region}</p>
            <p>Capital:{ind.capital}</p>
          </li>
        </div>
      ))}
    </div>
  );
}

export default Card;
