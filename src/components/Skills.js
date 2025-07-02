// 'use client';

// import { useContext, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import {
//   FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs,
//   FaDatabase, FaFire, FaBootstrap, FaGitAlt,
//   FaServer, FaCode, FaUsers, FaLightbulb, FaPuzzlePiece,
//   FaEnvelope, FaShieldAlt, FaCloud
// } from "react-icons/fa";
// import {
//   SiTypescript, SiTailwindcss, SiExpress, SiMongodb,
//   SiPostgresql, SiPrisma, SiRedis, SiNextdotjs,
//   SiAntdesign, SiMongoose, SiReactrouter, SiRedux,
//   SiReactquery, SiGreensock as SiGsap, SiStripe, // Fixed GSAP import
//   SiVisualstudiocode, SiPostman, SiVercel, SiNetlify, SiNpm
// } from "react-icons/si";

// const Skills = () => {
//   const { toggleColor } = useContext(ToggleContext);
//   const marqueeRefs = useRef([]);

//   // Define all skill categories
//   const skillCategories = {
//     frontend: {
//       title: "Frontend",
//       icon: <FaReact className="text-2xl" />,
//       skills: [
//         { name: "React", icon: <FaReact className="w-8 h-8" /> },
//         { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8" /> },
//         { name: "CSS", icon: <FaCss3Alt className="w-8 h-8" /> },
//         { name: "HTML", icon: <FaHtml5 className="w-8 h-8" /> },
//         { name: "Bootstrap", icon: <FaBootstrap className="w-8 h-8" /> },
//         { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8" /> },
//         { name: "Ant Design", icon: <SiAntdesign className="w-8 h-8" /> },
//         { name: "Redux Toolkit", icon: <SiRedux className="w-8 h-8" /> },
//         { name: "Firebase", icon: <FaFire className="w-8 h-8" /> },
//         { name: "React Router", icon: <SiReactrouter className="w-8 h-8" /> },
//         { name: "React Query", icon: <SiReactquery className="w-8 h-8" /> },
//         { name: "GSAP", icon: <SiGsap className="w-8 h-8" /> } // Fixed icon
//       ]
//     },
//     backend: {
//       title: "Backend",
//       icon: <FaServer className="text-2xl" />,
//       skills: [
//         { name: "Node.js", icon: <FaNodeJs className="w-8 h-8" /> },
//         { name: "Express.js", icon: <SiExpress className="w-8 h-8" /> },
//         { name: "Redis", icon: <SiRedis className="w-8 h-8" /> },
//         { name: "JWT", icon: <FaShieldAlt className="w-8 h-8" /> },
//         { name: "Cloudinary", icon: <FaCloud className="w-8 h-8" /> },
//         { name: "Stripe", icon: <SiStripe className="w-8 h-8" /> },
//         { name: "Nodemailer", icon: <FaEnvelope className="w-8 h-8" /> }
//       ]
//     },
//     languages: {
//       title: "Languages",
//       icon: <FaCode className="text-2xl" />,
//       skills: [
//         { name: "TypeScript", icon: <SiTypescript className="w-8 h-8" /> },
//         { name: "JavaScript", icon: <FaJs className="w-8 h-8" /> },
//         { name: "C", icon: <FaCode className="w-8 h-8" /> },
//         { name: "C++", icon: <FaCode className="w-8 h-8" /> },
//         { name: "OOP", icon: <FaCode className="w-8 h-8" /> },
//         { name: "DSA", icon: <FaPuzzlePiece className="w-8 h-8" /> }
//       ]
//     },
//     databases: {
//       title: "Databases",
//       icon: <FaDatabase className="text-2xl" />,
//       skills: [
//         { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8" /> },
//         { name: "MongoDB", icon: <SiMongodb className="w-8 h-8" /> }
//       ]
//     },
//     orm: {
//       title: "ORM",
//       icon: <FaDatabase className="text-2xl" />,
//       skills: [
//         { name: "Prisma", icon: <SiPrisma className="w-8 h-8" /> },
//         { name: "Mongoose", icon: <SiMongoose className="w-8 h-8" /> }
//       ]
//     },
//     tools: {
//       title: "Tools",
//       icon: <FaCode className="text-2xl" />,
//       skills: [
//         { name: "Git", icon: <FaGitAlt className="w-8 h-8" /> },
//         { name: "GitHub", icon: <FaGitAlt className="w-8 h-8" /> },
//         { name: "VS Code", icon: <SiVisualstudiocode className="w-8 h-8" /> },
//         { name: "Postman", icon: <SiPostman className="w-8 h-8" /> },
//         { name: "Vercel", icon: <SiVercel className="w-8 h-8" /> },
//         { name: "Netlify", icon: <SiNetlify className="w-8 h-8" /> },
//         { name: "npm", icon: <SiNpm className="w-8 h-8" /> }
//       ]
//     },
//     soft: {
//       title: "Soft Skills",
//       icon: <FaUsers className="text-2xl" />,
//       skills: [
//         { name: "Leadership", icon: <FaUsers className="w-8 h-8" /> },
//         { name: "Adaptability", icon: <FaLightbulb className="w-8 h-8" /> },
//         { name: "Problem-Solving", icon: <FaPuzzlePiece className="w-8 h-8" /> },
//         { name: "Teamwork", icon: <FaUsers className="w-8 h-8" /> }
//       ]
//     }
//   };

