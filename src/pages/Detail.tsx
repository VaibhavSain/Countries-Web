import Image from "../components/Image";
import BackButton from "../components/BackButton";

function Detail() {
  return <div className="h-[40rem] w-screen bg-red-400">
    <Image />
    <BackButton />
    <h2 className="absolute text-3xl right-[36rem] font-semibold top-[20rem]">German</h2>
    <ul className="absolute right-[30rem] flex flex-col top-[24rem] gap-2">
      <li><b>Native Name:</b>Vaibhav</li>
      <li><b>Population:</b>10,000</li>
      <li><b>Region:</b> Asia</li>
      <li><b>Sub Region:</b> Western Europe</li>
      <li><b>Capital:</b> Brussels</li>
    </ul>
    <ul className="absolute right-[8rem] flex flex-col top-[24rem] gap-2">
      <li><b>Top Level Domain:</b> .be</li>
      <li><b>Currencies:</b> Euro</li>
      <li><b>Languages:</b> Dutch,French,German</li>
    </ul>
   
  </div>
}

export default Detail;
