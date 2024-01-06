/* eslint-disable @next/next/no-img-element */
import { ToggleContext } from "@/pages/_app";
import emailjs from "emailjs-com";
import { useState } from "react";
import { Element } from "react-scroll";

// import "animate.css";
import { useContext } from "react";
const Contact = () => {
  const { toggleColor, setToggleColor } = useContext(ToggleContext);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const sendEmail = () => {
  //   e.preventDefault();
  //   // Your EmailJS service ID
  //   const serviceID = "service_oaqee8o";

  //   // Your EmailJS template ID
  //   const templateID = "template_0rfgi78";

  //   // Your EmailJS user ID
  //   const userID = "DES6bkYZNvY2Owpzl";

  //   // Define template parameters
  //   const templateParams = {
  //     to_name: formData.username,
  //     from_email: formData.email,
  //     from_subject: formData.subject,
  //     message: formData.description,
  //   };

  //   // Use the send function to send the email
  //   emailjs
  //     .send(serviceID, templateID, templateParams, userID)
  //     .then((response) => {
  //       console.log("Email sent successfully:", response);
  //     })
  //     .catch((error) => {
  //       console.error("Error sending email:", error);
  //     });
  // };
  const sendEmail = (e) => {
    e.preventDefault(); // <-- Define 'e' as the event parameter
    // Your EmailJS service ID
    const serviceID = "service_oaqee8o";

    // Your EmailJS template ID
    const templateID = "template_0rfgi78";

    // Your EmailJS user ID
    const userID = "DES6bkYZNvY2Owpzl";

    // Define template parameters
    const templateParams = {
      to_name: formData.username,
      from_email: formData.email,
      from_subject: formData.subject,
      message: formData.description,
    };

    // Use the send function to send the email
    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log("Email sent successfully:", response);
        // Reset the form
        e.target.reset();
        setFormData({
          username: "",
          email: "",
          subject: "",
          description: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <Element name="contact" id="contact">
      <div className=" lg:px-20 px-10 ">
        <h1
          className={`text-center lg:text-5xl text-3xl mb-10 uppercase font-bold ${
            toggleColor ? "text-info" : "text-success"
          }`}
        >
          Contact
        </h1>

        <div
          className={`lg:flex justify-between  items-center lg:p-10 space-x-4  ${
            toggleColor
              ? "bg-success"
              : "  bg-nuetral"
          } `}
        >
          <div data-aos="zoom-in-up" className=" lg:hidden lg:w-1/2  md:flex justify-center">
            <img
              className="lg:h-[617px]"
              src="https://i.ibb.co/SnbQmtq/this-removebg-preview.png"
              alt=""
            />
          </div>
          <div
            data-aos="zoom-in-up"
            className={`  lg:w-1/2  p-8 rounded-xl
            ${toggleColor?"bg-success border-2 border-info shadow-info shadow-md":"bg-white border border-accent shadow-neutral  skill"}
            
            `}
          >
            <h1 className={`text-3xl font-bold mb-4  ${toggleColor?"text-white":"text-gray-800"}`}>
              Get In Touch
            </h1>
            <form onSubmit={sendEmail}>
              <div className="mb-2">
                <label
                  htmlFor="username"
                  className={`block  ${!toggleColor?"text-gray-800":"text-white"} font-semibold mb-2`}
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="email"
                  className={`${toggleColor?"text-white":"text-gray-800"} block font-semibold mb-2`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="subject"
                  className={`block ${toggleColor?"text-white":"text-gray-800"} font-semibold mb-2`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="description"
                  className={`block ${toggleColor?"text-white":"text-gray-800"} font-semibold mb-2`}
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-3 py-2 border ${toggleColor?"text-white":"text-gray-800"}rounded-md focus:outline-none focus:border-blue-500`}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                // className={` ${toggleColor?"btn-info":"btn-accent"} btn text-white w-full px-4 py-2 rounded-md  transition duration-300`}
                className={`btn mt-6 ${
                  toggleColor
                    ? "text-white btn-success rounded-full border border-info shadow-info shadow-md"
                    : "rounded-full bg-[#FFFFFF] border border-accent  text-accent uppercase shadow-2xl skill"
                } w-full `}
              >
                Submit
              </button>
            </form>
          </div>
          <div data-aos="zoom-in-up" className="hidden lg:block lg:w-1/2 ">
            <img
              className="lg:h-[617px]"
              src="https://i.ibb.co/SnbQmtq/this-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
