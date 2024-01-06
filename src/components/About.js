/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { ToggleContext } from "@/pages/_app";
import { useContext } from "react";
import { Element } from "react-scroll";

const About = () => {
  const { toggleColor, setToggleColor } = useContext(ToggleContext);
  return (
    <Element name="about" id="about">
      <div
        className={`px-10 ${
          toggleColor ? "bg-success" : "bg-neutral"
        } lg:px-20 font-serif mt-20 lg:flex md:flex md:px-10 md:space-x-8 md:items-center md:justify-center lg:mt-20 lg:pb-20 lg:space-x-16`}
      >
        <div
          className="relative w-full lg:w-1/3 mb-8 lg:mb-0"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div
            className={`w-24 h-24 hidden lg:block blur-sm absolute opacity-70 left-80 top-4 rounded-xl  ${
              toggleColor ? "bg-info" : "hidden"
            }  animate-move`}
          ></div>
          <img
            className={`${
              toggleColor
                ? "img-bo border-2  border-info  shadow-info shadow-md "
                : " bg-white skill"
            } shadow-2xl  rounded-full w-full lg:w-96 lg:h-96`}
            src="https://i.ibb.co/DY58q4d/Untitled-design-1-removebg-preview.png"
            alt=""
          />
        </div>
        <div
          className={`w-full lg:w-1/2 md:w-full mx-auto ${
            toggleColor
              ? ""
              : "lg:border lg:border-accent lg:p-8 lg:rounded-xl lg:shadow-2xl"
          }`} // Adjusted width for better responsiveness
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <h1
            className={`lg:text-5xl  lg:mt-0 mt-20 text-3xl font-bold ${
              toggleColor ? "text-info" : "text-success"
            } text-center lg:text-left uppercase`}
          >
            About Me
          </h1>
          <p
            className={`my-6 ${
              toggleColor ? "text-white" : "text-success lg:text-lg"
            }  lg:text-left text-justify `}
          >
            Greetings! I'm Mobarak Hossen, a skilled full-stack web developer
            hailing from the vibrant landscapes of Bangladesh. Proficient in
            both front-end and back-end technologies, I specialize in
            transforming concepts into seamless, interactive web experiences.
            Join me on this journey of turning ideas into reality through
            innovative and efficient development. Let's build something
            extraordinary together!
          </p>

          <div className=" text-left">
            <p
              className={` ${
                toggleColor ? "text-info" : "text-success"
              } text-lg`}
            >
              Name:
              <span
                className={` ${
                  toggleColor ? "text-white" : "text-accent"
                } text-base`}
              >
                Mohammad Mobarak Hossen
              </span>
            </p>
            <p
              className={` ${
                toggleColor ? "text-info" : "text-success"
              } text-lg`}
            >
              Birthdate:
              <span
                className={` ${
                  toggleColor ? "text-white" : "text-accent"
                } text-base`}
              >
                10-05-2000
              </span>
            </p>
            <p
              className={` ${
                toggleColor ? "text-info" : "text-success"
              } text-lg`}
            >
              Languages:
              <span
                className={` ${
                  toggleColor ? "text-white" : "text-accent"
                } text-base`}
              >
                {" "}
                English/Bengali
              </span>
            </p>
            <p
              className={` ${
                toggleColor ? "text-info" : "text-success"
              } text-lg`}
            >
              Address:
              <span
                className={` ${
                  toggleColor ? "text-white" : "text-accent"
                } text-base`}
              >
                Bangladesh, Chittagong
              </span>
            </p>
            <p
              className={` ${
                toggleColor ? "text-info" : "text-success"
              } text-lg`}
            >
              Email:
              <span
                className={` ${
                  toggleColor ? "text-white" : "text-accent"
                } text-base`}
              >
                Riponbhai782@gmail.com
              </span>
            </p>
            <p
              className={` ${
                toggleColor ? "text-info" : "text-success"
              } text-lg`}
            >
              Phone:
              <span
                className={` ${
                  toggleColor ? "text-white" : "text-accent"
                } text-base`}
              >
                {" "}
                +8801825639631
              </span>
            </p>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div
            className={`w-32 h-32 blur-sm absolute bottom-0 animate-move right-10 opacity-70 rounded-xl ${
              toggleColor ? "bg-info" : "hidden"
            }`}
          ></div>
        </div>
      </div>
    </Element>
  );
};

export default About;
