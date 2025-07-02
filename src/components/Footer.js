// /* eslint-disable react/jsx-no-duplicate-props */
// import { ToggleContext } from "@/pages/_app";
// import { useContext } from "react";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";
// import { IoMail } from "react-icons/io5";

// const Footer = () => {
//   const { toggleColor, setToggleColor } = useContext(ToggleContext);
//   return (
//     <div className="lg:px-20 px-10">
//       <div
//         className={`cursor-pointer  ${
//           toggleColor
//             ? "bg-gradient-to-t from-info via-success to-success border-info"
//             : "  "
//         } mt-20 border-t-2 py-10 px-5 lg:px-20   lg:grid grid-cols-4 lg:space-x-6`}
//       >
//         <div className="lg:w-1/2">
//           <h1
//             className={` ${
//               toggleColor ? "text-info" : " text-success"
//             }  text-3xl my-3`}
//           >
//             MOBARAK
//           </h1>
//           <p
//             // className="text-white"
//             className={`lg:text-justify ${
//               toggleColor
//                 ? "hover:text-info text-white"
//                 : " text-accent hover:text-success"
//             }`}
//           >
//             When I am working on a problem I never think about beauty but when I
//             have finished, if the solution is not beautiful, I know it is wrong
//           </p>
//         </div>
//         <div className="lg:w-1/2 ">
//           <h1
//             className={` ${
//               toggleColor ? "text-info" : " text-success"
//             }  text-3xl my-3`}
//           >
//             Links
//           </h1>
//           <p
//             className={`mb-2${
//               toggleColor
//                 ? "hover:text-info text-white"
//                 : " text-accent hover:text-success"
//             }`}
//           >
//             {" "}
//             Home
//           </p>
//           <p
//             className={`mb-2${
//               toggleColor
//                 ? "hover:text-info text-white"
//                 : " text-accent hover:text-success"
//             }`}
//           >
//             {" "}
//             Portfolio
//           </p>
//           <p
//             className={`mb-2${
//               toggleColor
//                 ? "hover:text-info text-white"
//                 : " text-accent hover:text-success"
//             }`}
//           >
//             {" "}
//             About
//           </p>
//           <p
//             className={`mb-2${
//               toggleColor
//                 ? "hover:text-info text-white"
//                 : " text-accent hover:text-success"
//             }`}
//           >
//             {" "}
//             Skills
//           </p>
//           <p
//             className={`mb-2${
//               toggleColor
//                 ? "hover:text-info text-white"
//                 : " text-accent hover:text-success"
//             }`}
//           >
//             {" "}
//             Services
//           </p>
//           <p
//             className={`mb-2${
//               toggleColor
//                 ? "hover:text-info text-white"
//                 : " text-accent hover:text-success"
//             }`}
//           >
//             {" "}
//             Contact
//           </p>
//         </div>
//         <div className="lg:w-1/2">
//           <h1
//             className={` ${
//               toggleColor ? "text-info" : " text-success"
//             }  text-3xl my-3`}
//           >
//             Services
//           </h1>
//           <p
//             className={`mb-2${
//               toggleColor
//                 ? "hover:text-info text-white"
//                 : " text-accent hover:text-success"
//             }`}
//           >
//             Web Development
//           </p>
//           <p
//             className={`mb-2${
//               toggleColor
//                 ? "hover:text-info text-white"
//                 : " text-accent hover:text-success"
//             }`}
//           >
//             {" "}
//             Web Design
//           </p>
//           <p
//             className={`mb-2${
//               toggleColor
//                 ? "hover:text-info text-white"
//                 : " text-accent hover:text-success"
//             }`}
//           >
//             {" "}
//             Business Strategy
//           </p>
//         </div>
//         <div className="lg:w-1/2 hover:text-info">
//           <h1
//             className={` ${
//               toggleColor ? "text-info" : " text-success"
//             }  text-3xl my-3`}
//           >
//             Address
//           </h1>
//           <div
//             className={`flex space-x-4 items-center mb-2${
//               toggleColor
//                 ? "hover:text-info text-white"
//                 : " text-accent hover:text-success"
//             }`}
//           >
//             <FaLocationDot className="h-5 w-5"></FaLocationDot>
//             <span>Bangladesh</span>
//           </div>
//           <div
//             className={`flex space-x-4 items-center mb-2${
//               toggleColor
//                 ? "hover:text-info text-white"
//                 : " text-accent hover:text-success"
//             }`}
//           >
//             <p>
//               <FaPhoneAlt className="h-5 w-5"></FaPhoneAlt>
//             </p>
//             <p> +8801825639631</p>
//           </div>
//           <div
//             className={`flex space-x-4 items-center mb-2${
//               toggleColor
//                 ? "hover:text-info text-white"
//                 : " text-accent hover:text-success"
//             }`}
//           >
//             <p>
//               <IoMail className="h-5 w-5"></IoMail>
//             </p>
//             <p>Riponbhai782@gmail.com</p>
//           </div>
//         </div>
//       </div>
//       <p
//         className={`text-center text-white border-t border-white ${
//           toggleColor ? " bg-info" : "bg-accent"
//         } pb-5 pt-3 text-xl `}
//       >
//         Copyright © 2023. All Rights Reserved.
//         <span className="text-red-500">❤</span>
//       </p>
//     </div>
//   );
// };

