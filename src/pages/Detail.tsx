import Image from "../components/Image";
import BackButton from "../components/BackButton";

function Detail() {
  return <div className="h-screen  w-screen">
    <Image />
    <BackButton />
    <h2 className="absolute text-3xl right-144 font-semibold top-80">German</h2>
    <ul className="absolute right-120 flex flex-col top-96 gap-2">
      <li><b>Native Name:</b>Vaibhav</li>
      <li><b>Population:</b>10,000</li>
      <li><b>Region:</b> Asia</li>
      <li><b>Sub Region:</b> Western Europe</li>
      <li><b>Capital:</b> Brussels</li>
    </ul>
    <ul className="absolute right-32 flex flex-col top-96 gap-2">
      <li><b>Top Level Domain:</b> .be</li>
      <li><b>Currencies:</b> Euro</li>
      <li><b>Languages:</b> Dutch,French,German</li>
    </ul>
    <ul className="flex absolute left-[42.80rem] top-152 flex-row">
      <b>Border Countries: </b>
      <span className="flex  flex-wrap gap-2 ">
        <div className="bg-white  rounded-lg  shadow-gray-400 shadow-sm">France</div>
        <div className="bg-white  rounded-lg shadow-gray-400 shadow-sm">France</div>
        <div className="bg-white  rounded-lg shadow-gray-400 shadow-sm">France</div>
        <div className="bg-white  rounded-lg shadow-gray-400 shadow-sm">France</div>
      </span>
    </ul>
  </div>
}

export default Detail;
