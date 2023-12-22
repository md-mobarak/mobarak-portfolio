import { Element } from "react-scroll";

/* eslint-disable @next/next/no-img-element */
const Portfolio = () => {
  return (
    <div className="lg:px-10 lg:py-20 px-10 py-10 flex justify-center items-center">
      <div>
        <div className="lg:relative hidden w-full lg:flex justify-center items-center">
          <div className="w-24 h-24 blur-sm  absolute bottom-0  animate-move right-20 opacity-70  rounded-full bg-info "></div>
        </div>
        <h1 className="text-center lg:text-5xl text-3xl my-16 font-bold text-info">
          PORTFOLIO
        </h1>
        <Element name="portfolio" id="portfolio">
          <div>
            <section className="lg:flex justify-around items-center mx-auto space-x-5  ">
              <div
                className=" lg:w-96  w-80 p-5 border border-info rounded-lg"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  className="lg:w-full lg:h-[240px]"
                  src="https://img.freepik.com/free-vector/painting-tools-realistic-set-with-isolated-palette-paint-cans-rollers-paintbrushes-vector-illustration_1284-83331.jpg?w=740&t=st=1703218934~exp=1703219534~hmac=7d25ea42cdf4b2c41afd257fa9a5f5f0773a830bd22f4e1f17a98d47d8cadc08"
                  alt="Card Image"
                />
                <div className=" bg-gradient-to-t from-success via-success to-info w-full p-5  ">
                  <h1 className="text-white text-2xl font-semibold">
                    Painting Services
                  </h1>
                  <p className="text-white text-lg my-3  ">
                    Web Design & Development
                  </p>

                  <button
                    className="btn mt-2 btn-info w-full text-white"
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    Preview
                  </button>
                  <dialog id="my_modal_1" className="modal">
                    <div className="">
                      <div className="bg-success border-2 border-info modal-box rounded-lg shadow-lg overflow-hidden">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle hover:bg-red-500 text-white bg-info btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        {/* Left Side: Image */}
                        <div className="w-full">
                          <img
                            src="https://img.freepik.com/free-vector/workers-painting-wall-blue-color-banner_1262-21516.jpg?w=900&t=st=1703220005~exp=1703220605~hmac=50014d35d17fe1f0ab6296de87285ad857bb3b0ed1f008b4590d558dd1d9fcdb" // Replace with your image URL
                            alt="Project Image"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>

                        {/* Right Side: Portfolio Description, GitHub Links, and Site Link */}
                        <div className="w-full p-6">
                          <h2 className="text-2xl text-info font-semibold mb-4">
                            Project Title
                          </h2>
                          <p className="text-white  mb-4">
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
                              className="btn btn-info btn-outline rounded-full lg:btn-sm btn-xs "
                            >
                              Github-client
                            </a>
                            <a
                              href="https://your-project-site.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-info btn-outline rounded-full lg:btn-sm btn-xs "
                            >
                              Github-server
                            </a>
                            <a
                              href="https://your-project-site.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-info btn-outline rounded-full lg:btn-sm btn-xs "
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
                className=" lg:w-96  w-80 p-5 border border-info rounded-lg"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  className="lg:w-full lg:h-[240px]"
                  src="https://img.freepik.com/free-vector/painting-tools-realistic-set-with-isolated-palette-paint-cans-rollers-paintbrushes-vector-illustration_1284-83331.jpg?w=740&t=st=1703218934~exp=1703219534~hmac=7d25ea42cdf4b2c41afd257fa9a5f5f0773a830bd22f4e1f17a98d47d8cadc08"
                  alt="Card Image"
                />
                <div className=" bg-gradient-to-t from-success via-success to-info w-full p-5  ">
                  <h1 className="text-white text-2xl font-semibold">
                    Painting Services
                  </h1>
                  <p className="text-white text-lg my-3  ">
                    Web Design & Development
                  </p>

                  <button
                    className="btn mt-2 btn-info w-full text-white"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Preview
                  </button>
                  <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <h3 className="font-bold text-lg">Hello!</h3>
                      <p className="py-4">
                        Press ESC key or click on ✕ button to close
                      </p>
                    </div>
                  </dialog>
                </div>
              </div>
              <div
                className=" lg:w-96  w-80 p-5 border border-info rounded-lg"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  className="lg:w-full lg:h-[240px]"
                  src="https://img.freepik.com/free-vector/painting-tools-realistic-set-with-isolated-palette-paint-cans-rollers-paintbrushes-vector-illustration_1284-83331.jpg?w=740&t=st=1703218934~exp=1703219534~hmac=7d25ea42cdf4b2c41afd257fa9a5f5f0773a830bd22f4e1f17a98d47d8cadc08"
                  alt="Card Image"
                />
                <div className=" bg-gradient-to-t from-success via-success to-info w-full p-5  ">
                  <h1 className="text-white text-2xl font-semibold">
                    Painting Services
                  </h1>
                  <p className="text-white text-lg my-3  ">
                    Web Design & Development
                  </p>

                  <button
                    className="btn mt-2 btn-info w-full text-white"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Preview
                  </button>
                  <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <h3 className="font-bold text-lg">Hello!</h3>
                      <p className="py-4">
                        Press ESC key or click on ✕ button to close
                      </p>
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
