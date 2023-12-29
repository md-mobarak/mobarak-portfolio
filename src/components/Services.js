import { BiLogoPlayStore } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdWeb } from "react-icons/md";
import { VscDebug } from "react-icons/vsc";
import { Element } from "react-scroll";
const Services = () => {
  return (
    <Element name="services" id="services">
      <div className="lg:px-20 lg:py-20">
        <h1 className="text-info lg:text-5xl text-3xl uppercase text-center my-10 font-bold">
          Services
        </h1>
        <div className="">
          <div className="">
            <section className="flex  flex-wrap justify-center  ">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="border lg:w-80 mb-2 lg:mb-0  w-72 card rounded-lg overflow-hidden shadow-lg  bg-gradient-to-r from-info to-success  text-white"
              >
                <div className="flex items-center justify-center p-4">
                  <MdWeb className="text-secondary rounded-full h-16 w-16" />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-info mb-2">
                    Web Design
                  </h2>
                  <p className="text-sm leading-relaxed">
                    Experienced web designer with a focus on modern aesthetics
                    and user-centric design. Specializing in creating visually
                    engaging and intuitive interfaces, I bring concepts to life
                    with attention to detail. Explore my portfolio for a glimpse
                    into designs that seamlessly blend form and function,
                    leaving a lasting impact.
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="border lg:w-80   w-72 card rounded-lg overflow-hidden shadow-lg  bg-gradient-to-r from-info to-success  text-white mb-2 lg:mb-0 lg:mx-8 "
              >
                <div className="flex items-center justify-center p-4">
                  <CgWebsite className="text-secondary rounded-full h-16 w-16" />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-info mb-2">
                    Web Application
                  </h2>
                  <p className="text-sm leading-relaxed">
                    Skilled in web application development, I design dynamic and
                    scalable solutions. My expertise includes secure user
                    authentication, real-time features, and seamless
                    scalability. Explore my portfolio to see how I leverage
                    cutting-edge technologies for robust and engaging web
                    applications
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="border lg:w-80 mb-2 lg:mb-0  w-72 card rounded-lg overflow-hidden shadow-lg  bg-gradient-to-r from-info to-success  text-white"
              >
                <div className="flex items-center justify-center p-3">
                  <FaMobileScreenButton className=" text-secondary rounded-full h-16 w-16 " />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-info mb-2">
                    Responsive Design
                  </h2>
                  <p className="text-sm text-justify">
                    As a responsive design specialist, I prioritize creating
                    adaptable and visually appealing websites. With a
                    mobile-first mindset, I ensure seamless user experiences
                    across diverse devices. Proficient in fluid grid systems and
                    media queries, my designs offer flexibility and
                    cross-browser compatibility. Explore my work to witness
                    designs that effortlessly adjust to varying screen sizes
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="border lg:w-80 mb-2 lg:mb-0 lg:mt-8 w-72 card rounded-lg overflow-hidden shadow-lg  bg-gradient-to-r from-info to-success  text-white"
              >
                <div className="flex items-center justify-center p-3">
                  <FaCode className=" text-secondary rounded-full h-16 w-16 " />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-info mb-2">
                    Web Development
                  </h2>
                  <p className="text-sm text-justify">
                    As a web development enthusiast, I specialize in building
                    robust and scalable solutions. Proficient in both frontend
                    and backend technologies, I bring ideas to life with clean,
                    efficient code. My projects showcase a commitment to
                    delivering seamless user experiences and leveraging the
                    latest web development trends. Explore my portfolio for a
                    glimpse into innovative and functional web solutions.
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="border lg:w-80 mb-2 lg:mx-8 lg:mb-0 lg:mt-8 w-72 card rounded-lg overflow-hidden shadow-lg  bg-gradient-to-r from-info to-success  text-white"
              >
                <div className="flex items-center justify-center p-3">
                  <BiLogoPlayStore className=" text-secondary rounded-full h-16 w-16 " />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-info mb-2">
                    Mobile App
                  </h2>
                  <p className="text-sm text-justify">
                    As a skilled mobile app developer, I specialize in creating
                    cross-platform applications using React Native. With a focus
                    on efficiency and performance, I design intuitive and
                    feature-rich apps that run seamlessly on both iOS and
                    Android. My expertise lies in leveraging the power of React
                    Native to deliver a consistent and engaging user experience.
                    Explore my portfolio to see how I bring mobile app ideas to
                    life
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="border lg:w-80 mb-2 lg:mb-0 lg:mt-8 w-72 card rounded-lg overflow-hidden shadow-lg  bg-gradient-to-r from-info to-success  text-white"
              >
                <div className="flex items-center justify-center p-3">
                  <VscDebug className=" text-secondary rounded-full h-16 w-16 " />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-info mb-2">
                    Bug Fixing
                  </h2>
                  <p className="text-sm text-justify">
                    As a meticulous bug fixer, I thrive on identifying and
                    resolving software issues swiftly. With a keen eye for
                    detail, I troubleshoot and debug code to enhance system
                    stability. My expertise spans various programming languages,
                    ensuring comprehensive bug resolution. Explore my track
                    record of successful bug fixes, providing seamless and
                    error-free software experiences.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Services;
