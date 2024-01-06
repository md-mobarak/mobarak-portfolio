import { ToggleContext } from "@/pages/_app";
import "animate.css";
import { useContext } from "react";
const Skills = () => {
  const { toggleColor, setToggleColor } = useContext(ToggleContext);
  const skills = [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "Firebase",
    "Mongoose",
    "PostgreSQL",
    "Prisma",
    "React.js",
    "Next.js",
    "React Router DOM",
    "MongoDB",
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
            {skills.map((skill, index) => (
              <div
                key={skill}
                data-aos="fade-up"
                data-aos-duration="1000"
                className={`${
                  toggleColor
                    ? "btn-success btn border-2 border-info text-info shadow-info shadow-md  rounded-full text-xs "
                    : "bg-white btn  text-accent  skill  rounded-full "
                }     `}
              >
                {/* You can use icons or badges to represent each skill */}
                <span className="text-sm font-semibold ">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
