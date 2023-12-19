/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="about" id="about">
      <div className="px-10 lg:px-20 font-serif mt-20 lg:flex lg:mt-20 lg:pb-20 lg:space-x-16">
        <div
          className="relative w-full lg:w-1/3 mb-8 lg:mb-0"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="w-24 h-24 hidden lg:block blur-sm absolute opacity-70 left-80 top-4 rounded-xl bg-info animate-move"></div>
          <img
            className="img-box shadow-2xl bg-gray-300 rounded-full w-full lg:w-96 lg:h-96"
            src="https://i.ibb.co/DY58q4d/Untitled-design-1-removebg-preview.png"
            alt=""
          />
        </div>
        <div
          className="w-full lg:w-1/2 md:w-full mx-auto" // Adjusted width for better responsiveness
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <h1 className="lg:text-5xl  lg:mt-0 mt-20 text-3xl font-bold text-info text-center lg:text-left uppercase">
            About Me
          </h1>
          <p className="my-6 text-white  lg:text-left text-justify ">
            Greetings! I'm Mobarak Hossen, a skilled full-stack web developer
            hailing from the vibrant landscapes of Bangladesh. Proficient in
            both front-end and back-end technologies, I specialize in
            transforming concepts into seamless, interactive web experiences.
            Join me on this journey of turning ideas into reality through
            innovative and efficient development. Let's build something
            extraordinary together!
          </p>

          <div className=" text-left">
            <p className="text-info text-lg">
              Name:
              <span className="text-white text-base">
                Mohammad Mobarak Hossen
              </span>
            </p>
            <p className="text-info text-lg">
              Birthdate:
              <span className="text-white text-base"> 10-05-2000</span>
            </p>
            <p className="text-info text-lg">
              Languages:
              <span className="text-white text-base"> English/Bengali</span>
            </p>
            <p className="text-info text-lg">
              Address:
              <span className="text-white text-base">
                Bangladesh, Chittagong
              </span>
            </p>
            <p className="text-info text-lg">
              Email:
              <span className="text-white text-base">
                Riponbhai782@gmail.com
              </span>
            </p>
            <p className="text-info text-lg">
              Phone:
              <span className="text-white text-base"> +8801825639631</span>
            </p>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="w-32 h-32 blur-sm absolute bottom-0 animate-move right-10 opacity-70 rounded-xl bg-info"></div>
        </div>
      </div>
    </Element>
  );
};

export default About;
