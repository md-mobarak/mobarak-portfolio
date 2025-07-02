// /* eslint-disable @next/next/no-img-element */
// import { ToggleContext } from "@/pages/_app";
// import emailjs from "emailjs-com";
// import { useState } from "react";
// import { Element } from "react-scroll";

// // import "animate.css";
// import { useContext } from "react";
// const Contact = () => {
//   const { toggleColor, setToggleColor } = useContext(ToggleContext);
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     subject: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // const sendEmail = () => {
//   //   e.preventDefault();
//   //   // Your EmailJS service ID
//   //   const serviceID = "service_oaqee8o";

//   //   // Your EmailJS template ID
//   //   const templateID = "template_0rfgi78";

//   //   // Your EmailJS user ID
//   //   const userID = "DES6bkYZNvY2Owpzl";

//   //   // Define template parameters
//   //   const templateParams = {
//   //     to_name: formData.username,
//   //     from_email: formData.email,
//   //     from_subject: formData.subject,
//   //     message: formData.description,
//   //   };

//   //   // Use the send function to send the email
//   //   emailjs
//   //     .send(serviceID, templateID, templateParams, userID)
//   //     .then((response) => {
//   //       console.log("Email sent successfully:", response);
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error sending email:", error);
//   //     });
//   // };
//   const sendEmail = (e) => {
//     e.preventDefault(); // <-- Define 'e' as the event parameter
//     // Your EmailJS service ID
//     const serviceID = "service_oaqee8o";

//     // Your EmailJS template ID
//     const templateID = "template_0rfgi78";

//     // Your EmailJS user ID
//     const userID = "DES6bkYZNvY2Owpzl";

//     // Define template parameters
//     const templateParams = {
//       to_name: formData.username,
//       from_email: formData.email,
//       from_subject: formData.subject,
//       message: formData.description,
//     };

//     // Use the send function to send the email
//     emailjs
//       .send(serviceID, templateID, templateParams, userID)
//       .then((response) => {
//         console.log("Email sent successfully:", response);
//         // Reset the form
//         e.target.reset();
//         setFormData({
//           username: "",
//           email: "",
//           subject: "",
//           description: "",
//         });
//       })
//       .catch((error) => {
//         console.error("Error sending email:", error);
//       });
//   };

//   return (
//     <Element name="contact" id="contact">
//       <div className=" lg:px-20 px-10 ">
//         <h1
//           className={`text-center lg:text-5xl text-3xl mb-10 uppercase font-bold ${
//             toggleColor ? "text-info" : "text-success"
//           }`}
//         >
//           Contact
//         </h1>

//         <div
//           className={`lg:flex justify-between  items-center lg:p-10 space-x-4  ${
//             toggleColor
//               ? "bg-success"
//               : "  bg-nuetral"
//           } `}
//         >
//           <div data-aos="zoom-in-up" className=" lg:hidden lg:w-1/2  md:flex justify-center">
//             <img
//               className="lg:h-[617px]"
//               src="https://i.ibb.co/SnbQmtq/this-removebg-preview.png"
//               alt=""
//             />
//           </div>
//           <div
//             data-aos="zoom-in-up"
//             className={`  lg:w-1/2  p-8 rounded-xl
//             ${toggleColor?"bg-success border-2 border-info shadow-info shadow-md":"bg-white border border-accent shadow-neutral  skill"}

//             `}
//           >
//             <h1 className={`text-3xl font-bold mb-4  ${toggleColor?"text-white":"text-gray-800"}`}>
//               Get In Touch
//             </h1>
//             <form onSubmit={sendEmail}>
//               <div className="mb-2">
//                 <label
//                   htmlFor="username"
//                   className={`block  ${!toggleColor?"text-gray-800":"text-white"} font-semibold mb-2`}
//                 >
//                   Username
//                 </label>
//                 <input
//                   type="text"
//                   id="username"
//                   name="username"
//                   value={formData.username}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                   required
//                 />
//               </div>

//               <div className="mb-2">
//                 <label
//                   htmlFor="email"
//                   className={`${toggleColor?"text-white":"text-gray-800"} block font-semibold mb-2`}
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                   required
//                 />
//               </div>

//               <div className="mb-2">
//                 <label
//                   htmlFor="subject"
//                   className={`block ${toggleColor?"text-white":"text-gray-800"} font-semibold mb-2`}
//                 >
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                   required
//                 />
//               </div>

