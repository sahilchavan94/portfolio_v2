import { motion, useAnimation, useInView } from "framer-motion";
import React, { useRef, useEffect } from "react";
import flutterImg from "../assets/flutter_bg.png";

const Exp = () => {
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
      className="mt-28 w-[90%] md:w-[80%] mx-auto overflow-hidden z-40"
    >
      <div
        id="exp"
        className="head w-full text-start text-3xl md:text-4xl font-bold text-white"
      >
        Experience
        <div className="exp-details mt-5">
          <div className="flex items-center">
            <img src={flutterImg} className="w-6 h-6 rounded-md" alt="" />
            <div className="w-2"></div>
            <div className="exp-details-head text-2xl font-semibold">
              Flutter Development Intern{" "}
            </div>
          </div>

          <div className="exp-details-head text-sm font-normal text-text_dark  mt-1">
            March 2024 to June 2024
            <div className="text-text_light  ">
              Brihat Infotech Jharkhand Ranchi, Work From Home
            </div>
          </div>

          <div className="internship-description text-text_dark text-sm font-normal mt-4 md:w-[85%] w-full">
            Had an immersive experience that significantly enhanced my Flutter
            development skills during a 3-month online internship. Delved deep
            into{" "}
            <span className="text-main font-semibold opacity-100">
              Clean architecture
            </span>{" "}
            and mastered the principles of building scalable and maintainable
            applications.
            <span className="text-green font-semibold opacity-100">
              Mastered state management
            </span>{" "}
            by working on real-world projects, refining my ability to manage
            complex app states efficiently. Collaborated with a dynamic team in
            a remote work environment, honing my teamwork and communication
            skills. This internship was a pivotal step in my growth as a
            developer.
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Exp;
