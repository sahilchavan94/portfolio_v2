import { motion, useAnimation, useInView } from "framer-motion";
import React, { useRef, useEffect } from "react";
import flutterImg from "../assets/image.png";

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
      className="mt-28 w-[90%] md:w-[80%] mx-auto overflow-hidden z-50"
    >
      <div className="head w-full text-start text-3xl md:text-4xl font-bold text-white">
        Experience
        <div className="exp-details mt-5">
          <div className="flex items-center">
            <img src={flutterImg} className="w-6 h-6 rounded-md" alt="" />
            <div className="w-2"></div>
            <div className="exp-details-head text-2xl font-semibold">
              Flutter Development Intern{" "}
            </div>
          </div>

          <div className="exp-details-head text-sm font-normal text-text_light opacity-60 mt-1">
            March 2024 to June 2024
            <div className="text-text_light opacity-60 ">
              Brihat Infotech Jharkhand Ranchi, Work From Home
            </div>
          </div>

          <div className="internshil-description text-text_light opacity-60 text-sm font-normal mt-4 md:w-[85%] w-full ">
            During my 3-month online internship at Brihat Infotech, Jharkhand,
            Ranchi, I had an immersive experience that significantly enhanced my
            Flutter development skills. I dove deep into{" "}
            <span className="text-main font-semibold opacity-100">
              Clean architecture
            </span>
            ,
            <span className="text-green font-semibold opacity-100 ml-1">
              mastering the principles of building scalable and maintainable
              applications
            </span>
            .
            <span className="text-blue font-semibold opacity-100 mx-1">
              State management
            </span>
            became second nature as I worked on real-world projects, refining my
            ability to manage complex app states efficiently. Additionally,
            collaborating with a dynamic team in a remote work environment honed
            my teamwork and communication skills, preparing me to thrive in any
            professional setting. This internship was a pivotal step in my
            growth as a developer.
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Exp;
