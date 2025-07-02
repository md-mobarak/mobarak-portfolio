// /* eslint-disable react/jsx-key */
// import { ToggleContext } from "@/pages/_app";
// import { useContext } from "react";
// import { BiLogoPlayStore } from "react-icons/bi";
// import { CgWebsite } from "react-icons/cg";
// import { FaCode } from "react-icons/fa";
// import { FaMobileScreenButton } from "react-icons/fa6";
// import { MdWeb } from "react-icons/md";
// import { VscDebug } from "react-icons/vsc";
// import { Element } from "react-scroll";
// const Services = () => {
//   const { toggleColor, setToggleColor } = useContext(ToggleContext);
//   const services = [
//     {
//       title: "Web Design",
//       icon: <MdWeb/>,
//       description:
//         "Experienced web designer with a focus on modern aesthetics and user-centric design. Specializing in creating visually engaging and intuitive interfaces, I bring concepts to life with attention to detail. Explore my portfolio for a glimpse into designs that seamlessly blend form and function, leaving a lasting impact.",
//     },
//     {
//       title: "Web Application",
//       icon: <CgWebsite />,
//       description:
//         "Skilled in web application development, I design dynamic and scalable solutions. My expertise includes secure user authentication, real-time features, and seamless scalability. Explore my portfolio to see how I leverage cutting-edge technologies for robust and engaging web applications.",
//     },
//     {
//       title: "Responsive Design",
//       icon: <FaMobileScreenButton />,
//       description:
//         "As a responsive design specialist, I prioritize creating adaptable and visually appealing websites. With a mobile-first mindset, I ensure seamless user experiences across diverse devices. Proficient in fluid grid systems and media queries, my designs offer flexibility and cross-browser compatibility. Explore my work to witness designs that effortlessly adjust to varying screen sizes.",
//     },
//     {
//       title: "Web Development",
//       icon: <FaCode />,
//       description:
//         "As a web development enthusiast, I specialize in building robust and scalable solutions. Proficient in both frontend and backend technologies, I bring ideas to life with clean, efficient code. My projects showcase a commitment to delivering seamless user experiences and leveraging the latest web development trends. Explore my portfolio for a glimpse into innovative and functional web solutions.",
//     },
//     {
//       title: "Mobile App",
//       icon: <BiLogoPlayStore />,
//       description:
//         "As a skilled mobile app developer, I specialize in creating cross-platform applications using React Native. With a focus on efficiency and performance, I design intuitive and feature-rich apps that run seamlessly on both iOS and Android. My expertise lies in leveraging the power of React Native to deliver a consistent and engaging user experience. Explore my portfolio to see how I bring mobile app ideas to life.",
//     },
//     {
//       title: "Bug Fixing",
//       icon: <VscDebug />,
//       description:
//         "As a meticulous bug fixer, I thrive on identifying and resolving software issues swiftly. With a keen eye for detail, I troubleshoot and debug code to enhance system stability. My expertise spans various programming languages, ensuring comprehensive bug resolution. Explore my track record of successful bug fixes, providing seamless and error-free software experiences.",
//     },
//   ];

//   return (
//     <Element name="services" id="services">
//       <div className="lg:px-20 lg:py-20">
//         <h1
//           className={`lg:text-5xl  lg:mt-0 mt-20 text-3xl font-bold ${
//             toggleColor ? "text-info" : "text-success"
//           } text-center mb-16 uppercase`}
//         >
//           Services
//         </h1>
//     <div className="flex justify-center items-center lg:block">
//     <section className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8 gap-y-12">
//           {services.map((service, index) => {
//             const icons = service?.icon;
//             return (
//               <div
//                 data-aos="fade-up"
//                 data-aos-duration="1000"
//                 className={` lg:w-80 mb-8 lg:mb-0 md:mx-4 lg:mx-0 w-72 ${
//                   toggleColor
//                     ? " from-info border-2 border-info rounded-lg shadow-info shadow-md hover:shadow-lg hover:shadow-info hover:transition duration-300 ease-in-out"
//                     : "bg-white  rounded-2xl border border-white skill"
//                 }  overflow-hidden shadow-info shadow-lg  bg-success  text-white`}
//               >
//                 <div className="flex items-center justify-center px-4 py-2">
//                   <p
//                     className={`${
//                       toggleColor ? "text-secondary" : "text-accent"
//                     }  rounded-full text-5xl font-bold`}
//                   >
//                     {icons}
//                   </p>
//                 </div>
//                 <div className="px-4 py-2">
//                   <h2
//                     className={`text-2xl font-bold  ${
//                       toggleColor ? "text-info" : "text-success"
//                     } mb-2`}
//                   >
//                     {service?.title}
//                   </h2>
//                   <p
//                     className={`text-sm leading-relaxed ${
//                       toggleColor ? "" : "text-success text-justify"
//                     }`}
//                   >
//                     {service?.description}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </section>
//     </div>
//       </div>
//     </Element>
//   );
// };

