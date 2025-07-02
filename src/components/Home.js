/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import { ToggleContext } from "@/pages/_app";
import Navbar from "./Navbar";

const Home = () => {
  const { toggleColor, setToggleColor } = useContext(ToggleContext);
  const fixedText = "Hi,I am Mobarak";
  const texts = ["I am a web developer|", "I am a creative programmer|"];
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentText.length === texts[index].length) {
        clearInterval(intervalId);
        // Wait for a moment before clearing text and starting the next phrase
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setCurrentText("");
        }, 1000);
      } else {
        setCurrentText(
          (prevText) => prevText + texts[index][currentText.length]
        );
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, [index, currentText]);
  const handleDownload = () => {
    // Replace this link with the direct link to your CV file
    // const cvLink =
    //   "https://drive.google.com/file/d/1CFHiBNSwu_5BHpoo5L9sEWmbVueGNSUP/view?usp=sharing";

    window.open('https://drive.google.com/file/d/1CFHiBNSwu_5BHpoo5L9sEWmbVueGNSUP/view?usp=sharing', '_blank');
    // Create an invisible link element
    const downloadLink = document.createElement("a");

    // Set the link's href to the direct link of the file
    // downloadLink.href = cvLink;

    // Set the download attribute to specify the file name
    downloadLink.download = "Your_CV.pdf";

    // Append the link to the body and click it programmatically
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Remove the link from the body
    document.body.removeChild(downloadLink);
  };

  return (
    <div
      className={`${toggleColor ? "bg-success" : "bg-neutral"} h-full w-full relative overflow-hidden `}
    >
      <div
        className={`${toggleColor ? "bg-info" : "bg-neutral"}  mx-10  relative`}
      >
        <Navbar></Navbar>
      </div>
      <div
        className={`${toggleColor
          ? "mx-10 h-64  relative bg-gradient-to-b from-info to-success "
          : "mx-10 h-64  relative"
          }`}
      >
        {/* Animated background elements */}
        {/* <div className="absolute top-20 -left-10 w-64 h-64 rounded-full bg-secondary/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 -right-10 w-56 h-56 rounded-full bg-accent/20 blur-3xl animate-pulse-slow"></div> */}

        <div
          className={`w-16 hidden lg:block h-16 blur-sm absolute animate-move opacity-70  top-10 left-32  rounded-full  ${toggleColor ? "bg-info" : "hidden"
            } `}
        ></div>
        <div
          className={`w-10 hidden lg:block  h-10 blur-sm absolute animate-move  top-16 right-24 opacity-70  rounded-full  ${toggleColor ? "bg-info" : "hidden"
            }`}
        ></div>
      </div>
      <div className="lg:flex lg:justify-evenly md:flex md:justify-evenly md:items-center  lg:items-center mt-[-200px] lg:mt-[-100px] px-10 lg:space-x-8 lg:px-20">
        <div data-aos="zoom-out-right" className="px-5 lg:px-0">
          <h1
            className={`font-serif font-bold text-3xl lg:text-5xl uppercase ${!toggleColor
              ? "text-success " // Apply "text-success" class when toggleColor is false
              : " lg:text-info text-gray-200 " // Apply gradient classes when toggleColor is true
              }`}
          >
            {fixedText}
          </h1>

          <div className="">
            <p
              className={`  ${toggleColor ? "text-info" : "text-warning"
                } mb-6 mt-5 h-5 text-2xl lg:text-4xl`}
            >
              {currentText}
            </p>
          </div>
          <button
            onClick={handleDownload}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn  ${toggleColor
              ? " btn-success rounded-full border-2 border-info text-info uppercase shadow-info shadow-2xl "
              : " rounded-full bg-[#FFFFFF] border border-success  text-success uppercase shadow-2xl"
              }  my-8   `}
          >
            Download CV
          </button>
          <div className="flex space-x-4">
            {/* Facebook Button */}
            <Link
              href="https://www.facebook.com/mdmobarak.hossen.96"
              passHref
              className={`${toggleColor
                ? "border-2 shadow-blue-700 shadow-md border-blue-700 p-2 rounded-full"
                : "border-2 shadow-blue-700 shadow-md border-blue-700 p-2 rounded-full"
                }`}
            >
              <button className="text-white bg-blue-700  flex justify-center w-10 h-10 items-center rounded-full">
                <FaFacebook className="w-6 h-6" />
              </button>
            </Link>

            {/* GitHub Button */}
            <Link
              href="https://github.com/md-mobarak"
              passHref
              className={`${toggleColor
                ? "border-2 shadow-white shadow-md border-gray-500 p-2 rounded-full"
                : "border-2 shadow-gray-500 shadow-md border-gray-500 p-2 rounded-full"
                }`}
            >
              <button className="text-white bg-gray-800 flex justify-center w-10 h-10 items-center rounded-full">
                <FaGithub className="w-6 h-6" />
              </button>
            </Link>

            {/* LinkedIn Button */}
            <Link
              href="https://www.linkedin.com/in/mohammad-mobarak-hossen-75b535240/"
              className={`${toggleColor
                ? "border-2 shadow-blue-700 shadow-md border-blue-700 p-2 rounded-full"
                : "border-2 shadow-blue-700 shadow-md border-blue-700 p-2 rounded-full"
                }`}
              passHref
            >
              <button className="text-white bg-blue-700 flex justify-center w-10 h-10 items-center rounded-full">
                <FaLinkedin className="w-6 h-6" />
              </button>
            </Link>

            {/* Instagram Button */}
            <Link
              className={`${toggleColor
                ? "border-2 shadow-orange-700 shadow-md border-yellow-700 p-2 rounded-full"
                : "border-2 shadow-orange-700 shadow-md border-yellow-700 p-2 rounded-full"
                }`}
              href="https://www.instagram.com/your_instagram_username/"
              passHref
            >
              <button className="text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 flex justify-center w-10 h-10 items-center rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring focus:border-blue-300 transition-all">
                <FaInstagram className="w-6 h-6" />
              </button>
            </Link>
          </div>
        </div>
        <div className="relative " data-aos="zoom-out-right">
          <img
            className={`  mt-20 lg:mt-0 lg:w-[500px] lg:h-[500px] h-[400px]  md:w-[350px] md:h-[350px]  ${toggleColor
              ? "bg-gradient-to-t from-info  via-success to-success profile border border-info"
              : " lg:rounded-full rounded-2xl p-8  bg:white skill md:rounded-full"
              }`}
            src={`${toggleColor
              ? "https://dbaasltd.com/assets/img/what-we-deliver.gif"
              : "https://dbaasltd.com/assets/img/what-we-deliver.gif"
              } `}
            alt=""
          />
          <div
            className={`w-16 hidden lg:block  h-16 blur-sm absolute animate-move opacity-70   left-32  rounded-full  ${toggleColor ? "bg-info" : "hidden"
              } `}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
