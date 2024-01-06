import { ToggleContext } from "@/pages/_app";
// import "animate.css";
import { useContext } from "react";

const Education = () => {
  const { toggleColor, setToggleColor } = useContext(ToggleContext);
  return (
    <div
      className={`${
        toggleColor ? "bg-success" : "bg-neutral"
      } lg:px-20 px-10 lg:py-20 py-10 font-serif`}
    >
      <h1
        className={`lg:text-5xl  lg:mt-0 mt-20 mb-16 text-3xl font-bold ${
          toggleColor ? "text-info" : "text-success"
        } text-center lg:text-left uppercase`}
      >
        Education
      </h1>
      <section className="lg:flex w-full">
        <div
          className="lg:relative lg:w-1/2  py-8 "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className={`w-8 h-8  lg:absolute hidden lg:block   top-[-20px] right-[-52px]  rounded-full ${
              toggleColor ? "bg-info" : "bg-accent"
            } `}
          ></div>

          <div
            className={` ${
              toggleColor
                ? " bg-success  border border-info shadow-info shadow-lg"
                : "bg-white  shadow-gray-300 skill"
            } to-gray-200 p-6 rounded-xl`}
          >
            <div className={`text-2xl font-bold mb-4 ${toggleColor?"text-white":"text-success"}`}>2019-2023</div>
            <div className={`text-lg font-semibold mb-4  ${toggleColor?"text-white":"text-success"}`}>
              Your College Name
            </div>
            <div className={`${toggleColor ? "text-info" : "text-accent"} `}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
        <div
          className={`lg:relative  hidden lg:block w-2  mx-8  border ${
            toggleColor ? "border-info bg-info" : "border-accent bg-accent"
          }  `}
        ></div>
        <div className="lg:relative w-1/2  hidden lg:block"></div>
      </section>
      <section className="lg:flex w-full ">
        <div className="lg:relative hidden lg:w-1/2 lg:flex lg:justify-center lg:items-center">
          <div
            className={`w-32 h-32 blur-sm hidden lg:block  absolute bottom-0  animate-move left-10 opacity-70  rounded-xl  ${
              toggleColor ? "bg-info" : " hidden"
            } `}
          ></div>
        </div>
        <div
          className={`lg:relative  hidden lg:block w-2  mx-8  border ${
            toggleColor ? "border-info bg-info" : "border-accent bg-accent"
          }  `}
        ></div>

        <div
          className="lg:relative lg:w-1/2 py-8 "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className={`w-10 h-10  lg:absolute hidden lg:block   top-0 lg:left-[-55px]  rounded-full ${
              toggleColor ? "bg-info " : "bg-accent"
            }`}
          ></div>
         <div
            className={` ${
              toggleColor
                ? " bg-success  border border-info shadow-info shadow-lg"
                : "bg-white  shadow-gray-300 skill"
            } to-gray-200 p-6 rounded-xl`}
          >
            <div className={`text-2xl font-bold mb-4 ${toggleColor?"text-white":"text-success"}`}>2019-2023</div>
            <div className={`text-lg font-semibold mb-4  ${toggleColor?"text-white":"text-success"}`}>
              Your College Name
            </div>
            <div className={`${toggleColor ? "text-info" : "text-accent"} `}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
      </section>
      <section className="lg:flex w-full">
        <div
          className="lg:relative lg:w-1/2  py-8 "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className={`w-8 h-8  lg:absolute hidden lg:block   top-[-20px] right-[-52px]  rounded-full ${
              toggleColor ? "bg-info" : "bg-accent"
            } `}
          ></div>
         <div
            className={` ${
              toggleColor
                ? " bg-success  border border-info shadow-info shadow-lg"
                : "bg-white  shadow-gray-300 skill"
            } to-gray-200 p-6 rounded-xl`}
          >
            <div className={`text-2xl font-bold mb-4 ${toggleColor?"text-white":"text-success"}`}>2019-2023</div>
            <div className={`text-lg font-semibold mb-4  ${toggleColor?"text-white":"text-success"}`}>
              Your College Name
            </div>
            <div className={`${toggleColor ? "text-info" : "text-accent"} `}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
        <div
          className={`lg:relative  hidden lg:block w-2  mx-8  border ${
            toggleColor ? "border-info bg-info" : "border-accent bg-accent"
          }  `}
        ></div>
        <div className="lg:relative hidden lg:block lg:w-1/2 "></div>
      </section>
    </div>
  );
};

export default Education;
