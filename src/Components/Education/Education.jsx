import EducationComp from "./EducationComp";
import school from "../assets/school.png";
import college from "../assets/college.png";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useRef, useEffect } from "react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.8, delay: 0.15 }}
      className="mt-28 w-[90%] md:w-[80%] mx-auto overflow-hidden "
    >
      <div className="head w-full text-start text-3xl md:text-4xl font-bold text-white">
        Education
        <div className="flex flex-col md:flex-row gap-2 md:gap-5 mt-5">
          <EducationComp
            join={"June 2005"}
            end={"July 2021"}
            grades={"99%"}
            logoImg={school}
            title={"K.E.S V.P.T English Medium School Roha"}
            subTitle={"Maharashtra State Board"}
            desc={
              "Completed my 10th with 99% from Konkan Education Society's Veena Pandit Tendulkar' English Medium School Roha Raigad."
            }
          />
          <EducationComp
            join={"September 2021"}
            end={"July 2024"}
            grades={"96.42%"}
            logoImg={college}
            title={"Government Polytechnic Mumbai"}
            subTitle={"Mumbai University"}
            desc={
              "Completed my Diploma in Computer Engineering with 96.42% from Government Polytechnic Mumbai. Learnt the fundamentals of Computer Engineering and gained practical experience in programming languages like C, C++, Java, Python and Data Structures."
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
