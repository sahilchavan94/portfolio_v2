import React, { useRef, useEffect, useState } from "react";
import { useInView, useAnimation, motion } from "framer-motion";
import fb from "../assets/icons/facebook.png";
import github from "../assets/icons/github.png";
import ig from "../assets/icons/instagram.png";
import Intro from "./Intro";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Connect from "../About/Connect";
import NativeProjects from "../Projects/Nativeprojects";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";

//nav icons
import home_icon from "../assets/nav_icons/home.png";
import about_icon from "../assets/nav_icons/info.png";
import experience_icon from "../assets/nav_icons/briefcase.png";
import education_icon from "../assets/nav_icons/graduation.png";
import skills_icon from "../assets/nav_icons/skills.png";
import projects_icon from "../assets/nav_icons/project.png";
import connect_icon from "../assets/nav_icons/call.png";
import { Link } from "react-router-dom";

const Home = () => {
  const ref = useRef(null);
  const cardRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    <div id="home" className="overflow-x-hidden scroll-smooth relative">
      {/* Sidebar for mobile */}
      <div className="md:hidden">
        {!isSidebarOpen ? (
          <div className="fixed flex items-center justify-between w-full h-10 top-0 z-50 bg-black border border-b-card shadow-card px-4">
            <div className="text-2xl font-semibold bg-gradient-to-r from-pink via-purple to-indigo text-trans bg-clip-text">
              SahiL.
            </div>
            <button className="ml-5" onClick={() => setIsSidebarOpen(true)}>
              {/* Add a burger menu icon here */}
              <div
                className={`flex flex-col gap-1 ${
                  isSidebarOpen ? "hidden" : "block"
                }`}
              >
                <span className="block w-4 h-[1px] bg-text_light"></span>
                <span className="block w-4 h-[1px] bg-text_light"></span>
                <span className="block w-4 h-[1px] bg-text_light"></span>
              </div>
            </button>
          </div>
        ) : (
          <div></div>
        )}

        <motion.div
          className={`fixed z-50 top-0 h-screen w-full bg-gray-900 text-white bg-black  p-6 flex flex-col items-start justify-between gap-y-4 transition-all duration-75 ${
            isSidebarOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          initial={{ y: "-100%" }}
          animate={isSidebarOpen ? { y: 0 } : { y: "-200%" }}
        >
          <div className="flex flex-col gap-4">
            <button
              className="text-red self-start text-sm"
              onClick={() => setIsSidebarOpen(false)}
            >
              ← Go Back
            </button>

            <a
              href="#home"
              className="flex justify-start items-center gap-3 mt-6"
              onClick={() => setIsSidebarOpen(false)}
            >
              <img
                src={home_icon}
                className="w-5 h-5 opacity-60 object-cover transition-all duration-500 cursor-pointer hover:opacity-100"
                alt=""
              />
              <span className="text-sm text-text_dark hover">Home</span>
            </a>
            <a
              href="#about"
              className="flex justify-start items-center gap-3"
              onClick={() => setIsSidebarOpen(false)}
            >
              <img
                src={about_icon}
                className="w-4 h-4 opacity-60 object-cover transition-all duration-500 cursor-pointer hover:opacity-100"
                alt=""
              />
              <span className="text-sm text-text_dark hover">About</span>
            </a>
            <a
              href="#exp"
              className="flex justify-start items-center gap-3"
              onClick={() => setIsSidebarOpen(false)}
            >
              <img
                src={experience_icon}
                className="w-4 h-4 opacity-60 object-cover transition-all duration-500 cursor-pointer hover:opacity-100"
                alt=""
              />
              <span className="text-sm text-text_dark hover">Experience</span>
            </a>
            <a
              href="#education"
              className="flex justify-start items-center gap-3"
              onClick={() => setIsSidebarOpen(false)}
            >
              <img
                src={education_icon}
                className="w-4 h-4 opacity-60 object-cover transition-all duration-500 cursor-pointer hover:opacity-100"
                alt=""
              />
              <span className="text-sm text-text_dark hover">Education</span>
            </a>
            <a
              href="#skills"
              className="flex justify-start items-center gap-3"
              onClick={() => setIsSidebarOpen(false)}
            >
              <img
                src={skills_icon}
                className="w-4 h-4 opacity-60 object-cover transition-all duration-500 cursor-pointer hover:opacity-100"
                alt=""
              />
              <span className="text-sm text-text_dark hover">Skills</span>
            </a>
            <a
              href="#projects"
              className="flex justify-start items-center gap-3"
              onClick={() => setIsSidebarOpen(false)}
            >
              <img
                src={projects_icon}
                className="w-4 h-4 opacity-60 object-cover transition-all duration-500 cursor-pointer hover:opacity-100"
                alt=""
              />
              <span className="text-sm text-text_dark hover">Projects</span>
            </a>
            <a
              href="#connect"
              className="flex justify-start items-center gap-3"
              onClick={() => setIsSidebarOpen(false)}
            >
              <img
                src={connect_icon}
                className="w-4 h-4 opacity-60 object-cover transition-all duration-500 cursor-pointer hover:opacity-100"
                alt=""
              />
              <span className="text-sm text-text_dark hover">Connect</span>
            </a>
          </div>
          <div className="text-sm text-text_dark ">
            <div className="mx-auto flex flex-col mt-14 gap-5 mb-4">
              <Link
                target="_blank"
                to={"https://www.facebook.com/profile.php?id=61554470909104"}
              >
                {" "}
                <img className="w-7 h-7 brightness-125" src={fb} alt="" />
              </Link>
              <Link
                target="_blank"
                to={"https://github.com/sahil-gpm/portfolio_v2"}
              >
                <img className="w-7 h-7 brightness-125" src={github} alt="" />
              </Link>
              <Link
                target="_blank"
                to={"https://www.instagram.com/eren_yeager_9405/"}
              >
                <img className="w-7 h-7 brightness-125" src={ig} alt="" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Navbar for larger screens */}
      <div className="fixed hidden md:flex flex-col gap-y-4 text-text_dark top-6 left-6 z-40">
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5 }}
        >
          <a href="#home">
            <img
              src={home_icon}
              className="w-4 h-4 opacity-60 object-cover transition-all duration-500 cursor-pointer hover:opacity-100"
              alt=""
            />
          </a>
        </motion.div>
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="#about">
            <img
              src={about_icon}
              className="w-4 h-4 opacity-60 object-cover transition-all duration-500 cursor-pointer hover:opacity-100"
              alt=""
            />
          </a>
        </motion.div>
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#exp">
            <img
              src={experience_icon}
              className="w-4 h-4 opacity-60 object-cover transition-all duration-500 cursor-pointer hover:opacity-100"
              alt=""
            />
          </a>
        </motion.div>
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="#education">
            <img
              src={education_icon}
              className="w-4 h-4 opacity-60 object-cover transition-all duration-500 cursor-pointer hover:opacity-100"
              alt=""
            />
          </a>
        </motion.div>
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a href="#skills">
            <img
              src={skills_icon}
              className="w-4 h-4 opacity-60 object-cover transition-all duration-500 cursor-pointer hover:opacity-100"
              alt=""
            />
          </a>
        </motion.div>
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <a href="#projects">
            <img
              src={projects_icon}
              className="w-4 h-4 opacity-60 object-cover transition-all duration-500 cursor-pointer hover:opacity-100"
              alt=""
            />
          </a>
        </motion.div>
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <a href="#connect">
            <img
              src={connect_icon}
              className="w-4 h-4 opacity-60 object-cover transition-all duration-500 cursor-pointer hover:opacity-100"
              alt=""
            />
          </a>
        </motion.div>
      </div>

      {!isSidebarOpen ? (
        <div>
          <Intro />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <NativeProjects />
          <Connect />
        </div>
      ) : (
        <div className="w-screen h-screen bg-black"></div>
      )}
    </div>
  );
};

export default Home;
