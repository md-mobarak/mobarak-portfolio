/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { ToggleContext } from "@/pages/_app";
import "animate.css";
import { useContext, useEffect, useState } from "react";
const Skills = () => {
  const { toggleColor, setToggleColor } = useContext(ToggleContext);
  const skills = [
    {
      title: "JavaScript",
      img: "https://cdn-icons-png.freepik.com/256/5968/5968292.png?ga=GA1.1.255250215.1707802278&",
      level: "intermediate",
    },
    {
      title: "TypeScript",
      img: "https://cdn-icons-png.freepik.com/256/5968/5968381.png?ga=GA1.1.255250215.1707802278&",
      level: "intermediate",
    },
    {
      title: "HTML",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC0z5GIxN4A3unuAXvfsNwGxfRSb-stXD6_Ijnj29asA&s",
      level: "Expert",
    },
    {
      title: "CSS",
      img: "https://cdn-icons-png.freepik.com/256/919/919826.png?ga=GA1.1.255250215.1707802278&",
      level: "Expert",
    },
    {
      title: "Tailwind CSS",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0pbncIahpITK7hFGSNJGTQaTTxrDRfDkLcFjLx3F9Rw&s",
      level: "Expert",
    },
    {
      title: "Bootstrap",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC5AfYDOZ93v0-z6bSVx1WBJwHcI2zf68hm7wtDWg0SA&s",
      level: "Expert",
    },
    {
      title: "Ant Design",
      img: "https://seeklogo.com/images/A/ant-design-logo-EAB6B3D5D9-seeklogo.com.png",
      level: "Familiar",
    },
    {
      title: "Firebase",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8mefb_aa60PtDPiWHqjZFp2okdwc4HNspC-JWo2O0Yw&s",
      level: "intermediate",
    },
    {
      title: "Mongoose",
      img: "https://branditechture.agency/brand-logos/wp-content/uploads/2022/08/Mongoose-1024x768.png",
      level: "Expert",
    },
    {
      title: "PostgreSQL",
      img: "https://w7.pngwing.com/pngs/441/460/png-transparent-postgresql-plain-wordmark-logo-icon-thumbnail.png",
      level: "intermediate",
    },
    {
      title: "Prisma",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzq3YV8NjsiFDsxxNnXrlGcTmsH0MMnB-NYKvO_tmxMA&s",
      level: "intermediate",
    },
    {
      title: "React.js",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCFg3KVEaYFGRRkTwho0inHVrcRCl8JiW1W0Z4ezGZLA&s",
      level: "Expert",
    },
    {
      title: "Next.js",
      img: "https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png",
      level: "intermediate",
    },
    {
      title: "React Router",
      img: "https://reactrouter.com/_brand/react-router-stacked-color.png",
      level: "Expert",
    },
    {
      title: "MongoDB",
      img: "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png",
      level: "Expert",
    },
    {
      title: "Redis",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3ogvWOszeaLZTx33uY_nE0cH3073Bbf069Qc14aJXw&s",
      level: "Familiar",
    },
    {
      title: "Express js",
      img: "https://w7.pngwing.com/pngs/212/722/png-transparent-web-development-express-js-javascript-software-framework-laravel-world-wide-web-purple-blue-text.png",
      level: "intermediate",
    },
    {
      title: "Node js",
      img: "https://e7.pngegg.com/pngimages/306/37/png-clipart-node-js-logo-node-js-javascript-web-application-express-js-computer-software-others-miscellaneous-text-thumbnail.png",
      level: "intermediate",
    },
    // Add more skills as needed
  ];

  return (
    <div className="my-16">
      <section className="py-16 px-10 ">
        <div className="mx-auto">
          <h2
            className={`lg:text-5xl  lg:mt-0 mt-20 text-3xl font-bold ${
              toggleColor ? "text-info" : "text-success"
            } text-center mb-16 uppercase`}
          >
            My Skills
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {skills?.map((skill, index) => {
            return  !toggleColor ? (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className={` 
                  ${
                    !toggleColor
                      ? " bg-white"
                      : "bg-success border border-info shadow-info shadow-md"
                  }
                  rounded-lg shadow-md p-4 flex items-center justify-between`}
                >
                  <img
                    src={`${skill?.img}`}
                    alt={skill.title}
                    className="w-14 h-12 mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{skill.title}</h3>
                    <p className="text-sm text-gray-600">{skill.level}</p>
                  </div>
                </div>
              ) : 
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className={`${
                    toggleColor
                      ? "btn-success btn border-2 border-info text-info shadow-info shadow-md  rounded-full text-xs "
                      : "bg-gray-300   text-accent  skill  "
                  }     `}
                >
                  <div className="flex justify-around items-center">
                  
                    <span className="text-sm font-semibold ">{skill?.title}</span>
                  </div>
                </div>
        
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
