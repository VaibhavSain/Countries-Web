import Image from "../components/Image";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Detail({ id }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (id === "") {
      navigate("/");
    }
  }, [])
  return <div className="h-screen  w-screen">
    <Image id={id} />
    <BackButton />
    <h2 className="absolute text-3xl left-170 font-semibold top-80">{id.name}</h2>
    <ul className="absolute left-170 flex flex-col top-96 gap-2">
      <li><b>Native Name:</b>{id.nativeName}</li>
      <li><b>Population:</b>{id.population}</li>
      <li><b>Region:</b> {id.region}</li>
      <li><b>Sub Region:</b> {id.subregion}</li>
      <li><b>Capital:</b> {id.region}</li>
    </ul>
    <ul className="absolute left-264 flex flex-col top-96 gap-2">
      <li><b>Top Level Domain:</b>{id.topLevelDomain}</li>
      <li><b>Currencies:</b></li>
      <li className="flex flex-wrap gap-2"><b>Languages:</b>{id.languages.map((ind) => (
        <span>{ind.name}</span>
      ))}</li>
    </ul>
    <ul className="flex absolute left-[42.80rem] top-152 flex-row">

      <b>Border Countries: </b>
      <span className="flex  flex-wrap gap-2 ">
        {id.borders.map((ind) => (
          <div className="bg-white  rounded-lg  shadow-gray-400 shadow-sm">{ind}</div>

        ))}
      </span>

    </ul>

  </div>
}

export default Detail;
