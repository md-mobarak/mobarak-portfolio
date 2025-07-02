// /* eslint-disable react/jsx-key */
// /* eslint-disable @next/next/no-img-element */
// import { ToggleContext } from "@/pages/_app";
// import "animate.css";
// import { useContext, useEffect, useState } from "react";
// const Skills = () => {
//   const { toggleColor, setToggleColor } = useContext(ToggleContext);
//   const skills = [
//     {
//       title: "JavaScript",
//       img: "https://cdn-icons-png.freepik.com/256/5968/5968292.png?ga=GA1.1.255250215.1707802278&",
//       level: "intermediate",
//     },
//     {
//       title: "TypeScript",
//       img: "https://cdn-icons-png.freepik.com/256/5968/5968381.png?ga=GA1.1.255250215.1707802278&",
//       level: "intermediate",
//     },
//     {
//       title: "HTML",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC0z5GIxN4A3unuAXvfsNwGxfRSb-stXD6_Ijnj29asA&s",
//       level: "Expert",
//     },
//     {
//       title: "CSS",
//       img: "https://cdn-icons-png.freepik.com/256/919/919826.png?ga=GA1.1.255250215.1707802278&",
//       level: "Expert",
//     },
//     {
//       title: "Tailwind CSS",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0pbncIahpITK7hFGSNJGTQaTTxrDRfDkLcFjLx3F9Rw&s",
//       level: "Expert",
//     },
//     {
//       title: "Bootstrap",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC5AfYDOZ93v0-z6bSVx1WBJwHcI2zf68hm7wtDWg0SA&s",
//       level: "Expert",
//     },
//     {
//       title: "Ant Design",
//       img: "https://seeklogo.com/images/A/ant-design-logo-EAB6B3D5D9-seeklogo.com.png",
//       level: "Familiar",
//     },
//     {
//       title: "Firebase",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8mefb_aa60PtDPiWHqjZFp2okdwc4HNspC-JWo2O0Yw&s",
//       level: "intermediate",
//     },
//     {
//       title: "Mongoose",
//       img: "https://branditechture.agency/brand-logos/wp-content/uploads/2022/08/Mongoose-1024x768.png",
//       level: "Expert",
//     },
//     {
//       title: "PostgreSQL",
//       img: "https://w7.pngwing.com/pngs/441/460/png-transparent-postgresql-plain-wordmark-logo-icon-thumbnail.png",
//       level: "intermediate",
//     },
//     {
//       title: "Prisma",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzq3YV8NjsiFDsxxNnXrlGcTmsH0MMnB-NYKvO_tmxMA&s",
//       level: "intermediate",
//     },
//     {
//       title: "React.js",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCFg3KVEaYFGRRkTwho0inHVrcRCl8JiW1W0Z4ezGZLA&s",
//       level: "Expert",
//     },
//     {
//       title: "Next.js",
//       img: "https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png",
//       level: "intermediate",
//     },
//     {
//       title: "React Router",
//       img: "https://reactrouter.com/_brand/react-router-stacked-color.png",
//       level: "Expert",
//     },
//     {
//       title: "MongoDB",
//       img: "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png",
//       level: "Expert",
//     },
//     {
//       title: "Redis",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3ogvWOszeaLZTx33uY_nE0cH3073Bbf069Qc14aJXw&s",
//       level: "Familiar",
//     },
//     {
//       title: "Express js",
//       img: "https://w7.pngwing.com/pngs/212/722/png-transparent-web-development-express-js-javascript-software-framework-laravel-world-wide-web-purple-blue-text.png",
//       level: "intermediate",
//     },
//     {
//       title: "Node js",
//       img: "https://e7.pngegg.com/pngimages/306/37/png-clipart-node-js-logo-node-js-javascript-web-application-express-js-computer-software-others-miscellaneous-text-thumbnail.png",
//       level: "intermediate",
//     },
//     // Add more skills as needed
//   ];

