/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Home = () => {
  const fixedText = "Mobarak Hossen";
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
    const cvLink =
      "https://drive.google.com/uc?id=1KdVmjN1svufn2MUWvdme7fLpntQ_YEN9";

    // Create an invisible link element
    const downloadLink = document.createElement("a");

    // Set the link's href to the direct link of the file
    downloadLink.href = cvLink;

    // Set the download attribute to specify the file name
    downloadLink.download = "Your_CV.pdf";

    // Append the link to the body and click it programmatically
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Remove the link from the body
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="bg-success h-full w-full">
      <div className="bg-info mx-10 ">
        <Navbar></Navbar>
      </div>
      <div className=" mx-10 h-64  relative bg-gradient-to-b from-info to-success ">
        <div className="w-16 hidden lg:block h-16 blur-sm absolute animate-move  top-10 left-32  rounded-full bg-info "></div>
        <div className="w-10 hidden lg:block  h-10 blur-sm absolute animate-move  top-16 right-24  rounded-full bg-info "></div>
      </div>
      <div className="lg:flex lg:justify-evenly lg:items-center mt-[-200px] lg:mt-[-100px] px-10 lg:space-x-8 lg:px-20">
        <div data-aos="zoom-out-right" className="px-5 lg:px-0">
          <h1 className="text-secondary font-serif font-bold text-3xl lg:text-6xl uppercase">
            {fixedText}
          </h1>
          <div className="">
            <p className="mb-6 mt-5 h-5 text-2xl lg:text-4xl text-info">
              {currentText}
            </p>
          </div>
          <button onClick={handleDownload} class="button-71 my-8" role="button">
            Download CV
          </button>
        </div>
        <div className="relative" data-aos="zoom-out-right">
          <img
            className="profile  mt-20 lg:mt-0 w-[500px] h-[500px]  bg-gradient-to-t from-secondary  via-success to-success"
            src="https://i.ibb.co/dLLQrsY/Riopn-unscreen.gif"
            alt=""
          />
          <div className="w-16 hidden lg:block  h-16 blur-sm absolute animate-move   left-32  rounded-full bg-info "></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