// export default Footer;
"use client";
import { ToggleContext } from "@/pages/_app";
import { useContext } from "react";
import { FaPhoneAlt, FaGithub, FaLinkedin, FaDribbble, FaTwitter } from "react-icons/fa";
import { FaLocationDot, FaArrowUp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { motion } from "framer-motion";

const Footer = () => {
  const { toggleColor } = useContext(ToggleContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const footerLinks = [
    { title: "Home", href: "#home" },
    { title: "Portfolio", href: "#portfolio" },
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Services", href: "#services" },
    { title: "Contact", href: "#contact" },
  ];

  const services = [
    "Web Development",
    "Web Design",
    "Business Strategy",
    "UI/UX Design",
    "Mobile Apps",
    "Consulting"
  ];

  const socialLinks = [
    { icon: <FaGithub className="h-5 w-5" />, href: "https://github.com/md-mobarak" },
    { icon: <FaLinkedin className="h-5 w-5" />, href: "https://linkedin.com/in/md-mobarak" },
    { icon: <FaDribbble className="h-5 w-5" />, href: "https://dribbble.com/md-mobarak" },
    { icon: <FaTwitter className="h-5 w-5" />, href: "https://twitter.com/md-mobarak" }
  ];

  return (
    <footer className={`relative overflow-hidden ${toggleColor ? "bg-gradient-to-t from-success to-info/20" : "bg-white"}`}>
      {/* Floating background elements */}
      <div className="absolute top-10 left-1/4 w-40 h-40 rounded-full bg-secondary/20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-1/3 w-32 h-32 rounded-full bg-accent/20 blur-3xl animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand section */}
          <div className="space-y-5">
            <motion.h2
              className={`text-3xl font-bold ${toggleColor ? "text-info" : "text-success"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              MOBARAK
            </motion.h2>

            <motion.p
              className={`${toggleColor ? "text-white/80" : "text-gray-600"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              When I am working on a problem I never think about beauty but when I have finished,
              if the solution is not beautiful, I know it is wrong
            </motion.p>

            <motion.div
              className="flex space-x-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full ${toggleColor
                    ? "bg-info/10 text-white hover:bg-info/30"
                    : "bg-accent/10 text-accent hover:bg-accent/20"
                    } transition-all duration-300`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Links section */}
          <div>
            <motion.h3
              className={`text-xl font-bold mb-6 ${toggleColor ? "text-info" : "text-success"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Quick Links
            </motion.h3>

            <motion.ul
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {footerLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className={`flex items-center group ${toggleColor
                      ? "text-white/80 hover:text-info"
                      : "text-gray-600 hover:text-success"
                      } transition-colors duration-300`}
                  >
                    <span className="w-3 h-[2px] bg-current mr-2 group-hover:w-5 transition-all duration-300"></span>
                    {link.title}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Services section */}
          <div>
            <motion.h3
              className={`text-xl font-bold mb-6 ${toggleColor ? "text-info" : "text-success"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Services
            </motion.h3>

            <motion.ul
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                >
                  <div className={`flex items-center group ${toggleColor
                    ? "text-white/80"
                    : "text-gray-600"
                    }`}>
                    <span className={`w-2 h-2 rounded-full mr-3 ${toggleColor ? "bg-info" : "bg-success"
                      }`}></span>
                    {service}
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Contact section */}
          <div>
            <motion.h3
              className={`text-xl font-bold mb-6 ${toggleColor ? "text-info" : "text-success"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Get In Touch
            </motion.h3>

            <motion.ul
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.li
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.9 }}
              >
                <div className={`mt-1 p-2 rounded-full mr-3 ${toggleColor
                  ? "bg-info/10 text-info"
                  : "bg-accent/10 text-accent"
                  }`}>
                  <FaLocationDot className="h-4 w-4" />
                </div>
                <span className={`${toggleColor ? "text-white/80" : "text-gray-600"}`}>
                  Dhaka, Bangladesh
                </span>
              </motion.li>

              <motion.li
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.0 }}
              >
                <div className={`mt-1 p-2 rounded-full mr-3 ${toggleColor
                  ? "bg-info/10 text-info"
                  : "bg-accent/10 text-accent"
                  }`}>
                  <FaPhoneAlt className="h-4 w-4" />
                </div>
                <a
                  href="tel:+8801825639631"
                  className={`${toggleColor ? "text-white/80 hover:text-info" : "text-gray-600 hover:text-success"} transition-colors duration-300`}
                >
                  +880 1825 639631
                </a>
              </motion.li>

              <motion.li
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.1 }}
              >
                <div className={`mt-1 p-2 rounded-full mr-3 ${toggleColor
                  ? "bg-info/10 text-info"
                  : "bg-accent/10 text-accent"
                  }`}>
                  <IoMail className="h-4 w-4" />
                </div>
                <a
                  href="mailto:Riponbhai782@gmail.com"
                  className={`${toggleColor ? "text-white/80 hover:text-info" : "text-gray-600 hover:text-success"} transition-colors duration-300`}
                >
                  Riponbhai782@gmail.com
                </a>
              </motion.li>
            </motion.ul>
          </div>
        </div>

        {/* Newsletter form */}
        <motion.div
          className={`mt-16 p-6 rounded-2xl ${toggleColor
            ? "bg-success/20 border border-info/30"
            : "bg-gray-100 border border-accent/30"
            }`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="max-w-xl mx-auto">
            <h3 className={`text-xl font-bold text-center mb-4 ${toggleColor ? "text-info" : "text-success"}`}>
              Subscribe to my Newsletter
            </h3>
            <p className={`text-center mb-6 ${toggleColor ? "text-white/80" : "text-gray-600"}`}>
              Get updates on my latest projects and articles
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className={`flex-grow px-4 py-3 rounded-full focus:outline-none ${toggleColor
                  ? "bg-success/10 text-white placeholder-white/50"
                  : "bg-white text-gray-800"
                  }`}
              />
              <motion.button
                className={`px-6 py-3 rounded-full font-medium ${toggleColor
                  ? "bg-info text-white"
                  : "bg-success text-white"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>



      {/* Copyright section */}
      <div className={`py-5 ${toggleColor ? "bg-info/20" : "bg-gray-800"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-center md:text-left ${toggleColor ? "text-white/80" : "text-gray-300"}`}>
              Copyright © 2023. All Rights Reserved.
              <span className="text-red-500 mx-1">❤</span>
            </p>

            <p className={`mt-2 md:mt-0 ${toggleColor ? "text-white/80" : "text-gray-300"}`}>
              Designed & Developed by <span className={toggleColor ? "text-info" : "text-success"}>Mobarak Hossain</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;