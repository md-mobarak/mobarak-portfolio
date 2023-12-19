import "animate.css";

const Skills = () => {
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
          <h2 className="lg:text-5xl text-2xl uppercase font-semibold mb-8 text-center text-info animate__animated animate__fadeIn animate__once">
            My Skills
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {skills.map((skill, index) => (
              <div
                key={skill}
                data-aos="fade-up"
                data-aos-duration="1000"
                className={`bg-secondary  shadow-xl p-4 rounded-md flex items-center animate__animated animate__fadeIn animate__once animate__delay-${
                  index + 1
                }s`}
              >
                {/* You can use icons or badges to represent each skill */}
                <span className="text-xl font-semibold ">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
