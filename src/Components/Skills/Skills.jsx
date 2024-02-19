import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Skills = () => {
  const skills = [
    {
      id: 1,
      skillname: "HTML",
      proficiency: "Advanced",
    },
    {
      id: 2,
      skillname: "CSS",
      proficiency: "Advanced",
    },
    {
      id: 3,
      skillname: "JavaScript",
      proficiency: "Advanced",
    },
    {
      id: 4,
      skillname: "Tailwind",
      proficiency: "Advanced",
    },
    {
      id: 5,
      skillname: "Bootstrap",
      proficiency: "Advanced",
    },
    {
      id: 6,
      skillname: "React.js",
      proficiency: "Advanced",
    },
    {
      id: 7,
      skillname: "Node.js",
      proficiency: "Advanced",
    },
    {
      id: 8,
      skillname: "Firebase",
      proficiency: "Intermediate",
    },
    {
      id: 9,
      skillname: "MongoDB",
      proficiency: "Intermediate",
    },
    {
      id: 10,
      skillname: "MySQL",
      proficiency: "Intermediate",
    },
    {
      id: 11,
      skillname: "Redux",
      proficiency: "Basic",
    },
    {
      id: 12,
      skillname: "Git & Github",
      proficiency: "Intermediate",
    },
    {
      id: 13,
      skillname: "Express.js",
      proficiency: "Intermediate",
    },
    {
      id: 14,
      skillname: "Socket.io",
      proficiency: "Intermediate",
    },
    {
      id: 15,
      skillname: "Figma",
      proficiency: "Basic",
    },
    {
      id: 16,
      skillname: "Flutter",
      proficiency: "Intermediate",
    },
  ];

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
      className="h-fit mt-28 w-[90%] md:w-[80%] md:mx-auto mx-4 overflow-hidden relative"
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.8, delay: 0.15 }}
    >
      <div className="head w-full mx-3 text-start text-4xl md:text-6xl font-bold text-white">
        My Skills
      </div>

      <div className="sub text-sm md:text-base font-normal mt-5 text-text_light opacity-60 mx-3">
        I present a comprehensive display of my diverse skill set in web and
        mobile development. With expertise spanning across front-end and
        back-end technologies, including HTML, CSS, JavaScript, and various
        frameworks such as React, I ensure the creation of
        captivating and responsive web interfaces. Additionally, my proficiency
        extends to native mobile app development, particularly in Flutter.
      </div>

      <div
        id="skill"
        className="skill-array flex flex-wrap justify-center gap-2 my-10 demo"
      >
        {skills.map((skill,i) => {
          return (
            <motion.div
              
              className="card w-40 h-40 md:w-56 lg:w-[17.5rem] md:h-72 bg-card flex flex-col gap-3 justify-center items-center rounded-md text-sm md:text-xl shadow-md shadow-card overflow-hidden"
            >
              <div className="skillname text-text_light opacity-80 font-semibold text-xs md:text-base">
                ‣ {skill.skillname}
              </div>

              <div className="w-14 h-14 lg:w-24 lg:h-24">
                <CircularProgressbar
                  maxValue={100}
                  styles={buildStyles({
                    pathColor: "#c406b8",
                    textColor: "white",
                    textSize: 18,
                    pathTransitionDuration : .5,
                  })}
                  strokeWidth={4}
                  value={
                    skill.proficiency === "Basic"
                      ? 60
                      : skill.proficiency === "Intermediate"
                      ? 80
                      : 100
                  }
                  text={
                    skill.proficiency === "Basic"
                      ? "3/5"
                      : skill.proficiency === "Intermediate"
                      ? "4/5"
                      : "5/5"
                  }
                />
              </div>

              <div className="proficiency text-xl bg-gradient-to-r from-pink via-purple to-card bg-clip-text text-trans md:text-base lg:mt-3 opacity-">
                {skill.proficiency === "Basic"
                  ? "★★★"
                  : skill.proficiency === "Intermediate"
                  ? "★★★★"
                  : "★★★★★"}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Skills;
