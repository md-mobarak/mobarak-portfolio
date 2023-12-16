import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="px-20">
      <div className="cursor-pointer bg-gradient-to-t from-info via-success to-success mt-20 border-t-2 py-10 px-20 border-info  lg:grid grid-cols-4 space-x-6">
        <div className="w-1/2">
          <h1 className="text-info text-3xl my-3">MOBARAK</h1>
          <p className="text-justify text-white">
            When I am working on a problem I never think about beauty but when I
            have finished, if the solution is not beautiful, I know it is wrong
          </p>
        </div>
        <div className="w-1/2 ">
          <h1 className="text-info text-3xl my-3">Links</h1>
          <p className="text-white mb-2 hover:text-info"> Home</p>
          <p className="text-white mb-2 hover:text-info"> Portfolio</p>
          <p className="text-white mb-2 hover:text-info"> About</p>
          <p className="text-white mb-2 hover:text-info"> Skills</p>
          <p className="text-white mb-2 hover:text-info"> Services</p>
          <p className="text-white mb-2 hover:text-info"> Contact</p>
        </div>
        <div className="w-1/2">
          <h1 className="text-info text-3xl my-3">Services</h1>
          <p className="text-white mb-2 hover:text-info">Web Development</p>
          <p className="text-white mb-2 hover:text-info"> Web Design</p>
          <p className="text-white mb-2 hover:text-info"> Business Strategy</p>
        </div>
        <div className="w-1/2 hover:text-info">
          <h1 className="text-info text-3xl my-3">Address</h1>
          <div className="flex space-x-4 items-center hover:text-info text-white mb-2">
            <FaLocationDot className="h-5 w-5"></FaLocationDot>
            <span>Bangladesh</span>
          </div>
          <div className="flex space-x-4 hover:text-info items-center text-white mb-2">
            <p>
              <FaPhoneAlt className="h-5 w-5"></FaPhoneAlt>
            </p>
            <p> +8801825639631</p>
          </div>
          <div className="flex space-x-4 hover:text-info items-center text-white mb-2">
            <p>
              <IoMail className="h-5 w-5"></IoMail>
            </p>
            <p>Riponbhai782@gmail.com</p>
          </div>
        </div>
      </div>
      <p className="text-center text-white border-t border-white bg-info pb-5 text-xl ">
        Copyright © 2023. All Rights Reserved.
        <span className="text-red-500">❤</span>
      </p>
    </div>
  );
};

export default Footer;