//   return (
//     <div className="my-16">
//       <section className="py-16 px-10 ">
//         <div className="mx-auto">
//           <h2
//             className={`lg:text-5xl  lg:mt-0 mt-20 text-3xl font-bold ${
//               toggleColor ? "text-info" : "text-success"
//             } text-center mb-16 uppercase`}
//           >
//             My Skills
//           </h2>
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
//             {skills?.map((skill, index) => {
//             return  !toggleColor ? (
//                 <div
//                   key={index}
//                   data-aos="fade-up"
//                   data-aos-duration="1000"
//                   className={` 
//                   ${
//                     !toggleColor
//                       ? " bg-white"
//                       : "bg-success border border-info shadow-info shadow-md"
//                   }
//                   rounded-lg shadow-md p-4 flex items-center justify-between`}
//                 >
//                   <img
//                     src={`${skill?.img}`}
//                     alt={skill.title}
//                     className="w-14 h-12 mr-4"
//                   />
//                   <div>
//                     <h3 className="text-lg font-semibold">{skill.title}</h3>
//                     <p className="text-sm text-gray-600">{skill.level}</p>
//                   </div>
//                 </div>
//               ) : 
//                 <div
//                   data-aos="fade-up"
//                   data-aos-duration="1000"
//                   className={`${
//                     toggleColor
//                       ? "btn-success btn border-2 border-info text-info shadow-info shadow-md  rounded-full text-xs "
//                       : "bg-gray-300   text-accent  skill  "
//                   }     `}
//                 >
//                   <div className="flex justify-around items-center">

//                     <span className="text-sm font-semibold ">{skill?.title}</span>
//                   </div>
//                 </div>

