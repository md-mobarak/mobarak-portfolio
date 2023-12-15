/* eslint-disable @next/next/no-img-element */

import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="about" id="about">
      <div className="px-20 font-serif lg:flex mt-20 pb-20 space-x-16 ">
        <div className="relative w-1/3">
          <div className="w-24 h-24 blur-sm absolute opacity-70 left-80 top-4 rounded-xl bg-info animate-move"></div>
          <img
            className="img-box shadow-2xl bg-gray-300 rounded-full  w-96 h-96"
            src="https://i.ibb.co/DY58q4d/Untitled-design-1-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="w-1/3">
          <h1 className="text-6xl font-bold text-info text-start">About Me</h1>
          <p className="my-10 text-white">
            I am a professional Web Developer & Web Designer based in Pakistan
            working on different projects. I can build awesome Designs with
            different programming languages.
          </p>
          <p className="text-info text-xl">
            Name:
            <span className="text-white text-lg"> Mohammad Mobarak Hossen</span>
          </p>
          <p className="text-info text-xl">
            Birthdate:
            <span className="text-white text-lg"> 10-05-2000</span>
          </p>
          <p className="text-info text-xl">
            Languages:
            <span className="text-white text-lg"> English/Bengali</span>
          </p>
          <p className="text-info  text-xl">
            Address:
            <span className="text-white text-lg"> Bangladesh,Chttitgong</span>
          </p>
          <p className="text-info  text-xl">
            Email:
            <span className="text-white text-lg"> Riponbhai782@gmail.com</span>
          </p>
          <p className="text-info  text-xl">
            Phone:
            <span className="text-white text-lg ">+8801825639631</span>
          </p>
        </div>
        <div className="relative">
          <div className="w-32 h-32 blur-sm  absolute bottom-0  animate-move left-0 opacity-70  rounded-xl bg-info "></div>
        </div>
      </div>
    </Element>
  );
};

export default About;
