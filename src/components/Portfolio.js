import { ToggleContext } from "@/pages/_app";
import { Element } from "react-scroll";
import { useContext, useState } from "react";

/* eslint-disable @next/next/no-img-element */
const Portfolio = () => {
  const { toggleColor, setToggleColor } = useContext(ToggleContext);

  const projects = [
    {
      title: "Vehicle Management",
      imageUrl: "https://img.freepik.com/free-vector/user-panel-template-infographic-dashboard_23-2148378206.jpg?t=st=1709706995~exp=1709710595~hmac=70b3068e83be41ab9cccff1f6655eb52118124ccc403aaafd113ae5dbddb1416&w=740",
      description: "Web Design & Development",
      githubClientUrl: "hhttps://github.com/md-mobarak/vehicle_management_system_client",
      githubServerUrl: "https://github.com/md-mobarak/vehicle_management_system_server",
      siteUrl: "https://vehicle-management-frontend-seven.vercel.app/login",
      modalImg:"https://img.freepik.com/free-vector/dashboard-user-panel_23-2148390498.jpg?t=st=1709707485~exp=1709711085~hmac=55075c7ab3c151fcf94a16589b9887dd6e25e906982b62b8c3d2e5ea0fcba6fc&w=740"
    },
    {
      title: "Painting Services",
      imageUrl: "https://img.freepik.com/free-photo/young-builder-man-construction-uniform-safety-helmet-holding-paint-roller-looking-front-happy-positive-showing-thumbs-up-standing-green-wall_141793-64931.jpg?size=626&ext=jpg&ga=GA1.1.832354014.1675511612&semt=ais",
      description: "Web Design & Development",
      githubClientUrl: "https://github.com/md-mobarak/painting-cilents",
      githubServerUrl: "https://github.com/md-mobarak/painting-server",
      siteUrl: "https://painting-client-9.vercel.app/",
      modalImg:"https://img.freepik.com/premium-photo/plaster-painter-is-ready-paint-wall-hands-roller-brush-stepladder-bucket-paint-background_102577-138.jpg?w=740"
    },
    {
      title: "Book Catalogs",
      imageUrl: "https://img.freepik.com/free-photo/cafe-frankfurt-germany_1268-20912.jpg?w=740&t=st=1703920863~exp=1703921463~hmac=0a2917fa9a66bd4ab7433a5887e6b003df48288c6eb95d44f2d2f9132e04e34d",
      description: "Web Design & Development",
      githubClientUrl: "https://github.com/md-mobarak/Simple_Book_Catalog_Application_5",
      githubServerUrl: "https://github.com/md-mobarak/Simple_Book_Catalog_Application_5-server",
      siteUrl: "https://simple-book-catalog-application-5.vercel.app/",
      modalImg: "https://img.freepik.com/free-vector/modern-library-with-bookshelf-illustration_1262-16576.jpg?w=996&t=st=1703945958~exp=1703946558~hmac=7ade679bafa17dc21cd3ffa4dfe5191cc121f848798e58d281a94bc070e4ead9" 
    },
    {
      title: "Designer Portfolio",
      imageUrl: "https://img.freepik.com/premium-psd/personal-portfolio-template_215790-16.jpg?w=740",
      description: "Web Design & Development",
      githubClientUrl: "https://github.com/md-mobarak/next.js_explore_with_portfolio",
      githubServerUrl: "https://github.com/md-mobarak/next.js_explore_with_portfolio",
      siteUrl: "https://next-js-explore-with-portfolio.vercel.app/",
      modalImg:"https://img.freepik.com/premium-psd/photography-online-course-landing-page-website-template-dark-mode_294843-76.jpg?w=826"
    },
    {
      title: "Vape Store",
      imageUrl: "https://img.freepik.com/premium-photo/electronic-cigarette-background-vape-shop-e-cigarette-vaping-popular-vape-devices_572664-35.jpg?w=740",
      description: "Web Design & Development",
      githubClientUrl: "https://github.com/md-mobarak/dubai-online-shop-client",
      githubServerUrl: "https://github.com/md-mobarak/dubai-online-shop-server",
      siteUrl: "https://dubai-online-shop.web.app/",
      modalImg:"https://as1.ftcdn.net/v2/jpg/05/80/72/18/1000_F_580721838_yliwORTD8TmKs3qDACKLh6TwJRP19Uko.jpg"
    },
    {
      title: "Ecommerce Website",
      imageUrl: "https://img.freepik.com/free-vector/online-shopping-landing-page_52683-5991.jpg?t=st=1709706809~exp=1709710409~hmac=814e75bbac4c66acbbe6c7928200578bea03895cd130d2b896af7fc4c7dc8acc&w=740",
      description: "Web Design & Development",
      githubClientUrl: "https://github.com/md-mobarak/shoptronics-clients",
      githubServerUrl: "https://github.com/md-mobarak/shoptronics-server",
      siteUrl: "https://shoptronics-ed9c3.web.app/",
      modalImg:"https://img.freepik.com/free-vector/happy-tiny-people-listening-spiritual-music-near-huge-headphones-web-template_74855-9352.jpg?t=st=1709707370~exp=1709710970~hmac=3233fe17e9c05081119591a254f65c22ae024d336cc6c4ef2ca2f1fe09176035&w=826"
    },
   
  ];

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
            <section className="lg:grid grid-cols-3 gap-x-12 gap-y-10 space-y-10 lg:space-y-0 ">
              {projects?.map((project, index) => (
                <div
                  
                  key={index}
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
                    src={project.imageUrl}
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
                      {project.title}
                    </h1>
                    <p
                      className={`${
                        toggleColor ? "text-white" : "text-success"
                      }   text-lg my-3`}
                    >
                      {project.description}
                    </p>

                    <button
                      className={`btn mt-2 ${
                        toggleColor
                          ? "text-white btn-success rounded-full border border-info shadow-info shadow-md"
                          : "btn rounded-full bg-[#FFFFFF] border border-accent  text-accent uppercase shadow-2xl skill"
                      } w-full `}
                      onClick={() =>
                        document.getElementById(`my_modal_${index + 1}`).showModal()
                      }
                    >
                      Preview
                    </button>
                    <dialog id={`my_modal_${index + 1}`} className="modal ml-4 lg:ml-0 ">
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
                              src={project.modalImg} // Replace with your image URL
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
                              {project.description}
                            </p>

                            {/* GitHub Links */}
                            <div className="flex lg:space-x-4 space-x-2 mb-4 items-center">
                              <a
                                href={project.githubClientUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`btn  ${
                                  toggleColor ? "btn-info" : "btn-success"
                                } btn-outline rounded-full lg:btn-sm btn-xs `}
                              >
                                Github-client
                              </a>
                              <a
                                href={project.githubServerUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`btn  ${
                                  toggleColor ? "btn-info" : "btn-success"
                                } btn-outline rounded-full lg:btn-sm btn-xs `}
                              >
                                Github-server
                              </a>
                              <a
                                href={project.siteUrl}
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
              ))}
            </section>
          </div>
        </Element>
      </div>
    </div>
  );
};

export default Portfolio;