//   // Animation for marquee effects
//   useEffect(() => {
//     // Dynamically import GSAP plugins to avoid SSR issues
//     const initGSAP = async () => {
//       const { ScrollTrigger } = await import("gsap/ScrollTrigger");
//       gsap.registerPlugin(ScrollTrigger);

//       marqueeRefs.current.forEach((marquee, index) => {
//         if (!marquee) return;

//         const marqueeContent = marquee.querySelector('.marquee-content');
//         const contentWidth = marqueeContent.scrollWidth;

//         // Clear any existing animations
//         gsap.killTweensOf(marqueeContent);

//         // Set initial position
//         gsap.set(marqueeContent, { x: 0 });

//         // Create scrolling animation
//         gsap.to(marqueeContent, {
//           x: -contentWidth,
//           duration: 20 + (index * 5),
//           ease: "none",
//           repeat: -1
//         });
//       });

//       // Animation for section headers
//       document.querySelectorAll('.category-header').forEach(header => {
//         gsap.from(header, {
//           scrollTrigger: {
//             trigger: header,
//             start: "top 90%",
//             toggleActions: "play none none none"
//           },
//           opacity: 0,
//           y: 30,
//           duration: 0.8
//         });
//       });
//     };

//     initGSAP();
//   }, []);

//   return (
//     <div
//       className={`min-h-screen py-16 px-4 ${toggleColor ? "bg-gray-900" : "bg-gray-50"}`}
//       id="skills"
//     >
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-8"
//         >
//           <motion.h2
//             className={`text-4xl md:text-5xl font-bold mb-4 ${toggleColor ? "text-white" : "text-gray-800"}`}
//           >
//             My <span className="text-indigo-500">Skills</span> & Expertise
//           </motion.h2>
//           <p className={`max-w-2xl mx-auto text-lg ${toggleColor ? "text-gray-300" : "text-gray-600"}`}>
//             Technologies and methodologies I have mastered through hands-on experience
//           </p>
//         </motion.div>

//         {/* Skill Categories with Marquee Effects */}
//         {Object.entries(skillCategories).map(([categoryKey, category], index) => (
//           <div key={categoryKey} className="mb-8">
//             {/* Category Header */}
//             <div className="category-header flex items-center mb-8">
//               <div className={`mr-4 p-3 rounded-full ${toggleColor ? "bg-indigo-900/30" : "bg-indigo-100"}`}>
//                 {category.icon}
//               </div>
//               <h3 className={`text-2xl font-bold ${toggleColor ? "text-indigo-400" : "text-indigo-700"}`}>
//                 {category.title}
//               </h3>
//             </div>

