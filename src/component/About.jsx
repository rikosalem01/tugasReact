import React from "react";

const About = () => {
  return (
    <div name="about" className=" w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
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
          Saya merupakan lulusan dari Universitas Darma Persada dengan gelar Sarjana Teknik Informatika. Saya memiliki pengalaman membangun sebuah aplikasi dengan HTML, CSS, JavaScript, React.js, dan Node.js. Saat ini, saya sedang
          memperdalam keterampilan saya dalam pengembangan web dengan belajar sebagai Full Stack Developer di program bootcamp harisenin.com. Saya sangat antusias untuk mengembangkan karir saya dalam bidang ini dan berharap dapat menemukan
          kesempatan penuh waktu dalam pengembangan web Full-Stack
        </p>

        <br />

        <p className=" text-xl"></p>
      </div>
    </div>
  );
};
export default About;
