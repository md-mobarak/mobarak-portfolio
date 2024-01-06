import { ToggleContext } from "@/pages/_app";
import { Element } from "react-scroll";
// import "animate.css";
import { useContext } from "react";

/* eslint-disable @next/next/no-img-element */
const Portfolio = () => {
  const { toggleColor, setToggleColor } = useContext(ToggleContext);
  return (
    <div className="lg:px-10 lg:py-20 px-10 py-10 flex justify-center items-center">
      <div>
        <div className="lg:relative hidden w-full lg:flex justify-center items-center">
          <div
            className={`w-24 h-24 blur-sm  absolute bottom-0  animate-move right-20 opacity-70  rounded-full ${
              toggleColor ? "bg-info" : " hidden"
            }`}
          ></div>
        </div>
        <h1
          className={`text-center lg:text-5xl text-3xl my-16 font-bold ${
            toggleColor ? "text-info" : "text-success"
          } `}
        >
          PORTFOLIO
        </h1>
        <Element name="portfolio" id="portfolio">
          <div>
            <section className="lg:flex md:flex md:flex-wrap lg:justify-around lg:items-center lg:mx-auto lg:space-x-10  ">
              <div
                className={` lg:w-96  w-80 p-5 border ${
                  toggleColor
                    ? "border-info shadow-info shadow-md hover:shadow-lg hover:shadow-info hover:transition duration-300 ease-in-out"
                    : "border-accent shadow-2xl"
                } rounded-lg`}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  className="lg:w-full lg:h-[240px]"
                  src="https://img.freepik.com/free-photo/young-builder-man-construction-uniform-safety-helmet-holding-paint-roller-looking-front-happy-positive-showing-thumbs-up-standing-green-wall_141793-64931.jpg?size=626&ext=jpg&ga=GA1.1.832354014.1675511612&semt=ais"
                  alt="Card Image"
                />
                <div
                  className={`  ${
                    toggleColor
                      ? "bg-gradient-to-t from-success via-success to-info"
                      : "bg-white"
                  } w-full p-5  `}
                >
                  <h1
                    className={`${
                      toggleColor ? "text-white" : "text-success"
                    }  text-2xl font-semibold`}
                  >
                    Painting Services
                  </h1>
                  <p
                    className={`${
                      toggleColor ? "text-white" : "text-success"
                    }   text-lg my-3`}
                  >
                    Web Design & Development
                  </p>

                  <button
                    className={`btn mt-2 ${
                      toggleColor
                        ? "text-white btn-success rounded-full border border-info shadow-info shadow-md"
                        : "btn rounded-full bg-[#FFFFFF] border border-accent  text-accent uppercase shadow-2xl skill"
                    } w-full `}
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    Preview
                  </button>
                  <dialog id="my_modal_1" className="modal ml-4 lg:ml-0 ">
                    <div className="">
                      <div
                        className={`${
                          toggleColor
                            ? "bg-success border-info"
                            : "bg-neutral border-accent"
                        } border-2  modal-box rounded-lg shadow-lg overflow-hidden`}
                      >
                        <form method="dialog">
                          <button
                            className={`btn btn-sm btn-circle hover:bg-red-500 text-white ${
                              toggleColor ? "bg-info" : "bg-accent"
                            } btn-ghost absolute right-2 top-2`}
                          >
                            ✕
                          </button>
                        </form>
                        {/* Left Side: Image */}
                        <div className="w-full">
                          <img
                            src="https://img.freepik.com/premium-photo/plaster-painter-is-ready-paint-wall-hands-roller-brush-stepladder-bucket-paint-background_102577-138.jpg?w=740" // Replace with your image URL
                            alt="Project Image"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>

                        {/* Right Side: Portfolio Description, GitHub Links, and Site Link */}
                        <div className="w-full p-2">
                          <h2
                            className={`text-2xl ${
                              toggleColor ? "text-info" : "text-success"
                            } font-semibold mb-4`}
                          >
                            Project Title
                          </h2>
                          <p
                            className={` ${
                              toggleColor ? "text-white" : "text-accent"
                            }  mb-4`}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>

                          {/* GitHub Links */}
                          <div className="flex lg:space-x-4 space-x-2 mb-4 items-center">
                            <a
                              href="https://your-project-site.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`btn  ${
                                toggleColor ? "btn-info" : "btn-success"
                              } btn-outline rounded-full lg:btn-sm btn-xs `}
                            >
                              Github-client
                            </a>
                            <a
                              href="https://your-project-site.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`btn  ${
                                toggleColor ? "btn-info" : "btn-success"
                              } btn-outline rounded-full lg:btn-sm btn-xs `}
                            >
                              Github-server
                            </a>
                            <a
                              href="https://painting-client-9.vercel.app/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`btn  ${
                                toggleColor ? "btn-info" : "btn-success"
                              } btn-outline rounded-full lg:btn-sm btn-xs `}
                            >
                              Visit Site
                            </a>
                          </div>

                          {/* Site Link Button */}
                        </div>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
              <div
                className={` lg:w-96 lg:my-0 my-14 md:my-0 md:mx-4 w-80 p-5 border ${
                  toggleColor
                    ? "border-info shadow-info shadow-md hover:shadow-lg hover:shadow-info hover:transition duration-300 ease-in-out"
                    : "border-accent shadow-2xl"
                } rounded-lg`}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  className="lg:w-full lg:h-[240px]"
                  src="https://img.freepik.com/free-photo/cafe-frankfurt-germany_1268-20912.jpg?w=740&t=st=1703920863~exp=1703921463~hmac=0a2917fa9a66bd4ab7433a5887e6b003df48288c6eb95d44f2d2f9132e04e34d"
                  alt="Card Image"
                />
                {/* <div className=" bg-gradient-to-t from-success via-success to-info w-full p-5  "> */}
                <div
                  className={`  ${
                    toggleColor
                      ? "bg-gradient-to-t from-success via-success to-info"
                      : "bg-white"
                  } w-full p-5  `}
                >
                  <h1
                    className={`${
                      toggleColor ? "text-white" : "text-success"
                    }  text-2xl font-semibold`}
                  >
                    Book Catelogs
                  </h1>
                  <p
                    className={`${
                      toggleColor ? "text-white" : "text-success"
                    }  text-lg my-3  `}
                  >
                    Web Design & Development
                  </p>

                  <button
                    className={`btn mt-2 ${
                      toggleColor
                        ? "text-white btn-success rounded-full border border-info shadow-info shadow-md"
                        : "btn rounded-full bg-[#FFFFFF] border border-accent  text-accent uppercase shadow-2xl skill"
                    } w-full `}
                    onClick={() =>
                      document.getElementById("my_modal_2").showModal()
                    }
                  >
                    Preview
                  </button>
                  <dialog id="my_modal_2" className="modal ml-4 lg:ml-0">
                    <div className="">
                      <div
                        // className="bg-success border-2 border-info modal-box rounded-lg shadow-lg overflow-hidden"

                        className={`${
                          toggleColor
                            ? "bg-success border-info"
                            : "bg-neutral border-accent"
                        } border-2  modal-box rounded-lg shadow-lg overflow-hidden`}
                      >
                        <form method="dialog">
                          <button
                            // className="btn btn-sm btn-circle hover:bg-red-500 text-white bg-info btn-ghost absolute right-2 top-2"
                            className={`btn btn-sm btn-circle hover:bg-red-500 text-white ${
                              toggleColor ? "bg-info" : "bg-accent"
                            } btn-ghost absolute right-2 top-2`}
                          >
                            ✕
                          </button>
                        </form>
                        {/* Left Side: Image */}
                        <div className="w-full">
                          <img
                            src="https://img.freepik.com/free-vector/modern-library-with-bookshelf-illustration_1262-16576.jpg?w=996&t=st=1703945958~exp=1703946558~hmac=7ade679bafa17dc21cd3ffa4dfe5191cc121f848798e58d281a94bc070e4ead9" // Replace with your image URL
                            alt="Project Image"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>

                        {/* Right Side: Portfolio Description, GitHub Links, and Site Link */}
                        <div className="w-full p-6">
                          <h2
                            // className="text-2xl text-info font-semibold mb-4"
                            className={`text-2xl ${
                              toggleColor ? "text-info" : "text-success"
                            } font-semibold mb-4`}
                          >
                            Project Title
                          </h2>
                          <p
                            className={` ${
                              toggleColor ? "text-white" : "text-accent"
                            }  mb-4`}
                            // className="text-white  mb-4"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>

                          {/* GitHub Links */}
                          <div className="flex lg:space-x-4 space-x-2 mb-4 items-center">
                            <a
                              href="https://your-project-site.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              // className="btn btn-info btn-outline rounded-full lg:btn-sm btn-xs "
                              className={`btn  ${
                                toggleColor ? "btn-info" : "btn-success"
                              } btn-outline rounded-full lg:btn-sm btn-xs `}
                            >
                              Github-client
                            </a>
                            <a
                              href="https://your-project-site.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`btn  ${
                                toggleColor ? "btn-info" : "btn-success"
                              } btn-outline rounded-full lg:btn-sm btn-xs `}
                              // className="btn btn-info btn-outline rounded-full lg:btn-sm btn-xs "
                            >
                              Github-server
                            </a>
                            <a
                              href="https://simple-book-catalog-application-5.vercel.app/"
                              target="_blank"
                              rel="noopener noreferrer"
                              // className="btn btn-info btn-outline rounded-full lg:btn-sm btn-xs "
                              className={`btn  ${
                                toggleColor ? "btn-info" : "btn-success"
                              } btn-outline rounded-full lg:btn-sm btn-xs `}
                            >
                              Visit Site
                            </a>
                          </div>

                          {/* Site Link Button */}
                        </div>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
              <div
                className={` lg:w-96  w-80 p-5 border md:my-10 ${
                  toggleColor
                    ? "border-info shadow-info shadow-md hover:shadow-lg hover:shadow-info hover:transition duration-300 ease-in-out"
                    : "border-accent shadow-2xl"
                } rounded-lg`}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  className="lg:w-full lg:h-[240px]"
                  src="https://img.freepik.com/premium-psd/personal-portfolio-template_215790-16.jpg?w=740"
                  alt="Card Image"
                />
                <div
                  className={`  ${
                    toggleColor
                      ? "bg-gradient-to-t from-success via-success to-info"
                      : "bg-white"
                  } w-full p-5  `}
                >
                  <h1
                    className={`${
                      toggleColor ? "text-white" : "text-success"
                    } text-2xl font-semibold`}
                  >
                    Designer Portfolio
                  </h1>
                  <p
                    className={`${
                      toggleColor ? "text-white" : "text-success"
                    } text-lg my-3  `}
                  >
                    Web Design & Development
                  </p>

                  <button
                    className={`btn mt-2 ${
                      toggleColor
                        ? "text-white btn-success rounded-full border border-info shadow-info shadow-md"
                        : "btn rounded-full bg-[#FFFFFF] border border-accent  text-accent uppercase shadow-2xl skill"
                    } w-full `}
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Preview
                  </button>
                  <dialog id="my_modal_3" className="modal ml-4 lg:ml-0">
                    <div className="">
                      <div
                        className={`${
                          toggleColor
                            ? "bg-success border-info"
                            : "bg-neutral border-accent"
                        } border-2  modal-box rounded-lg shadow-lg overflow-hidden`}
                        // className="bg-success border-2 border-info modal-box rounded-lg shadow-lg overflow-hidden"
                      >
                        <form method="dialog">
                          <button
                            className={`btn btn-sm btn-circle hover:bg-red-500 text-white ${
                              toggleColor ? "bg-info" : "bg-accent"
                            } btn-ghost absolute right-2 top-2`}
                          >
                            ✕
                          </button>
                        </form>
                        {/* Left Side: Image */}
                        <div className="w-full">
                          <img
                            src="https://img.freepik.com/premium-psd/photography-online-course-landing-page-website-template-dark-mode_294843-76.jpg?w=826" // Replace with your image URL
                            alt="Project Image"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>

                        {/* Right Side: Portfolio Description, GitHub Links, and Site Link */}
                        <div className="w-full p-6">
                          <h2
                            className={`text-2xl ${
                              toggleColor ? "text-info" : "text-success"
                            } font-semibold mb-4`}
                          >
                            Project Title
                          </h2>
                          <p
                            className={` ${
                              toggleColor ? "text-white" : "text-accent"
                            }  mb-4`}
                            // className="text-white  mb-4"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>

                          {/* GitHub Links */}
                          <div className="flex lg:space-x-4 space-x-2 mb-4 items-center">
                            <a
                              href="https://your-project-site.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              // className="btn btn-info btn-outline rounded-full lg:btn-sm btn-xs "
                              className={`btn  ${
                                toggleColor ? "btn-info" : "btn-success"
                              } btn-outline rounded-full lg:btn-sm btn-xs `}
                            >
                              Github-client
                            </a>
                            <a
                              href="https://your-project-site.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              // className="btn btn-info btn-outline rounded-full lg:btn-sm btn-xs "
                              className={`btn  ${
                                toggleColor ? "btn-info" : "btn-success"
                              } btn-outline rounded-full lg:btn-sm btn-xs `}
                            >
                              Github-server
                            </a>
                            <a
                              href="https://next-js-explore-with-portfolio.vercel.app/"
                              target="_blank"
                              rel="noopener noreferrer"
                              // className="btn btn-info btn-outline rounded-full lg:btn-sm btn-xs"
                              className={`btn  ${
                                toggleColor ? "btn-info" : "btn-success"
                              } btn-outline rounded-full lg:btn-sm btn-xs `}
                            >
                              Visit Site
                            </a>
                          </div>

                          {/* Site Link Button */}
                        </div>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
            </section>
          </div>
        </Element>
      </div>
    </div>
  );
};

export default Portfolio;
