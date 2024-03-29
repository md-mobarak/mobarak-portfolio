/* eslint-disable react/jsx-key */
import { ToggleContext } from "@/pages/_app";
import { useContext } from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdWeb } from "react-icons/md";
import { VscDebug } from "react-icons/vsc";
import { Element } from "react-scroll";
const Services = () => {
  const { toggleColor, setToggleColor } = useContext(ToggleContext);
  const services = [
    {
      title: "Web Design",
      icon: <MdWeb/>,
      description:
        "Experienced web designer with a focus on modern aesthetics and user-centric design. Specializing in creating visually engaging and intuitive interfaces, I bring concepts to life with attention to detail. Explore my portfolio for a glimpse into designs that seamlessly blend form and function, leaving a lasting impact.",
    },
    {
      title: "Web Application",
      icon: <CgWebsite />,
      description:
        "Skilled in web application development, I design dynamic and scalable solutions. My expertise includes secure user authentication, real-time features, and seamless scalability. Explore my portfolio to see how I leverage cutting-edge technologies for robust and engaging web applications.",
    },
    {
      title: "Responsive Design",
      icon: <FaMobileScreenButton />,
      description:
        "As a responsive design specialist, I prioritize creating adaptable and visually appealing websites. With a mobile-first mindset, I ensure seamless user experiences across diverse devices. Proficient in fluid grid systems and media queries, my designs offer flexibility and cross-browser compatibility. Explore my work to witness designs that effortlessly adjust to varying screen sizes.",
    },
    {
      title: "Web Development",
      icon: <FaCode />,
      description:
        "As a web development enthusiast, I specialize in building robust and scalable solutions. Proficient in both frontend and backend technologies, I bring ideas to life with clean, efficient code. My projects showcase a commitment to delivering seamless user experiences and leveraging the latest web development trends. Explore my portfolio for a glimpse into innovative and functional web solutions.",
    },
    {
      title: "Mobile App",
      icon: <BiLogoPlayStore />,
      description:
        "As a skilled mobile app developer, I specialize in creating cross-platform applications using React Native. With a focus on efficiency and performance, I design intuitive and feature-rich apps that run seamlessly on both iOS and Android. My expertise lies in leveraging the power of React Native to deliver a consistent and engaging user experience. Explore my portfolio to see how I bring mobile app ideas to life.",
    },
    {
      title: "Bug Fixing",
      icon: <VscDebug />,
      description:
        "As a meticulous bug fixer, I thrive on identifying and resolving software issues swiftly. With a keen eye for detail, I troubleshoot and debug code to enhance system stability. My expertise spans various programming languages, ensuring comprehensive bug resolution. Explore my track record of successful bug fixes, providing seamless and error-free software experiences.",
    },
  ];

  return (
    <Element name="services" id="services">
      <div className="lg:px-20 lg:py-20">
        <h1
          className={`lg:text-5xl  lg:mt-0 mt-20 text-3xl font-bold ${
            toggleColor ? "text-info" : "text-success"
          } text-center mb-16 uppercase`}
        >
          Services
        </h1>
    <div className="flex justify-center items-center lg:block">
    <section className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8 gap-y-12">
          {services.map((service, index) => {
            const icons = service?.icon;
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className={` lg:w-80 mb-8 lg:mb-0 md:mx-4 lg:mx-0 w-72 ${
                  toggleColor
                    ? " from-info border-2 border-info rounded-lg shadow-info shadow-md hover:shadow-lg hover:shadow-info hover:transition duration-300 ease-in-out"
                    : "bg-white  rounded-2xl border border-white skill"
                }  overflow-hidden shadow-info shadow-lg  bg-success  text-white`}
              >
                <div className="flex items-center justify-center px-4 py-2">
                  <p
                    className={`${
                      toggleColor ? "text-secondary" : "text-accent"
                    }  rounded-full text-5xl font-bold`}
                  >
                    {icons}
                  </p>
                </div>
                <div className="px-4 py-2">
                  <h2
                    className={`text-2xl font-bold  ${
                      toggleColor ? "text-info" : "text-success"
                    } mb-2`}
                  >
                    {service?.title}
                  </h2>
                  <p
                    className={`text-sm leading-relaxed ${
                      toggleColor ? "" : "text-success text-justify"
                    }`}
                  >
                    {service?.description}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
    </div>
      </div>
    </Element>
  );
};

export default Services;