//             })}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Skills;
/* eslint-disable react/jsx-key */
'use client';
import { ToggleContext } from "@/pages/_app";
import { useContext, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const { toggleColor } = useContext(ToggleContext);
  const marqueeRef = useRef(null);

  // SVG icons for each skill
  const skillIcons = {
    JavaScript: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path fill="#F7DF1E" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.103-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.337-.404-.482-.586-.621-.378-.27-1.888-.567-2.934-.223-.773.324-1.155 1.17-1.058 2.12.126 1.5 1.471 1.98 2.966 2.346 1.102.27 1.32.435 1.56.705.327.45.3 1.17.075 1.63-.3.6-1.05.87-1.86.75-.66-.12-1.08-.45-1.47-.9l-1.71 1.08c.42.72 1.14 1.05 2.01 1.23 1.71.36 3.33-.15 3.93-1.38.53-1.11.26-2.28-.42-3.08zM8.25 8.64c-.78 0-1.14.6-1.14 1.38 0 .96.57 1.38 1.41 1.38h1.65c1.5 0 2.43-.75 2.43-2.25 0-1.5-.96-2.34-2.7-2.34H5.85v1.5h2.4v.45c-.69 0-1.2.18-1.2.72 0 .39.27.63.75.63h.9c1.08 0 1.65.6 1.65 1.59 0 .96-.6 1.62-1.65 1.62H7.5v1.5h1.14c1.71 0 2.61-.81 2.61-2.25 0-1.41-.9-2.34-2.7-2.34h-.3z" />
      </svg>
    ),
    TypeScript: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path fill="#3178C6" d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.61 0 1.154.042 1.627.127.473.084.873.224 1.2.42.328.196.582.46.763.792.18.333.27.748.27 1.246 0 .462-.084.867-.252 1.215a2.25 2.25 0 0 1-.716.853 3.12 3.12 0 0 1-1.113.48 8.78 8.78 0 0 1-1.48.158c-.165 0-.375-.014-.63-.042a4.83 4.83 0 0 0-.66-.042c-.235 0-.52.028-.854.085v6.126h-1.922V9.75zm-6.415 9.937c-.89 0-1.67-.154-2.34-.462a3.82 3.82 0 0 1-1.548-1.302c-.374-.56-.63-1.22-.768-1.98-.14-.76-.21-1.6-.21-2.52 0-1.77.318-3.214.954-4.333.635-1.12 1.56-1.95 2.774-2.49 1.213-.54 2.7-.81 4.46-.81.4 0 .83.018 1.29.054.46.036.87.09 1.23.162v1.854a6.37 6.37 0 0 0-1.26-.18 12.7 12.7 0 0 0-1.38-.054c-1.06 0-1.88.224-2.46.672-.58.448-.98 1.04-1.2 1.776-.22.736-.33 1.58-.33 2.532 0 .96.11 1.81.33 2.55.22.74.62 1.33 1.2 1.77.58.44 1.4.66 2.46.66.46 0 .9-.04 1.32-.12.42-.08.8-.21 1.14-.39.34-.18.63-.42.87-.72.24-.3.42-.67.54-1.11h-3.78v-1.62h5.94v6.246h-1.98v-1.08c-.39.42-.86.75-1.41 1.02-.55.26-1.17.46-1.86.6-.69.13-1.42.2-2.19.2z" />
      </svg>
    ),
    HTML: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
      </svg>
    ),
    CSS: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path fill="#1572B6" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
      </svg>
    ),
    "Tailwind CSS": (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path fill="#38B2AC" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    ),
    Bootstrap: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path fill="#7952B3" d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.03c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.044c0-1.783-1.488-2.935-4.01-2.935h-4.02v10.964h4.131c2.575 0 3.9-1.327 3.9-3.708 0-1.005-.353-1.81.044-2.12.398-.31.955-.27 1.07.28.117.55.2 1.16.2 1.97 0 2.96-2.648 4.24-5.305 4.24H6.366V4.89h5.7c2.52 0 3.97 1.235 3.97 3.25 0 1.56-.83 2.532-2.226 2.798 1.63.433 2.28 1.67 2.28 3.097z" />
      </svg>
    ),
    "Ant Design": (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path fill="#0170FE" d="M10.53 7.174c.766.443 1.758.443 2.523 0l8.22-4.746c.766-.443.766-1.162 0-1.605-.766-.443-1.758-.443-2.523 0l-6.958 4.018-6.958-4.018c-.766-.443-1.758-.443-2.523 0-.766.443-.766 1.162 0 1.605zm-9.13 5.18c.766.443 1.758.443 2.523 0l8.22-4.746c.766-.443.766-1.162 0-1.605-.766-.443-1.758-.443-2.523 0L3.4 10.749l-1.48.855c-.766.443-.766 1.162 0 1.605zm0 5.18c.766.443 1.758.443 2.523 0l8.22-4.746c.766-.443.766-1.162 0-1.605-.766-.443-1.758-.443-2.523 0l-6.958 4.018-1.48.855c-.766.443-.766 1.162 0 1.605zm0 5.18c.766.443 1.758.443 2.523 0l8.22-4.746c.766-.443.766-1.162 0-1.605-.766-.443-1.758-.443-2.523 0l-6.958 4.018-1.48.855c-.766.443-.766 1.162 0 1.605zm18.26-15.54c-.766-.443-1.758-.443-2.523 0l-8.22 4.746c-.766.443-.766 1.162 0 1.605.766.443 1.758.443 2.523 0l8.22-4.746c.766-.443.766-1.162 0-1.605z" />
      </svg>
    ),
    Firebase: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path fill="#FFCA28" d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z" />
      </svg>
    ),
    Mongoose: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path fill="#47A248" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.895 17.611a.28.28 0 01-.287.278H6.392a.28.28 0 01-.287-.278v-1.083c0-.153.128-.277.287-.277h11.216c.159 0 .287.124.287.277v1.083zm-2.183-4.155a.28.28 0 01-.287.277H8.575a.28.28 0 01-.287-.277v-1.083c0-.153.128-.277.287-.277h6.85c.159 0 .287.124.287.277v1.083zm-2.183-4.156a.28.28 0 01-.287.277h-2.85a.28.28 0 01-.287-.277V8.217c0-.153.128-.277.287-.277h2.85c.159 0 .287.124.287.277v1.083z" />
      </svg>
    ),
    PostgreSQL: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path fill="#336791" d="M9.18 6.43a3.94 3.94 0 00-2.96 1.22c-.77.77-1.16 1.84-1.16 3.23 0 1.38.39 2.45 1.16 3.22.77.77 1.84 1.16 3.23 1.16 1.38 0 2.45-.39 3.22-1.16.77-.77 1.16-1.84 1.16-3.22 0-1.39-.39-2.46-1.16-3.23a3.94 3.94 0 00-2.96-1.22c-1.39 0-2.46.39-3.23 1.16a3.94 3.94 0 00-1.22 2.96c0 1.38.39 2.45 1.16 3.22.77.77 1.84 1.16 3.23 1.16 1.38 0 2.45-.39 3.22-1.16.77-.77 1.16-1.84 1.16-3.22 0-1.39-.39-2.46-1.16-3.23a3.94 3.94 0 00-2.96-1.22zM9.18 8.65c.77 0 1.38.21 1.84.64.46.43.69 1.03.69 1.8 0 .77-.23 1.38-.69 1.84-.46.46-1.07.69-1.84.69s-1.38-.23-1.84-.69c-.46-.46-.69-1.07-.69-1.84s.23-1.37.69-1.8c.46-.43 1.07-.64 1.84-.64z" />
      </svg>
    ),
    Prisma: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path fill="#0C344B" d="M21.806 18.737l-9.184-16.5c-.5-.9-1.7-.9-2.2 0l-9.184 16.5c-.5.9.1 2 1.1 2h18.368c1 0 1.6-1.1 1.1-2zM12 7.5c.3 0 .5.2.5.5v5c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-5c0-.3.2-.5.5-.5zm0 9c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1z" />
      </svg>
    ),
    "React.js": (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path fill="#61DAFB" d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.05.32.07.65.07.97 0 2.97-2.16 5.44-5 5.92V18c1.38 0 2.63-.56 3.54-1.46.91-.91 1.46-2.16 1.46-3.54 0-.18 0-.36-.01-.54l-.01-.02zM5.95 15.74c.62.62 1.41.99 2.26 1.01v2c-1.39 0-2.78-.47-3.9-1.42-1.12-.95-1.82-2.37-1.82-3.82 0-.87.18-1.71.53-2.5.35-.79.85-1.5 1.48-2.09.63-.59 1.38-1.05 2.19-1.35.81-.3 1.67-.45 2.55-.45h.5v2c-.85 0-1.68.14-2.46.42-.78.28-1.49.7-2.11 1.27-.62.56-1.12 1.25-1.47 2.04-.35.79-.53 1.65-.53 2.54 0 .94.19 1.84.53 2.67.34.83.83 1.57 1.46 2.2z" />
      </svg>
    ),
    "Next.js": (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path fill="#000000" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    "React Router": (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path fill="#CA4245" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        <path fill="#CA4245" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
      </svg>
    ),
    MongoDB: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path fill="#47A248" d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05c.73-1.113 1.2-2.182 1.518-3.2.12-.39.212-.78.29-1.17.07-.31.13-.62.18-.94.08-.45.15-.9.2-1.36.06-.46.1-.92.13-1.38.04-.56.05-1.12.05-1.69 0-.2-.01-.4-.02-.6z" />
        <path fill="#47A248" d="M15.96 12.41c.1-.66.18-1.33.22-2 .06-.92.07-1.85.02-2.78-.03-.63-.09-1.26-.18-1.88-.08-.56-.2-1.12-.35-1.67-.06-.21-.13-.42-.2-.63-.01.43-.03.86-.07 1.29-.1 1.08-.3 2.16-.6 3.21-.3 1.06-.68 2.09-1.15 3.08-.47.99-1.03 1.93-1.67 2.81-.64.87-1.36 1.68-2.15 2.42-.79.74-1.65 1.4-2.56 1.98-.35.23-.71.45-1.08.65-.01.22.01.45.04.68.15.78.48 1.5.94 2.12.32.42.7.79 1.13 1.1.43.31.9.56 1.4.75.5.19 1.03.31 1.57.36.54.05 1.09.03 1.63-.05.54-.08 1.07-.22 1.57-.43.5-.21.98-.48 1.42-.81.44-.33.84-.71 1.19-1.14.35-.43.65-.9.89-1.4.24-.5.42-1.03.53-1.58.11-.55.16-1.11.13-1.67-.02-.56-.12-1.11-.3-1.64-.17-.53-.42-1.03-.73-1.49-.31-.46-.68-.88-1.11-1.25-.43-.37-.91-.68-1.43-.92-.52-.24-1.07-.42-1.64-.51-.57-.09-1.15-.1-1.72-.03-.57.07-1.13.22-1.66.45-.53.23-1.03.54-1.49.92-.46.38-.88.83-1.24 1.33-.36.5-.66 1.05-.88 1.64-.23.59-.38 1.21-.45 1.85-.07.64-.05 1.29.05 1.93.1.64.32 1.26.72 1.88 1.2.56.48 1.19.87 1.87 1.17.68.3 1.4.51 2.14.62.74.11 1.49.13 2.24.06.75-.07 1.49-.22 2.2-.46.71-.24 1.39-.57 2.02-.99.63-.42 1.2-.93 1.71-1.51.51-.58.94-1.24 1.28-1.95.34-.71.59-1.47.73-2.26.15-.79.18-1.6.1-2.41z" />
      </svg>
    ),
    Redis: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path fill="#DC382D" d="M24 18.185v-6.369c0-.66-.29-1.28-.79-1.71l-5.5-4.29c-.48-.38-1.08-.58-1.7-.58H8c-.62 0-1.22.2-1.7.58l-5.5 4.29c-.5.43-.79 1.05-.79 1.71v6.37c0 .65.29 1.27.79 1.7l5.5 4.29c.48.38 1.08.58 1.7.58h8c.62 0 1.22-.2 1.7-.58l5.5-4.29c.5-.43.79-1.05.79-1.7zm-18.5-8.37c0-.28.22-.5.5-.5h12c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5H6c-.28 0-.5-.22-.5-.5v-1zm0 3c0-.28.22-.5.5-.5h12c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5H6c-.28 0-.5-.22-.5-.5v-1zm0 3c0-.28.22-.5.5-.5h12c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5H6c-.28 0-.5-.22-.5-.5v-1z" />
      </svg>
    ),
    "Express.js": (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path fill="#000000" d="M24 18v-2h-2.5v-1.5H24V12h-2.5V9H24V7h-7v2h2v2h-2v2h2v2h-2v2h7zM0 18h7v-2H2v-1.5h5V12H2V9h5V7H0v2h2v2H0v2h2v2H0v2zm13-3.5V18h7v-2h-5v-1.5h5V12h-5V9h5V7h-7v2h2v2h-2v2h2v1.5h-2z" />
      </svg>
    ),
    "Node.js": (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path fill="#339933" d="M11.998 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.078 18.177c-2.564 0-3.622-1.184-3.622-3.362 0-1.63.611-2.389 2.364-3.124l.912-.392c.767-.327 1.095-.589 1.095-1.047 0-.409-.327-.695-.848-.695-.572 0-.879.327-1.047 1.047l-1.758-.784c.458-1.562 1.497-2.364 2.805-2.364 1.758 0 2.621.879 2.621 2.752 0 1.301-.611 2.232-2.232 3.016l-.848.392c-.695.327-1.047.589-1.047 1.047 0 .409.327.695.879.695.572 0 .93-.327 1.151-1.047l1.758.735c-.458 1.562-1.497 2.364-2.805 2.364zm7.773-.049c-1.758 0-2.621-.879-2.621-2.752 0-1.301.611-2.232 2.232-3.016l.848-.392c.695-.327 1.047-.589 1.047-1.047 0-.409-.327-.695-.879-.695-.572 0-.93.327-1.151 1.047l-1.758-.735c.458-1.562 1.497-2.364 2.805-2.364 2.564 0 3.622 1.184 3.622 3.362 0 1.63-.611 2.389-2.364 3.124l-.912.392c-.767.327-1.095.589-1.095 1.047 0 .409.327.695.848.695.572 0 .879-.327 1.047-1.047l1.758.784c-.458 1.562-1.497 2.364-2.805 2.364z" />
      </svg>
    ),
  };

  const skillCategories = {
    frontend: [
      { title: "JavaScript", icon: skillIcons.JavaScript },
      { title: "TypeScript", icon: skillIcons.TypeScript },
      { title: "HTML", icon: skillIcons.HTML },
      { title: "CSS", icon: skillIcons.CSS },
      { title: "Tailwind CSS", icon: skillIcons["Tailwind CSS"] },
      { title: "Bootstrap", icon: skillIcons.Bootstrap },
      { title: "Ant Design", icon: skillIcons["Ant Design"] },
    ],
    backend: [
      { title: "Node.js", icon: skillIcons["Node.js"] },
      { title: "Express.js", icon: skillIcons["Express.js"] },
      { title: "MongoDB", icon: skillIcons.MongoDB },
      { title: "Mongoose", icon: skillIcons.Mongoose },
      { title: "PostgreSQL", icon: skillIcons.PostgreSQL },
      { title: "Prisma", icon: skillIcons.Prisma },
      { title: "Redis", icon: skillIcons.Redis },
    ],
    frameworks: [
      { title: "React.js", icon: skillIcons["React.js"] },
      { title: "Next.js", icon: skillIcons["Next.js"] },
      { title: "React Router", icon: skillIcons["React Router"] },
      { title: "Firebase", icon: skillIcons.Firebase },
    ]
  };

  // Animation for marquee effect
  useEffect(() => {
    const marquee = marqueeRef.current;

    if (!marquee) return;

    const marqueeContent = marquee.firstChild;
    const contentWidth = marqueeContent.offsetWidth;

    // Create infinite scrolling effect
    gsap.to(marqueeContent, {
      x: `-=${contentWidth}`,
      duration: 30,
      ease: "none",
      repeat: -1
    });

    // Animation for skills container
    gsap.fromTo(".skills-container",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".skills-container",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <div className={`py-16 ${toggleColor ? "bg-success" : "bg-neutral"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-4xl md:text-5xl font-bold text-center mb-16 ${toggleColor ? "text-info" : "text-success"
            }`}
        >
          My <span className="text-accent">Skills</span>
        </motion.h2>

        {/* Animated Marquee */}
        <div className="overflow-hidden py-4 mb-16">
          <div
            ref={marqueeRef}
            className="flex w-max"
          >
            <div className="flex">
              {Object.values(skillCategories).flat().map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center mx-4 p-4 rounded-xl ${toggleColor
                      ? "bg-success border border-info shadow-info shadow-md"
                      : "bg-white shadow-lg"
                    } transition-all duration-300`}
                >
                  <div className="w-12 h-12 flex items-center justify-center">
                    {skill.icon}
                  </div>
                  <span className={`font-semibold ml-3 ${toggleColor ? "text-info" : "text-success"}`}>
                    {skill.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <motion.div
              key={category}
              className={`skills-container p-6 rounded-2xl ${toggleColor
                  ? "bg-success border border-info shadow-info shadow-md"
                  : "bg-white shadow-lg"
                }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className={`text-xl font-bold mb-4 ${toggleColor ? "text-info" : "text-success"
                }`}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center p-4 rounded-xl ${toggleColor
                        ? "bg-success border border-info"
                        : "bg-gray-50"
                      }`}
                  >
                    <div className="w-16 h-16 flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <span className={`mt-2 text-center font-medium ${toggleColor ? "text-white" : "text-success"
                      }`}>
                      {skill.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Level Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`skills-container p-6 rounded-2xl ${toggleColor
              ? "bg-success border border-info shadow-info shadow-md"
              : "bg-white shadow-lg"
            }`}>
            <h3 className={`text-xl font-bold mb-6 ${toggleColor ? "text-info" : "text-success"
              }`}>
              Expertise Levels
            </h3>

            <div className="space-y-6">
              {[
                { skill: "Frontend Development", level: 90 },
                { skill: "React.js & Next.js", level: 85 },
                { skill: "Backend Development", level: 80 },
                { skill: "Database Management", level: 75 },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className={`font-medium ${toggleColor ? "text-white" : "text-success"}`}>
                      {item.skill}
                    </span>
                    <span className={`font-medium ${toggleColor ? "text-info" : "text-accent"}`}>
                      {item.level}%
                    </span>
                  </div>
                  <div className={`h-3 rounded-full ${toggleColor ? "bg-gray-700" : "bg-gray-200"
                    }`}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.level}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className={`h-full rounded-full ${toggleColor ? "bg-info" : "bg-accent"
                        }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`skills-container p-6 rounded-2xl ${toggleColor
              ? "bg-success border border-info shadow-info shadow-md"
              : "bg-white shadow-lg"
            }`}>
            <h3 className={`text-xl font-bold mb-6 ${toggleColor ? "text-info" : "text-success"
              }`}>
              Development Approach
            </h3>

            <div className="space-y-4">
              {[
                "Responsive & Mobile-First Design",
                "Component-Based Architecture",
                "Performance Optimization",
                "Clean & Maintainable Code",
                "Cross-Browser Compatibility",
                "Modern UI/UX Principles"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 ${toggleColor ? "bg-info" : "bg-accent"
                    }`}>
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className={`${toggleColor ? "text-white" : "text-success"}`}>
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;