


"use client";
/* eslint-disable react/no-unescaped-entities */
import { ToggleContext } from "@/pages/_app";
import { useContext } from "react";

const Education = () => {
  const { toggleColor } = useContext(ToggleContext);

  const educations = [
    {
      year: "2020-(Honours/present)",
      institution: "National University",
      description: "I am currently studying Political Science Honours while immersing myself in web development, passionate about mastering full-stack skills. Through academic studies and coding projects, I aim to merge analytical thinking with technical expertise for innovative digital solutions, driven by a commitment to excel in both fields."
    },
    {
      year: "2018-2019(HSC)",
      institution: "Kagatia Kamil Madrasha",
      description: "In 2019, I completed my HSC with a GPA of 4.86 from Kagatia Kamil Madrasha, laying a strong academic foundation. Eager for new challenges, I am enthusiastic about further academic and personal growth. With a commitment to excellence and a thirst for knowledge, I am poised for significant strides in my future endeavors."
    },
    {
      year: "2016-2017(SSC)",
      institution: "Kagatia Kamil Madrasha",
      description: "In my SSC exams, I achieved a GPA of 4.70 from Kagatia Kamil Madrasha, laying a foundation for academic success. The institution nurtured my academic skills and instilled a passion for learning, preparing me for future endeavors. Grateful for the invaluable experience gained, I am ready to pursue excellence in higher education and beyond."
    }
  ];

  return (
    <div
      className={`${toggleColor ? "bg-success" : "bg-neutral"} 
      lg:px-16 px-6 lg:py-20 py-12 font-serif relative overflow-hidden`}
      id="education"
    >
      {/* Animated background elements */}
      <div className="absolute top-20 -left-10 w-64 h-64 rounded-full bg-secondary/20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 -right-10 w-56 h-56 rounded-full bg-accent/20 blur-3xl animate-pulse-slow"></div>

      <h1
        className={`lg:text-5xl text-3xl font-bold mb-16 text-center 
          ${toggleColor ? "text-info" : "text-success"}`}
      >
        Education
      </h1>

      {/* Timeline container */}
      <div className="max-w-5xl mx-auto">
        {/* Vertical timeline line */}
        <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 
          hidden lg:block ${toggleColor ? "bg-info" : "bg-accent"}`}></div>

        {educations.map((edu, index) => (
          <div
            key={index}
            className={`relative flex flex-col lg:flex-row mb-12 lg:mb-16 
              ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Timeline dot */}
            <div className={`absolute left-1/2 -translate-x-1/2 lg:left-1/2 lg:-translate-x-1/2
                w-6 h-6 rounded-full z-10 top-8 lg:top-1/2 lg:-translate-y-1/2
                ${toggleColor ? "bg-info" : "bg-accent"}`}></div>

            {/* Empty space for alignment */}
            <div className="hidden lg:block lg:w-1/2"></div>

            {/* Education card */}
            <div className="lg:w-1/2 lg:px-8 relative">
              <div
                className={`relative rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] 
                  ${toggleColor
                    ? "bg-success border border-info shadow-info-lg"
                    : "bg-white shadow-lg shadow-gray-300"
                  }`}
                data-aos="fade-up"
                data-aos-duration="500"
              >
                {/* Year badge */}
                <div className={`absolute -top-3 left-4 px-4 py-1 rounded-full text-sm font-bold
                  ${toggleColor ? "bg-info text-white" : "bg-accent text-success"}`}>
                  {edu.year}
                </div>

                <div className="pt-4">
                  <h3 className={`text-xl font-bold mb-3 ${toggleColor ? "text-white" : "text-success"}`}>
                    {edu.institution}
                  </h3>
                  <p className={`${toggleColor ? "text-info" : "text-accent"} text-justify`}>
                    {edu.description}
                  </p>
                </div>
              </div>

              {/* Arrow pointer for timeline */}
              <div className={`absolute top-8 -right-2 w-4 h-4 rotate-45 hidden lg:block
                ${toggleColor ? "bg-info" : "bg-white shadow-md"}`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;