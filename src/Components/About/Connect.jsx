import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import phone from "../assets/icons/phone.png";
import fb from "../assets/icons/facebook.png";
import github from "../assets/icons/github.png";
import ig from "../assets/icons/instagram.png";
import { Link } from "react-router-dom";

const Connect = () => {
  const ref = useRef(null);
  const cardRef = useRef(null);

  const mainControls = useAnimation();
  const cardControls = useAnimation();

  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(cardRef, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    if (isInView2) {
      cardControls.start("visible");
    }
  }, [isInView, mainControls, isInView2, cardControls]);

  return (
    <motion.div
      className="connect mt-64 mb-20 w-full md:w-[65%] mx-auto text-start"
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.8, delay: 0.25 }}
    >
      <div className="head text-3xl md:text-4xl font-bold text-white text-center">
        Get Connected
      </div>

      <div className="connections text-text_light text-xs md:text-sm flex md:flex-row items-center flex-col justify-center gap-4 mt-4">
        <Link to={"mailto:sahilchavangithub@gmail.com"}>
          <div
            className="email rounded-lg bg-card w-72 h-44 flex flex-col gap-3 justify-center items-center mt-5 transition-all duration-500 hover:bg-gradient-to-tr from-pink via-purple to-card opacity-80"
            ref={cardRef}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={cardControls}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="text-3xl">@</div> sahilchavangithub@gmail.com
          </div>
        </Link>

        <Link to={"tel:9922341223"}>
          <div
            className="contact rounded-lg bg-card w-72 h-44 flex flex-col gap-3 justify-center items-center mt-5 transition-all duration-1000 hover:bg-gradient-to-tr from-pink via-purple to-card opacity-80"
            ref={cardRef}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={cardControls}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <img src={phone} className="w-7 h-7" alt="" /> +91 9922 341 223
          </div>
        </Link>
      </div>

      <div className="mx-auto flex justify-center items-center mt-14 gap-5 ">
        <Link
          target="_blank"
          to={"https://www.facebook.com/profile.php?id=61554470909104"}
        >
          {" "}
          <motion.img
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="w-10 h-10 backdr  backdrop-contrast-200-200"
            src={fb}
            alt=""
          />
        </Link>
        <Link target="_blank" to={"https://github.com/sahil-gpm/portfolio_v2"}>
          <motion.img
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-10 h-10"
            src={github}
            alt=""
          />
        </Link>
        <Link
          target="_blank"
          to={"https://www.instagram.com/infinite_void_30/"}
        >
          <motion.img
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-10 h-10"
            src={ig}
            alt=""
          />
        </Link>
      </div>
      <div className="finish mt-20 mb-10 text-base text-center text-text_light font-normal opacity-30 transition-all duration-1000 hover:opacity-100">
        <Link to={"https://github.com/sahil-gpm/portfolio_v2"} target="_blank">
          sahilchavanportfolio@2.0 || 2024
        </Link>
      </div>
    </motion.div>
  );
};

export default Connect;