// export default Services;

/* eslint-disable react/jsx-key */
import { ToggleContext } from "@/pages/_app";
import { useContext } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaPalette, FaBug, FaServer, FaLaptopCode } from "react-icons/fa";

const Services = () => {
  const { toggleColor } = useContext(ToggleContext);

  const services = [
    {
      title: "Web Design",
      icon: <FaPalette className="text-3xl" />,
      description: "Creating visually engaging and intuitive interfaces with attention to detail. Designs that seamlessly blend form and function for lasting impact.",
      color: "from-pink-500 to-purple-500"
    },
    {
      title: "Web Applications",
      icon: <FaServer className="text-3xl" />,
      description: "Building dynamic, scalable solutions with secure authentication and real-time features. Leveraging cutting-edge technologies for robust applications.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Responsive Design",
      icon: <FaMobileAlt className="text-3xl" />,
      description: "Creating adaptable websites with mobile-first approach. Ensuring seamless experiences across all devices with fluid grids and media queries.",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Web Development",
      icon: <FaLaptopCode className="text-3xl" />,
      description: "Building robust solutions with clean, efficient code. Delivering seamless user experiences with the latest web development trends.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Mobile Apps",
      icon: <FaMobileAlt className="text-3xl" />,
      description: "Creating cross-platform apps with React Native. Designing intuitive, feature-rich applications for iOS and Android with consistent experiences.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Bug Fixing",
      icon: <FaBug className="text-3xl" />,
      description: "Identifying and resolving software issues swiftly. Troubleshooting and debugging code to enhance system stability across languages.",
      color: "from-red-500 to-pink-500"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15
      }
    },
    hover: {
      y: -10,
      scale: 1.03,
      transition: { duration: 0.3 }
    }
  };

  return (
    <Element name="services" id="services">
      <div className={`py-20 px-4 sm:px-6 lg:px-8 ${toggleColor ? "bg-success" : "bg-neutral"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl md:text-5xl font-bold text-center mb-4 ${toggleColor ? "text-info" : "text-success"
              }`}
          >
            My <span className="text-accent">Services</span>
          </motion.h1>

          <motion.p
            className={`text-center max-w-2xl mx-auto mb-16 text-lg ${toggleColor ? "text-white" : "text-success"
              }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            I offer a comprehensive suite of development services to bring your digital vision to life
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className={`rounded-2xl overflow-hidden ${toggleColor
                  ? "border border-info/30 shadow-info/20"
                  : "shadow-xl"
                  }`}
              >
                <div className="relative h-full">
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`}></div>

                  {/* Service card content */}
                  <div className="relative p-8 h-full flex flex-col">
                    <div className={`mb-6 w-16 h-16 rounded-full flex items-center justify-center ${toggleColor ? "bg-info/10" : "bg-gray-100"
                      }`}>
                      <div className={`${toggleColor ? "text-info" : "text-accent"}`}>
                        {service.icon}
                      </div>
                    </div>

                    <h3 className={`text-2xl font-bold mb-4 ${toggleColor ? "text-info" : "text-success"
                      }`}>
                      {service.title}
                    </h3>

                    <p className={`mb-6 flex-grow ${toggleColor ? "text-white" : "text-success"
                      }`}>
                      {service.description}
                    </p>

                    <div className="flex justify-between items-center">
                      <span className={`text-sm font-medium ${toggleColor ? "text-info" : "text-accent"
                        }`}>
                        0{index + 1}
                      </span>
                      <button className={`px-4 py-2 rounded-full text-sm font-medium ${toggleColor
                        ? "bg-info text-white hover:bg-info/90"
                        : "bg-accent text-white hover:bg-accent/90"
                        } transition-colors`}>
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to action */}
          <motion.div
            className={`mt-20 p-8 rounded-3xl text-center ${toggleColor
              ? "bg-info/10 border border-info/30"
              : "bg-accent/10"
              }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${toggleColor ? "text-info" : "text-success"
              }`}>
              Ready to bring your project to life?
            </h3>
            <p className={`max-w-2xl mx-auto mb-6 ${toggleColor ? "text-white" : "text-success"
              }`}>
              {"Let's collaborate to create something extraordinary. I'm just one click away."}
            </p>
            <button className={`px-8 py-3 rounded-full font-medium ${toggleColor
              ? "bg-info text-white hover:bg-info/90"
              : "bg-accent text-white hover:bg-accent/90"
              } transition-colors shadow-lg`}>
              Start a Project
            </button>
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default Services;