//             {/* Marquee Container */}
//             <div
//               ref={el => marqueeRefs.current[index] = el}
//               className="relative overflow-hidden py-4"
//             >
//               <div className="marquee-content flex w-max">
//                 {[...category.skills, ...category.skills].map((skill, idx) => (
//                   <motion.div
//                     key={`${categoryKey}-${idx}`}
//                     whileHover={{
//                       y: -5,
//                       scale: 1.05,
//                       transition: { duration: 0.2 }
//                     }}
//                     className={`mx-4 p-5 rounded-xl flex flex-col items-center justify-center min-w-[180px] ${toggleColor
//                       ? "bg-gray-800 hover:bg-gray-700"
//                       : "bg-white hover:bg-indigo-50 shadow-md"
//                       }`}
//                   >
//                     <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${toggleColor
//                       ? "bg-indigo-900/30 text-indigo-400"
//                       : "bg-indigo-100 text-indigo-600"
//                       }`}>
//                       {skill.icon}
//                     </div>
//                     <h3 className={`font-semibold text-center ${toggleColor ? "text-white" : "text-gray-800"}`}>
//                       {skill.name}
//                     </h3>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Gradient Overlays */}
//               <div className={`absolute top-0 left-0 h-full w-20 z-10 ${toggleColor ? "bg-gradient-to-r from-gray-900" : "bg-gradient-to-r from-gray-50"}`}></div>
//               <div className={`absolute top-0 right-0 h-full w-20 z-10 ${toggleColor ? "bg-gradient-to-l from-gray-900" : "bg-gradient-to-l from-gray-50"}`}></div>
//             </div>
//           </div>
//         ))}

//         {/* Skill Levels Section */}
//         <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className={`rounded-2xl p-8 ${toggleColor ? "bg-gray-800" : "bg-white shadow-lg"}`}>
//             <h3 className={`text-2xl font-bold mb-6 flex items-center ${toggleColor ? "text-indigo-400" : "text-indigo-700"}`}>
//               <FaServer className="mr-3" /> Technical Proficiency
//             </h3>

//             <div className="space-y-6">
//               {[
//                 { skill: "Frontend Development", level: 95 },
//                 { skill: "React Ecosystem", level: 90 },
//                 { skill: "Backend Development", level: 85 },
//                 { skill: "Database Management", level: 80 },
//                 { skill: "API Design", level: 85 },
//               ].map((item, index) => (
//                 <div key={index}>
//                   <div className="flex justify-between mb-2">
//                     <span className={`font-medium ${toggleColor ? "text-gray-300" : "text-gray-700"}`}>
//                       {item.skill}
//                     </span>
//                     <span className={`font-bold ${toggleColor ? "text-indigo-400" : "text-indigo-600"}`}>
//                       {item.level}%
//                     </span>
//                   </div>
//                   <div className={`h-3 rounded-full ${toggleColor ? "bg-gray-700" : "bg-indigo-100"}`}>
//                     <motion.div
//                       initial={{ width: 0 }}
//                       animate={{ width: `${item.level}%` }}
//                       transition={{ duration: 1.5, delay: index * 0.2 }}
//                       className={`h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500`}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className={`rounded-2xl p-8 ${toggleColor ? "bg-gray-800" : "bg-white shadow-lg"}`}>
//             <h3 className={`text-2xl font-bold mb-6 flex items-center ${toggleColor ? "text-indigo-400" : "text-indigo-700"}`}>
//               <FaUsers className="mr-3" /> Development Approach
//             </h3>

//             <div className="space-y-4">
//               {[
//                 "Mobile-First Responsive Design",
//                 "Component-Based Architecture",
//                 "Performance Optimization",
//                 "Clean & Maintainable Code",
//                 "Modern UI/UX Principles",
//                 "Progressive Enhancement",
//                 "Agile Development Methodology",
//                 "Test-Driven Development"
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="flex items-start"
//                 >
//                   <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 bg-indigo-500`}>
//                     <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
//                     </svg>
//                   </div>
//                   <span className={`${toggleColor ? "text-gray-300" : "text-gray-700"}`}>
//                     {item}
//                   </span>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;


