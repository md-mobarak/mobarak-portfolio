// /* eslint-disable jsx-a11y/alt-text */
// import { ToggleContext } from "@/pages/_app";
// import { Element } from "react-scroll";
// import { useContext, useState } from "react";

// /* eslint-disable @next/next/no-img-element */
// const Portfolio = () => {
//   const { toggleColor, setToggleColor } = useContext(ToggleContext);

//   const projects = [
//     {
//       title: "Vehicle Management",
//       imageUrl:
//         "https://img.freepik.com/free-vector/user-panel-template-infographic-dashboard_23-2148378206.jpg?t=st=1709706995~exp=1709710595~hmac=70b3068e83be41ab9cccff1f6655eb52118124ccc403aaafd113ae5dbddb1416&w=740",
//       description: "Web Design & Development ",
//       githubClientUrl:
//         "hhttps://github.com/md-mobarak/vehicle_management_system_client",
//       githubServerUrl:
//         "https://github.com/md-mobarak/vehicle_management_system_server",
//       siteUrl: "https://vehicle-management-frontend-seven.vercel.app/login",
//       modalImg: "https://img.freepik.com/free-vector/user-panel-template-infographic-dashboard_23-2148378206.jpg?t=st=1709706995~exp=1709710595~hmac=70b3068e83be41ab9cccff1f6655eb52118124ccc403aaafd113ae5dbddb1416&w=740",
//     },
//     {
//       title: "Painting Services",
//       imageUrl:
//         "https://img.freepik.com/free-photo/young-builder-man-construction-uniform-safety-helmet-holding-paint-roller-looking-front-happy-positive-showing-thumbs-up-standing-green-wall_141793-64931.jpg?size=626&ext=jpg&ga=GA1.1.832354014.1675511612&semt=ais",
//       description: "Web Design & Development",
//       githubClientUrl: "https://github.com/md-mobarak/painting-cilents",
//       githubServerUrl: "https://github.com/md-mobarak/painting-server",
//       siteUrl: "https://painting-client-9.vercel.app/",
//       modalImg:
//         "https://img.freepik.com/premium-photo/plaster-painter-is-ready-paint-wall-hands-roller-brush-stepladder-bucket-paint-background_102577-138.jpg?w=740",
//     },
//     {
//       title: "Book Catalogs",
//       imageUrl:
//         "https://img.freepik.com/free-photo/cafe-frankfurt-germany_1268-20912.jpg?w=740&t=st=1703920863~exp=1703921463~hmac=0a2917fa9a66bd4ab7433a5887e6b003df48288c6eb95d44f2d2f9132e04e34d",
//       description: "Web Design & Development",
//       githubClientUrl:
//         "https://github.com/md-mobarak/Simple_Book_Catalog_Application_5",
//       githubServerUrl:
//         "https://github.com/md-mobarak/Simple_Book_Catalog_Application_5-server",
//       siteUrl: "https://simple-book-catalog-application-5.vercel.app/",
//       modalImg:
//         "https://img.freepik.com/free-vector/modern-library-with-bookshelf-illustration_1262-16576.jpg?w=996&t=st=1703945958~exp=1703946558~hmac=7ade679bafa17dc21cd3ffa4dfe5191cc121f848798e58d281a94bc070e4ead9",
//     },
//     {
//       title: "Designer Portfolio",
//       imageUrl:
//         "https://img.freepik.com/premium-psd/personal-portfolio-template_215790-16.jpg?w=740",
//       description: "Web Design & Development",
//       githubClientUrl:
//         "https://github.com/md-mobarak/next.js_explore_with_portfolio",
//       githubServerUrl:
//         "https://github.com/md-mobarak/next.js_explore_with_portfolio",
//       siteUrl: "https://next-js-explore-with-portfolio.vercel.app/",
//       modalImg:
//         "https://img.freepik.com/premium-psd/photography-online-course-landing-page-website-template-dark-mode_294843-76.jpg?w=826",
//     },
//     {
//       title: "Vape Store",
//       imageUrl:
//         "https://img.freepik.com/premium-photo/electronic-cigarette-background-vape-shop-e-cigarette-vaping-popular-vape-devices_572664-35.jpg?w=740",
//       description: "Web Design & Development",
//       githubClientUrl: "https://github.com/md-mobarak/dubai-online-shop-client",
//       githubServerUrl: "https://github.com/md-mobarak/dubai-online-shop-server",
//       siteUrl: "https://dubai-online-shop.web.app/",
//       modalImg:
//         "https://as1.ftcdn.net/v2/jpg/05/80/72/18/1000_F_580721838_yliwORTD8TmKs3qDACKLh6TwJRP19Uko.jpg",
//     },
//     {
//       title: "Ecommerce Website",
//       imageUrl:
//         "https://img.freepik.com/free-vector/online-shopping-landing-page_52683-5991.jpg?t=st=1709706809~exp=1709710409~hmac=814e75bbac4c66acbbe6c7928200578bea03895cd130d2b896af7fc4c7dc8acc&w=740",
//       description: "Web Design & Development",
//       githubClientUrl: "https://github.com/md-mobarak/shoptronics-clients",
//       githubServerUrl: "https://github.com/md-mobarak/shoptronics-server",
//       siteUrl: "https://shoptronics-ed9c3.web.app/",
//       modalImg:
//         "https://img.freepik.com/free-vector/happy-tiny-people-listening-spiritual-music-near-huge-headphones-web-template_74855-9352.jpg?t=st=1709707370~exp=1709710970~hmac=3233fe17e9c05081119591a254f65c22ae024d336cc6c4ef2ca2f1fe09176035&w=826",
//     },
//   ];

