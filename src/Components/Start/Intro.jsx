import React from "react";
import demo from "../assets/demo.jpeg";
import { useInView } from "react-intersection-observer";
import Typing from "../Typed/Typing";
import blob1 from "../assets/svgs/blob.svg";
import blob2 from "../assets/svgs/blob-2.svg";

const Intro = () => {
  const { ref: myRef, inView: introVisible } = useInView();

  return (
    <>
      <div className="images w-[25rem] lg:w-[44rem] relative top-[40rem] bg-white -left-2 md:left-16 lg:opacity-50 opacity-70">
        <img
          src={blob1}
          alt=""
          className="md:opacity-20 opacity-10 absolute -left-6 md:left-10 -top-[26rem] md:top-44 bg-trans"
        />
        <img
          src={blob2}
          alt=""
          className="opacity-30 absolute -right-[11%] md:-right-[80%] top-0 md:top-[40rem]"
        />
      </div>
      <div
        className={`flex flex-col mt-40 md:mt-0 xl:flex-row md:justify-center items-center w-[85%] md:w-[90%] lg:w-[70%] mx-auto h-[80vh] md:h-[100vh] gap-6 md:gap-14 headanim ${
          introVisible ? "loaded" : ""
        }`}
        ref={myRef}
      >
        <div className="left">
          <div className="left_image bg-gradient-to-br from-pink via-purple to-card w-56 md:w-52 h-56 md:h-64 lg:w-80 lg:h-80 p-1 rounded-full shadow-2xl">
            <img
              src={demo}
              className="w-full h-full rounded-full object-cover glowing-image"
              alt=""
            />
          </div>
        </div>
        <div className="right md:bg-trans md:p-0 md:rounded-none md:shadow-none">
          <div className="heading text-3xl md:text-5xl lg:text-6xl text-white font-bold text-center md:text-center xl:text-start tracking-tight">
            <div className="text-xl text-text_light md:text-3xl opacity-70 mb-4 font-normal tracking-tight">
              みんなこんにちは 👋
            </div>
            I am Sahil Chavan, a guy passionate for ↴{" "}
            <div>
              <Typing />
            </div>
          </div>
          <a href="#about " className="bg-white">
            {" "}
            <button className="text-white btn-grad text-sm font-semibold w-32 p-2 mt-4 mx-auto md:mx-0">
              Let's dive in
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Intro;
