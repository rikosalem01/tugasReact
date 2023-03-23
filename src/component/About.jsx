import React from "react";

export const About = () => {
  return (
    <div name="About" className=" w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p
            className=" text-4xl font-bold inline
           border-b-4 border-gray-500 "
          >
            About
          </p>
        </div>
        <p className=" text-xl mt-20">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum impedit cum tempora necessitatibus alias minus, libero ab, numquam fuga nisi sed facilis! Amet esse eligendi ullam voluptatem veniam incidunt facere.
        </p>

        <br />

        <p className=" text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor praesentium nobis exercitationem voluptate sit quae tenetur eligendi, ducimus assumenda veniam repudiandae facere iure! Quam omnis molestiae maiores nulla ipsa cum!
        </p>
      </div>
    </div>
  );
};