//   return (
//     <div className="lg:px-10 lg:py-20 px-10 py-10 flex justify-center items-center">
//       <div>
//         <div className="lg:relative hidden w-full lg:flex justify-center items-center">
//           <div
//             className={`w-24 h-24 blur-sm  absolute bottom-0  animate-move right-20 opacity-70  rounded-full ${
//               toggleColor ? "bg-info" : " hidden"
//             }`}
//           ></div>
//         </div>
//         <h1
//           className={`text-center lg:text-5xl text-3xl my-16 font-bold ${
//             toggleColor ? "text-info" : "text-success"
//           } `}
//         >
//           PORTFOLIO
//         </h1>
//         <Element name="portfolio" id="portfolio">
//           <div>
//             <section className="lg:grid grid-cols-3 gap-x-12 gap-y-10 space-y-10 lg:space-y-0 ">
//               {projects?.map((project, index) => (
//                 <div
//                   key={index}
//                   className={` lg:w-96  w-80 p-5 border ${
//                     toggleColor
//                       ? "border-info shadow-info shadow-md hover:shadow-lg hover:shadow-info hover:transition duration-300 ease-in-out"
//                       : "border-accent shadow-2xl"
//                   } rounded-lg`}
//                   data-aos="fade-up"
//                   data-aos-duration="1000"
//                 >
//                   <img
//                     className="lg:w-full lg:h-[240px]"
//                     src={project.imageUrl}
//                     alt="Card Image"
//                   />

//                   <div
//                     className={`  ${
//                       toggleColor
//                         ? "bg-gradient-to-t from-success via-success to-info"
//                         : "bg-white"
//                     } w-full p-5  `}
//                   >
//                     <h1
//                       className={`${
//                         toggleColor ? "text-white" : "text-success"
//                       }  text-2xl font-semibold`}
//                     >
//                       {project.title} 
//                     </h1>
//                     <p
//                       className={`${
//                         toggleColor ? "text-white" : "text-success"
//                       }   text-lg my-3`}
//                     >
//                       {project.description}
//                     </p>

