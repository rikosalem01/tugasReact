import React from "react";
import HeroImage from "../assets/heroimg.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name="home" className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div
        className=" max-w-screen-lg mx-auto flex flex-col
     items-center justify-center h-full px-4 md:flex-row"
      >
        <div className=" flex flex-col justify-center h-full lg:w-1/2">
          <h2 className=" text-4xl sm:text-7xl sm:mt-5 font-bold text-white">I'm a Full Stack Developer</h2>
          <p className=" text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eaque saepe soluta, quo accusantium ab hic iste sunt. Eligendi veritatis nulla sunt reiciendis ullam ratione tempore molestias! Vel, aliquid dignissimos!
          </p>
          <div>
            <button className=" group text-white w-fit px-6 py-3 my-2 flex item-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              portofolio
              <span className=" group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div className=" lg:w-1/2">
          <img src={HeroImage} alt="riko salem" className=" rounded-2xl mx-auto max-w-full md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
