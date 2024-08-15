import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Skills = () => {
  const categorizedSkills = {
    "Frontend Technologies": [
      {
        id: 1,
        skillname: "HTML",
        proficiency: "Advanced",
        backgroundColor: "rgba(227, 79, 38, 0.1)",
      }, // HTML Orange
      {
        id: 2,
        skillname: "CSS",
        proficiency: "Advanced",
        backgroundColor: "rgba(21, 114, 182, 0.1)",
      }, // CSS Blue
      // JavaScript Yellow
      {
        id: 4,
        skillname: "Tailwind CSS",
        proficiency: "Advanced",
        backgroundColor: "rgba(15, 219, 255, 0.1)",
      }, // Tailwind CSS Teal
      {
        id: 5,
        skillname: "Bootstrap",
        proficiency: "Advanced",
        backgroundColor: "rgba(121, 82, 179, 0.1)",
      },
      {
        id: 3,
        skillname: "JavaScript",
        proficiency: "Advanced",
        backgroundColor: "rgba(247, 223, 30, 0.1)",
      }, // Bootstrap Purple
      {
        id: 6,
        skillname: "React.js",
        proficiency: "Advanced",
        backgroundColor: "rgba(97, 218, 251, 0.1)",
      }, // React Blue
    ],
    "Backend Technologies": [
      {
        id: 7,
        skillname: "Node.js",
        proficiency: "Advanced",
        backgroundColor: "rgba(104, 160, 99, 0.1)",
      }, // Node.js Green
      {
        id: 13,
        skillname: "Express.js",
        proficiency: "Intermediate",
        backgroundColor: "rgba(125, 125, 125, 0.1)",
      }, // Express.js Dark Gray
      {
        id: 14,
        skillname: "Socket.io",
        proficiency: "Intermediate",
        backgroundColor: "rgba(125, 125, 125, 0.1)",
      }, //
      {
        id: 8,
        skillname: "Firebase",
        proficiency: "Intermediate",
        backgroundColor: "rgba(255, 226, 10, 0.1)",
      }, //  Socket.io Black
    ],
    "Native App Technologies": [
      {
        id: 16,
        skillname: "Flutter",
        proficiency: "Advanced",
        backgroundColor: "rgba(255, 102, 102, 0.1)",
      }, //
      {
        id: 19,
        skillname: "Dart",
        proficiency: "Advanced",
        backgroundColor: "rgba(0, 153, 204, 0.1)",
      },
    ],
    "State Management": [
      {
        id: 17,
        skillname: "BLoC",
        proficiency: "Intermediate",
        backgroundColor: "rgba(55, 134, 255, 0.1)",
      }, // BLoC Blue
      {
        id: 18,
        skillname: "Provider",
        proficiency: "Intermediate",
        backgroundColor: "rgba(97, 218, 251, 0.1)",
      }, // Provider Blue
    ],
    Databases: [
      {
        id: 9,
        skillname: "MongoDB",
        proficiency: "Intermediate",
        backgroundColor: "rgba(77, 179, 61, 0.1)",
      }, // MongoDB Green
      {
        id: 10,
        skillname: "MySQL",
        proficiency: "Intermediate",
        backgroundColor: "rgba(0, 123, 181, 0.1)",
      }, // MySQL Blue
    ],
    "Other Tools": [
      {
        id: 12,
        skillname: "Git & Github",
        proficiency: "Intermediate",
        backgroundColor: "rgba(240, 80, 51, 0.1)",
      }, // Git Red
      {
        id: 15,
        skillname: "Figma",
        proficiency: "Basic",
        backgroundColor: "rgba(67, 133, 255, 0.1)",
      }, // Figma Blue
    ],
  };

  const ref = useRef(null);
  const cardRef = useRef(null);
  const isInView = useInView(ref, { once: false });
  const isInView2 = useInView(cardRef, { once: false });

  const mainControls = useAnimation();
  const cardControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    if (isInView2) {
      cardControls.start("visible");
    }
  }, [isInView, mainControls, cardControls, isInView2]);

  return (
    <motion.div
      id="skills"
      className="mt-28 w-[90%] md:w-[80%] mx-auto overflow-hidden relative"
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.8, delay: 0.15 }}
    >
      <div className="head w-full text-start text-3xl md:text-4xl font-bold text-white">
        Arsenal ⚔️
      </div>

      <div className="sub text-sm font-normal mt-5 text-text_dark  md:w-[85%] w-full ">
        Presenting a comprehensive display of my diverse skill set in web and
        mobile development. With expertise spanning across front-end and
        back-end technologies, including HTML, CSS, JavaScript, and various
        frameworks such as React, I ensure the creation of captivating and
        responsive web interfaces. Additionally, my proficiency extends to
        native mobile app development, particularly in Flutter.
      </div>

      <div className="flex flex-col md:grid grid-cols-3 gap-3 mt-10">
        {Object.keys(categorizedSkills).map((category, index) => (
          <div
            key={index}
            className="bg-mobile md:bg-card p-5 md:p-6 min-w-full md:w-1/3 rounded-md text-start text-white font-semibold border border-border"
          >
            {category}
            <div className=" flex flex-wrap mt-4 gap-3">
              {categorizedSkills[category].map((skill) => (
                <div
                  className="text-xs justify-start font-normal h-fit px-3 rounded-sm"
                  style={{
                    backgroundColor: skill.backgroundColor,
                    color:
                      "rgb" +
                      (skill.backgroundColor.split(", 0.1")[0] + ")").split(
                        "rgba"
                      )[1],
                  }}
                  key={skill.id}
                >
                  {skill.skillname}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