//               <div className="mb-2">
//                 <label
//                   htmlFor="description"
//                   className={`block ${toggleColor?"text-white":"text-gray-800"} font-semibold mb-2`}
//                 >
//                   Description
//                 </label>
//                 <textarea
//                   id="description"
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   rows="4"
//                   className={`w-full px-3 py-2 border ${toggleColor?"text-white":"text-gray-800"}rounded-md focus:outline-none focus:border-blue-500`}
//                   required
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 // className={` ${toggleColor?"btn-info":"btn-accent"} btn text-white w-full px-4 py-2 rounded-md  transition duration-300`}
//                 className={`btn mt-6 ${
//                   toggleColor
//                     ? "text-white btn-success rounded-full border border-info shadow-info shadow-md"
//                     : "rounded-full bg-[#FFFFFF] border border-accent  text-accent uppercase shadow-2xl skill"
//                 } w-full `}
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//           <div data-aos="zoom-in-up" className="hidden lg:block lg:w-1/2 ">
//             <img
//               className="lg:h-[617px]"
//               src="https://i.ibb.co/SnbQmtq/this-removebg-preview.png"
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//     </Element>
//   );
// };

// export default Contact;

/* eslint-disable @next/next/no-img-element */
"use client";
import { ToggleContext } from "@/pages/_app";
import emailjs from "emailjs-com";
import { useState, useContext, useRef, useEffect } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const { toggleColor } = useContext(ToggleContext);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    subject: "",
    description: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const formRef = useRef(null);
  const imageRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const serviceID = "service_oaqee8o";
    const templateID = "template_0rfgi78";
    const userID = "DES6bkYZNvY2Owpzl";

    const templateParams = {
      to_name: formData.username,
      from_email: formData.email,
      from_subject: formData.subject,
      message: formData.description,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log("Email sent successfully:", response);
        setIsSubmitted(true);
        e.target.reset();
        setFormData({
          username: "",
          email: "",
          subject: "",
          description: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  // GSAP animations
  useEffect(() => {
    // Heading animation
    gsap.fromTo(headingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        }
      }
    );

    // Form animation
    gsap.fromTo(formRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.3,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 90%",
        }
      }
    );

    // Image animation
    gsap.fromTo(imageRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.6,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 90%",
        }
      }
    );

    // Floating animation for the contact image
    gsap.to(imageRef.current, {
      y: 20,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "power1.inOut"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <Element name="contact" id="contact">
      <div
        className="relative py-20 px-4 sm:px-6 lg:px-20 overflow-hidden"
        ref={sectionRef}
      >
        {/* Animated background elements */}
        <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-secondary/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 -right-20 w-64 h-64 rounded-full bg-accent/20 blur-3xl animate-pulse-slow"></div>

        <motion.h1
          ref={headingRef}
          className={`text-center text-4xl md:text-5xl mb-16 font-bold ${toggleColor ? "text-info" : "text-success"
            }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          CONTACT ME
        </motion.h1>

        <div className={`flex flex-col lg:flex-row justify-between items-center gap-8 max-w-7xl mx-auto z-10`}>
          <div
            ref={formRef}
            className={`w-full lg:w-1/2 p-8 rounded-2xl backdrop-blur-sm border ${toggleColor
              ? "bg-success/20 border-info shadow-info shadow-lg"
              : "bg-white/80 border-accent shadow-xl"
              }`}
          >
            <motion.h2
              className={`text-3xl font-bold mb-6 ${toggleColor ? "text-white" : "text-gray-800"
                }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {"   Let's Connect"}
            </motion.h2>

            {isSubmitted ? (
              <motion.div
                className={`p-6 rounded-xl mb-6 text-center ${toggleColor
                  ? "bg-info/20 text-white"
                  : "bg-success/10 text-success"
                  }`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <h3 className="text-xl font-bold mt-4">Message Sent Successfully!</h3>
                <p className="mt-2">{"Thank you for reaching out. I'll get back to you soon."}</p>
              </motion.div>
            ) : (
              <form onSubmit={sendEmail} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label
                    htmlFor="username"
                    className={`block ${toggleColor ? "text-white" : "text-gray-700"} font-medium mb-2`}
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 ${toggleColor
                        ? "bg-success/10 text-white border border-info/50 focus:ring-info"
                        : "bg-white text-gray-800 border border-gray-300 focus:ring-accent"
                        }`}
                      placeholder="Enter your name"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label
                    htmlFor="email"
                    className={`block ${toggleColor ? "text-white" : "text-gray-700"} font-medium mb-2`}
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 ${toggleColor
                        ? "bg-success/10 text-white border border-info/50 focus:ring-info"
                        : "bg-white text-gray-800 border border-gray-300 focus:ring-accent"
                        }`}
                      placeholder="Enter your email"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label
                    htmlFor="subject"
                    className={`block ${toggleColor ? "text-white" : "text-gray-700"} font-medium mb-2`}
                  >
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 ${toggleColor
                        ? "bg-success/10 text-white border border-info/50 focus:ring-info"
                        : "bg-white text-gray-800 border border-gray-300 focus:ring-accent"
                        }`}
                      placeholder="What's this about?"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label
                    htmlFor="description"
                    className={`block ${toggleColor ? "text-white" : "text-gray-700"} font-medium mb-2`}
                  >
                    Your Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows="5"
                      className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 ${toggleColor
                        ? "bg-success/10 text-white border border-info/50 focus:ring-info"
                        : "bg-white text-gray-800 border border-gray-300 focus:ring-accent"
                        }`}
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                    <div className="absolute top-3 right-3 flex items-center pr-3 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </motion.div>

                <motion.button
                  type="submit"
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] ${toggleColor
                    ? "bg-gradient-to-r from-info to-secondary text-white hover:shadow-info hover:shadow-lg"
                    : "bg-gradient-to-r from-accent to-success text-white hover:shadow-accent hover:shadow-lg"
                    }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              </form>
            )}
          </div>

          <div
            ref={imageRef}
            className="w-full lg:w-1/2 flex justify-center items-center"
          >
            <div className="relative">
              <img
                className="w-full max-w-md"
                src="https://i.ibb.co/SnbQmtq/this-removebg-preview.png"
                alt="Contact Illustration"
              />

              {/* Floating elements around the image */}
              <motion.div
                className="absolute top-10 -left-6 w-16 h-16 rounded-full bg-secondary/20 backdrop-blur-sm"
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              ></motion.div>

              <motion.div
                className="absolute bottom-10 -right-6 w-12 h-12 rounded-full bg-accent/20 backdrop-blur-sm"
                animate={{
                  y: [0, 15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5
                }}
              ></motion.div>
            </div>
          </div>
        </div>

        {/* Contact info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-7xl mx-auto">
          <motion.div
            className={`p-6 rounded-2xl flex items-center ${toggleColor
              ? "bg-success/20 border border-info/30"
              : "bg-white border border-accent/30"
              }`}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className={`mr-4 p-4 rounded-full ${toggleColor ? "bg-info/20 text-info" : "bg-accent/20 text-accent"
              }`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <div>
              <h3 className={`text-lg font-bold ${toggleColor ? "text-white" : "text-gray-800"}`}>Email</h3>
              <p className={toggleColor ? "text-neutral-300" : "text-gray-600"}>mobarak.hossain@example.com</p>
            </div>
          </motion.div>

          <motion.div
            className={`p-6 rounded-2xl flex items-center ${toggleColor
              ? "bg-success/20 border border-info/30"
              : "bg-white border border-accent/30"
              }`}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
          >
            <div className={`mr-4 p-4 rounded-full ${toggleColor ? "bg-info/20 text-info" : "bg-accent/20 text-accent"
              }`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className={`text-lg font-bold ${toggleColor ? "text-white" : "text-gray-800"}`}>Location</h3>
              <p className={toggleColor ? "text-neutral-300" : "text-gray-600"}>Dhaka, Bangladesh</p>
            </div>
          </motion.div>

          <motion.div
            className={`p-6 rounded-2xl flex items-center ${toggleColor
              ? "bg-success/20 border border-info/30"
              : "bg-white border border-accent/30"
              }`}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
          >
            <div className={`mr-4 p-4 rounded-full ${toggleColor ? "bg-info/20 text-info" : "bg-accent/20 text-accent"
              }`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <div>
              <h3 className={`text-lg font-bold ${toggleColor ? "text-white" : "text-gray-800"}`}>Phone</h3>
              <p className={toggleColor ? "text-neutral-300" : "text-gray-600"}>+880 123 456 7890</p>
            </div>
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;