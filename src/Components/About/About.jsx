import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import name from "../assets/icons/user.png";
import dob from "../assets/icons/dob.png";
import add from "../assets/icons/address.png";
import mail from "../assets/icons/mail.png";
import phone from "../assets/icons/call.png";
import resume from "../assets/sahilchavanresume.pdf";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      id="about"
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      transition={{ duration: 0.8, delay: 0.25 }}
      animate={mainControls}
      className="w-[90%] md:w-[80%] flex flex-col items-start justify-center h-fit mx-auto "
    >
      <div className="head w-full text-start text-3xl md:text-4xl font-bold text-white">
        Hi there !
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-start text-text_dark mt-4 gap-10 ">
        <div className="my-info font-normal text-sm w-full md:text-start mx-auto lg:[60%] ">
          Passionate and hardworking{" "}
          <span className="text-main font-semibold opacity-100">
            #Web application developer🧑‍💻
          </span>
          ,{" "}
          {/* <span className="text-blue font-semibold opacity-100">
            #UI designer
          </span>{" "} */}
          and a{" "}
          <span className="text-green font-semibold opacity-100">
            #Flutter developer 📲
          </span>
          . I am currently a student looking for a chance to use my skills in
          real world problem solving with a previous{" "}
          <span className="text-blue font-semibold opacity-100">
            3 months Internship Experience in developing Flutter Apps.
          </span>{" "}
          Besides tech, I am also intersted in playing video games, exploring
          nature ☘️ and clicking pics of beautiful animals. I always focus on
          keeping myself updated with latest emerging technologies. My journey
          ✈️ is marked by a passion for problem-solving, user-centric design,
          and effective collaboration. From building pretty good web
          applications to navigating the world of Figma and crafting Flutter
          apps🧑‍💻. Join me on this dynamic journey where each line of code tells
          a story of innovation 🌟 and continuous 🚀 learning, making myself
          better day-by-day.
        </div>
        <div className="basic-details text-sm md:w-auto w-full flex flex-col justify-center md:items-start gap-3 md:gap-2 ">
          <div className="name flex justify-start gap-3 ">
            <span className="flex justify-start items-center md:gap-3 gap-2 font-semibold w-24">
              <img className="w-4 h-4 opacity-60" src={name} alt="" />
              Name:
            </span>
            Sahil Satish Chavan
          </div>
          <div className="dob flex justify-start gap-3 ">
            <span className="flex justify-start items-center md:gap-3 gap-2 font-semibold w-24">
              <img className="w-4 h-4 opacity-60" src={dob} alt="" />
              Dob:
            </span>{" "}
            30 04 2005
          </div>
          <div className="address flex justify-start gap-3 ">
            <span className="flex justify-start items-center md:gap-3 gap-2 font-semibold w-24">
              <img className="w-4 h-4 opacity-60" src={add} alt="" />
              Address:
            </span>{" "}
            Roha, Raigad - India
          </div>
          <div className="email flex justify-start items-center md:gap-3 gap-3 ">
            <span className="flex justify-start items-center md:gap-3 gap-2 font-semibold w-24">
              <img className="w-4 h-4 opacity-60" src={mail} alt="" />
              Email:
            </span>
            sahilchavangithub@gmail.com
          </div>
          <div className="phone flex justify-start gap-3 ">
            <span className="flex justify-start items-center md:gap-3 gap-2 font-semibold w-24">
              <img className="w-4 h-4 opacity-60" src={phone} alt="" />
              Phone:
            </span>{" "}
            +91 9922 341 223
          </div>
          <a
            href={resume}
            download={"sahilchavanresume.pdf"}
            target="_blank"
            rel="noreferrer"
            className="z-30"
          >
            <button className="text-white btn-grad text-sm font-semibold w-28 p-2 mt-5">
              Resume
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
