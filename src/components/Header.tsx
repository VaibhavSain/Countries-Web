import { useState } from "react";
import moonIcon from "../assets/moon-solid-full.svg";
import sunIcon from "../assets/icon.svg";
function Header({ changeMode, mode }) {
  const [text, setText] = useState("text-black");
  const [image, setImage] = useState(false);

  const changeText = () => {
    setText(text === "text-white" ? "text-black" : "text-white");
  };

  return (
    <div
      className={` ${mode === "bg-[#202d36]" ? "bg-[#2b3743]" : "bg-[#fafafa]"} relative   w-full h-[4.50rem] border-b-2 border-gray-200`}
    >
      <h1
        className={`text-2xl ${text} absolute top-[1rem] left-[4rem] font-medium`}
      >
        Where in the World?
      </h1>
      <button
        onClick={() => {
          changeMode();
          changeText();
          setImage(!image);
        }}
        className="absolute right-[4rem] top-[1.20rem] flex flex-row"
      >
        <img
          src={image ? sunIcon : moonIcon}
          alt="moonIcon"
          className="h-[1.40rem]  w-[2rem]"
        />
        <span className={`text-lg ${text} font-medium`}>Dark Mode</span>
      </button>
    </div>
  );
}

export default Header;