'use client';
// // import { ToggleContext } from "@/context/ToggleContext";
import { ToggleContext } from "@/pages/_app";
import { useContext } from "react";
import { motion } from "framer-motion";
import {
  FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs,
  FaDatabase, FaFire, FaBootstrap, FaGitAlt,
  FaServer, FaCode, FaUsers, FaLightbulb, FaPuzzlePiece,
  FaEnvelope, FaShieldAlt, FaCloud
} from "react-icons/fa";
import {
  SiTypescript, SiTailwindcss, SiExpress, SiMongodb,
  SiPostgresql, SiPrisma, SiRedis, SiNextdotjs,
  SiAntdesign, SiMongoose, SiReactrouter, SiRedux,
  SiReactquery, SiGreensock as SiGsap, SiStripe,
  SiVisualstudiocode, SiPostman, SiVercel, SiNetlify, SiNpm
} from "react-icons/si";

const SkillCard = ({ name, icon, toggleColor }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.05, transition: { duration: 0.3 } }}
    className={`p-4 w-full sm:w-48 rounded-xl shadow-xl flex flex-col items-center justify-center text-center transition-all duration-300 ${toggleColor ? "bg-[#131313] text-white" : "bg-white text-gray-800"
      }`}
  >
    <div className={`text-3xl mb-2 ${toggleColor ? "text-[#C9F31D]" : "text-[#FF014F]"}`}>{icon}</div>
    <h3 className="font-semibold text-sm">{name}</h3>
  </motion.div>
);

const Skills = () => {
  const { toggleColor } = useContext(ToggleContext);

  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Redux Toolkit", icon: <SiRedux /> },
        { name: "React Router", icon: <SiReactrouter /> },
        { name: "React Query", icon: <SiReactquery /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "Ant Design", icon: <SiAntdesign /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Redis", icon: <SiRedis /> },
        { name: "JWT", icon: <FaShieldAlt /> },
        { name: "Cloudinary", icon: <FaCloud /> },
        { name: "Stripe", icon: <SiStripe /> },
        { name: "Nodemailer", icon: <FaEnvelope /> },
      ],
    },
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: <FaJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "C", icon: <FaCode /> },
        { name: "C++", icon: <FaCode /> },
        { name: "OOP", icon: <FaCode /> },
        { name: "DSA", icon: <FaPuzzlePiece /> },
      ],
    },


    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGitAlt /> },
        { name: "VS Code", icon: <SiVisualstudiocode /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Netlify", icon: <SiNetlify /> },
        { name: "npm", icon: <SiNpm /> },
        { name: "Prisma", icon: <SiPrisma /> },
        { name: "Mongoose", icon: <SiMongoose /> },
      ],
    },
    {
      title: "Soft Skills & Database",
      skills: [
        { name: "Leadership", icon: <FaUsers /> },
        { name: "Adaptability", icon: <FaLightbulb /> },
        { name: "Problem-Solving", icon: <FaPuzzlePiece /> },
        { name: "Teamwork", icon: <FaUsers /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-16 px-4 ${toggleColor ? "bg-[#100028]" : "bg-[#F3F4F6]"}`}
    >

      <div className="max-w-7xl mx-auto relative">
        <div className="absolute bottom-0 right-20 w-56 h-56 rounded-full bg-accent/20 blur-3xl animate-pulse-slow"></div>

        <div className="text-center mb-12 relative">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl font-bold ${toggleColor ? "text-white" : "text-gray-800"}`}
          >
            {/* Animated background elements */}
            <div className="absolute top-20 -left-10 w-64 h-64 rounded-full bg-secondary/20 blur-3xl animate-pulse-slow"></div>


            My <span className="text-[#FF014F]">Skills</span>
          </motion.h2>
          <p className={`text-lg mt-2 ${toggleColor ? "text-gray-300" : "text-gray-600"}`}>
            My technical toolkit shaped by real-world projects
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className={`text-xl text-center font-semibold mb-4 ${toggleColor ? "text-[#C9F31D]" : "text-[#131313]"}`}>{cat.title}</h3>
              <div className="flex flex-wrap gap-4">
                {cat.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} toggleColor={toggleColor} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