//                     <button
//                       className={`btn mt-2 ${
//                         toggleColor
//                           ? "text-white btn-success rounded-full border border-info shadow-info shadow-md"
//                           : "btn rounded-full bg-[#FFFFFF] border border-accent  text-accent uppercase shadow-2xl skill"
//                       } w-full `}
//                       onClick={() =>
//                         document
//                           .getElementById(`my_modal_${index + 1}`)
//                           .showModal()
//                       }
//                     >
//                       Preview
//                     </button>
//                     <dialog
//                       id={`my_modal_${index + 1}`}
//                       className="modal  lg:ml-0 "
//                     >
//                       <div className="">
//                         <div
//                           className={`${
//                             toggleColor
//                               ? "bg-success border-info"
//                               : "bg-neutral border-accent"
//                           } border-2  modal-box rounded-lg shadow-lg overflow-hidden w-full h-full`}
//                         >
//                           <form method="dialog">
//                             <button
//                               className={`btn btn-sm btn-circle hover:bg-red-500 text-white ${
//                                 toggleColor ? "bg-info" : "bg-accent"
//                               } btn-ghost absolute right-2 top-1 z-50`}
//                             >
//                               ✕
//                             </button>
//                           </form>
//                           {/* Left Side: Image */}
//                           <div className="w-full flex justify-center  items-center">
//                             {/* <div class="content">
//                               <div class="screen">
//                                 <img className="cursor-pointer" src={project?.modalImg} />
//                               </div>
//                             </div> */}

//                             { 


//                           <img
//                               src={project.modalImg} // Replace with your image URL
//                               alt="Project Image"
//                               className="w-full h-full object-cover rounded-lg"
//                             /> 
//                             }
//                           </div>

//                           {/* Right Side: Portfolio Description, GitHub Links, and Site Link */}
//                           <div className="w-full p-2">
//                             <h2
//                               className={`text-2xl ${
//                                 toggleColor ? "text-info" : "text-success"
//                               } font-semibold mb-4`}
//                             >
//                               Project Title
//                             </h2>
//                             <p
//                               className={` ${
//                                 toggleColor ? "text-white" : "text-accent"
//                               }  mb-4`}
//                             >
//                               {project.description .length > 70 ?"Your M0 free tier cluster, Cluster0, has been idle since 2024/03/21.MongoDB Atlas will automatically pause this cluster after 60 days of inactivity, at 10:25 PM EDT on 2024/05/21.To prevent this cluster from being paused, initiate a connection to your cluster before 2024/05/21. View our documentation for instructions on how to connect to your cluster.":project.description}
//                             </p>

//                             {/* GitHub Links */}
//                             <div className="flex  mb-4 items-center gap-x-3">
//                               <a
//                                 href={project.githubClientUrl}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className={`btn  ${
//                                   toggleColor ? "btn-info" : "btn-success"
//                                 } btn-outline rounded-full btn-xs `}
//                               >
//                                 Github-client
//                               </a>
//                               <a
//                                 href={project.githubServerUrl}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className={`btn  ${
//                                   toggleColor ? "btn-info" : "btn-success"
//                                 } btn-outline rounded-full btn-xs `}
//                               >
//                                 Github-server
//                               </a>
//                               <a
//                                 href={project.siteUrl}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className={`btn  ${
//                                   toggleColor ? "btn-info" : "btn-success"
//                                 } btn-outline rounded-full  btn-xs`}
//                               >
//                                 Visit Site
//                               </a>
//                             </div>

//                             {/* Site Link Button */}
//                           </div>
//                         </div>
//                       </div>
//                     </dialog>
//                   </div>
//                 </div>
//               ))}
//             </section>
//           </div>
//         </Element>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;


/* eslint-disable jsx-a11y/alt-text */
import { ToggleContext } from "@/pages/_app";
import { Element } from "react-scroll";
import { useContext, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const { toggleColor } = useContext(ToggleContext);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  const projects = [
    {
      title: "Vehicle Management Services Platform",
      imageUrl: "https://img.freepik.com/free-vector/user-panel-template-infographic-dashboard_23-2148378206.jpg",
      description: "A comprehensive system for managing vehicle fleets, maintenance schedules, and driver assignments",
      githubClientUrl: "https://github.com/md-mobarak/vehicle_management_system_client",
      githubServerUrl: "https://github.com/md-mobarak/vehicle_management_system_server",
      siteUrl: "https://vehicle-management-frontend-seven.vercel.app/login",
      modalImg: "https://img.freepik.com/free-vector/user-panel-template-infographic-dashboard_23-2148378206.jpg",
      tags: ["React", "Node.js", "MongoDB", "Express", "Typescript", "Prisma", "Redux"]
    },
    {
      title: "Arabian Elegance–E-Commerce Platform",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa2MBfhJFFY6fi8_OGM_6TmKY6sbsa2FVNcg&s",
      description: "A full-stack, scalable, and role-based (Admin, Manager, User) e-commerce platform with GSAP-enhanced UI/UX. Features include advanced product filtering, dashboard analytics, order & user management.",
      githubClientUrl: "https://github.com/md-mobarak/Arabian_eleganceBD_client",
      githubServerUrl: "https://github.com/md-mobarak/arabian-elegance-backend2",
      siteUrl: "https://arabian-elegance-client.vercel.app/",
      modalImg: "https://images04.nicepage.com/feature/612016/ecommerce-websites.jpg",
      tags: ["Next js", "Node.js", "MongoDB", "Express", "Mongoose", "Typescript", "Prisma", "React Query"]
    },
    {
      title: "Painting Services Services Platform",
      imageUrl: "https://img.freepik.com/free-photo/young-builder-man-construction-uniform-safety-helmet-holding-paint-roller-looking-front-happy-positive-showing-thumbs-up-standing-green-wall_141793-64931.jpg",
      description: "Platform connecting customers with professional painting services for homes and businesses",
      githubClientUrl: "https://github.com/md-mobarak/painting-cilents",
      githubServerUrl: "https://github.com/md-mobarak/painting-server",
      siteUrl: "https://painting-client-9.vercel.app/",
      modalImg: "https://img.freepik.com/premium-photo/plaster-painter-is-ready-paint-wall-hands-roller-brush-stepladder-bucket-paint-background_102577-138.jpg",
      tags: ["Next.js", "Firebase", "Tailwind CSS", "PostgreSQL", "Prisma", "Redux", "Typescript"]
    },
    {
      title: "Book Catalogs",
      imageUrl: "https://img.freepik.com/free-photo/cafe-frankfurt-germany_1268-20912.jpg",
      description: "Digital catalog for book enthusiasts to discover, review, and organize their reading lists",
      githubClientUrl: "https://github.com/md-mobarak/Simple_Book_Catalog_Application_5",
      githubServerUrl: "https://github.com/md-mobarak/Simple_Book_Catalog_Application_5-server",
      siteUrl: "https://simple-book-catalog-application-5.vercel.app/",
      modalImg: "https://img.freepik.com/free-vector/modern-library-with-bookshelf-illustration_1262-16576.jpg",
      tags: ["React", "Redux", "API Integration"]
    },

    {
      title: "Vape Store",
      imageUrl: "https://img.freepik.com/premium-photo/electronic-cigarette-background-vape-shop-e-cigarette-vaping-popular-vape-devices_572664-35.jpg",
      description: "E-commerce platform for vaping products with inventory management and secure checkout",
      githubClientUrl: "https://github.com/md-mobarak/dubai-online-shop-client",
      githubServerUrl: "https://github.com/md-mobarak/dubai-online-shop-server",
      siteUrl: "https://dubai-online-shop.web.app/",
      modalImg: "https://as1.ftcdn.net/v2/jpg/05/80/72/18/1000_F_580721838_yliwORTD8TmKs3qDACKLh6TwJRP19Uko.jpg",
      tags: ["React", "Firebase", "Stripe"]
    },
    {
      title: "Ecommerce Website",
      imageUrl: "https://img.freepik.com/free-vector/online-shopping-landing-page_52683-5991.jpg",
      description: "Full-featured online store with product listings, cart functionality, and payment processing",
      githubClientUrl: "https://github.com/md-mobarak/shoptronics-clients",
      githubServerUrl: "https://github.com/md-mobarak/shoptronics-server",
      siteUrl: "https://shoptronics-ed9c3.web.app/",
      modalImg: "https://img.freepik.com/free-vector/happy-tiny-people-listening-spiritual-music-near-huge-headphones-web-template_74855-9352.jpg",
      tags: ["MERN Stack", "JWT Auth", "Responsive Design"]
    },
  ];

  // GSAP animations
  useEffect(() => {
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

    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 flex justify-center items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-secondary/20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 -right-20 w-64 h-64 rounded-full bg-accent/20 blur-3xl animate-pulse-slow"></div>

      <div className="max-w-7xl w-full z-10">
        <motion.h1
          ref={headingRef}
          className={`text-center text-4xl md:text-5xl font-bold mb-16 ${toggleColor ? "text-info" : "text-success"
            }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          PORTFOLIO
        </motion.h1>

        <Element name="portfolio" id="portfolio">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                ref={el => cardsRef.current[index] = el}
                className={`group relative rounded-2xl overflow-hidden ${toggleColor
                  ? "bg-gradient-to-br from-success/10 to-info/10 border border-info/30"
                  : "bg-white border border-accent/30"
                  } shadow-xl hover:shadow-2xl transition-all duration-500`}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`text-xs px-2 py-1 rounded-full ${toggleColor
                          ? "bg-info/20 text-info"
                          : "bg-accent/20 text-accent"
                          }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className={`text-xl font-bold mb-2 ${toggleColor ? "text-white" : "text-success"
                    }`}>
                    {project.title}
                  </h3>

                  <p className={`text-sm mb-4 ${toggleColor ? "text-neutral-300" : "text-success/80"
                    }`}>
                    {project.description.slice(0, 40)}...
                  </p>

                  <div className="flex space-x-3 mt-6">
                    <a
                      href={project.githubClientUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 text-center py-2 px-4 rounded-full text-xs font-medium transition-all ${toggleColor
                        ? "bg-info/10 text-info hover:bg-info/20"
                        : "bg-accent/10 text-accent hover:bg-accent/20"
                        }`}
                    >
                      Client
                    </a>
                    <a
                      href={project.githubServerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 text-center py-2 px-4 rounded-full text-xs font-medium transition-all ${toggleColor
                        ? "bg-info/10 text-info hover:bg-info/20"
                        : "bg-accent/10 text-accent hover:bg-accent/20"
                        }`}
                    >
                      Server
                    </a>
                    <a
                      href={project.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 text-center py-2 px-4 rounded-full text-xs font-medium transition-all ${toggleColor
                        ? "bg-secondary text-success hover:bg-secondary/90"
                        : "bg-success text-white hover:bg-success/90"
                        }`}
                    >
                      Live Site
                    </a>
                  </div>
                </div>

                {/* Floating action button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center ${toggleColor
                    ? "bg-info/90 text-white"
                    : "bg-accent/90 text-white"
                    } shadow-lg`}
                  onClick={() => document.getElementById(`my_modal_${index}`).showModal()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </motion.button>

                {/* Modal */}
                <dialog id={`my_modal_${index}`} className="modal">
                  <div className="modal-box max-w-4xl p-0 rounded-2xl overflow-hidden">
                    <div className="relative">
                      <Image
                        src={project.modalImg}
                        alt={project.title}
                        width={800}
                        height={450}
                        className="w-full h-64 object-cover"
                      />

                      <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white bg-black/30 hover:bg-black/50">
                          ✕
                        </button>
                      </form>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2 text-success">{project.title}</h3>
                      <p className="mb-6 text-success/80">{project.description}</p>

                      <div className="flex flex-wrap gap-4">
                        <a
                          href={project.githubClientUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline btn-sm rounded-full flex items-center gap-2"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          Client Code
                        </a>

                        <a
                          href={project.githubServerUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline btn-sm rounded-full flex items-center gap-2"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          Server Code
                        </a>

                        <a
                          href={project.siteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-success text-white btn-sm rounded-full flex items-center gap-2"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                          View Live
                        </a>
                      </div>
                    </div>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </motion.div>
            ))}
          </div>
        </Element>

        <div className="text-center mt-16">
          <motion.a
            href="https://github.com/md-mobarak"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block px-8 py-3 rounded-full font-medium ${toggleColor
              ? "bg-gradient-to-r from-info to-secondary text-success hover:from-info/90 hover:to-secondary/90"
              : "bg-gradient-to-r from-accent to-success text-white hover:from-accent/90 hover:to-success/90"
              } shadow-lg`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects on GitHub
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;