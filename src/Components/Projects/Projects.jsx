import React, { useRef, useEffect } from "react";
import Projectcomponent from "./Projectcomponent";
import { motion, useAnimation, useInView } from "framer-motion";
import p1 from "../assets/projects/p1.png";
import p2 from "../assets/projects/p2.png";
import p3 from "../assets/projects/p3.png";
import p4 from "../assets/projects/p4.png";
import p7 from "../assets/projects/p7.png";
import p8 from "../assets/projects/p8.png";

export const Projects = () => {
  const ref = useRef(null);
  const mainControls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      return;
    }
  }, [isInView, mainControls]);

  const projectData = [
    {
      link: "https://oncode.onrender.com",
      name: "Oncode",
      color: "#fb6976",
      description:
        "Oncode is a online web based coding utility cum community that enables you to store, organize and compile your codes at one place along with real time compiler.",
      img: p1,
      technologies: [
        { name: "React.js", color: "rgba(97, 218, 251, 0.1)" },
        { name: "Node.js", color: "rgba(104, 160, 99, 0.1)" },
        { name: "Express", color: "rgba(255, 226, 10, 0.1)" },
        { name: "Socket.io", color: "rgba(125, 125, 125, 0.1)" },
        { name: "Firebase", color: "rgba(255, 226, 10, 0.1)" },
        { name: "Tailwind CSS", color: "rgba(15, 219, 255, 0.1)" },
      ],
    },
    {
      link: "https://github.com/sahil-gpm/chatrooms",
      name: "Chatrooms",
      color: "#4ade80",
      description:
        "Chatrooms is full stack mern app the allows you to create rooms of your personal interests using socket.io and connect with strangers, initiate conversations and make friends.",
      img: p2,
      technologies: [
        { name: "React.js", color: "rgba(97, 218, 251, 0.1)" },
        { name: "Node.js", color: "rgba(104, 160, 99, 0.1)" },
        { name: "Express", color: "rgba(255, 226, 10, 0.1)" },
        { name: "Socket.io", color: "rgba(125, 125, 125, 0.1)" },
        { name: "MongoDB", color: "rgba(77, 179, 61, 0.1)" },
        { name: "Axios", color: "rgba(0, 122, 204, 0.1)" },
      ],
    },
    {
      link: "https://github.com/sahil-gpm/newsfeed",
      name: "Newsfeed",
      color: "#26408b",
      description:
        "Newsfeed is a API based application made with help of news api to fetch news according to your nationality and personal interested categories.",
      img: p3,
      technologies: [
        { name: "React.js", color: "rgba(97, 218, 251, 0.1)" },
        { name: "Node.js", color: "rgba(104, 160, 99, 0.1)" },
        { name: "News API", color: "rgba(255, 105, 31, 0.1)" },
        { name: "Firebase", color: "rgba(255, 226, 10, 0.1)" },
        { name: "Tailwind CSS", color: "rgba(15, 219, 255, 0.1)" },
        { name: "Axios", color: "rgba(0, 122, 204, 0.1)" },
      ],
    },
    {
      link: "https://variable.onrender.com",
      name: "Variable",
      color: "#f110af",
      img: p4,
      description:
        "A simple sharable code editor made with Socket.io and Node.js that allows you and your friends to create code rooms and code together sharing and increasing knowledge.",
      technologies: [
        { name: "React.js", color: "rgba(97, 218, 251, 0.1)" },
        { name: "Node.js", color: "rgba(104, 160, 99, 0.1)" },
        { name: "Socket.io", color: "rgba(125, 125, 125, 0.1)" },
        { name: "Express", color: "rgba(255, 226, 10, 0.1)" },
        { name: "MongoDB", color: "rgba(77, 179, 61, 0.1)" },
        { name: "Tailwind CSS", color: "rgba(15, 219, 255, 0.1)" },
      ],
      // "rgb" + (t.color.split(", 0.1")[0] + ")").split("rgba")[1],
    },
    // {
    //   link: "https://multistep-form-eta.vercel.app",
    //   name: "Multistep Form",
    //   color: "#1a6ad2",
    //   img: p5,
    //   description:
    //     "Multi step form that creates your demo account in 3 easy steps. Overall it has a nice UI and user-friendly interactions.",
    //   technologies: [
    //     { name: "React.js", color: "rgba(97, 218, 251, 0.1)" },
    //     { name: "Node.js", color: "rgba(104, 160, 99, 0.1)" },
    //     { name: "Express", color: "rgba(255, 226, 10, 0.1)" },
    //     { name: "MongoDB", color: "rgba(77, 179, 61, 0.1)" },
    //     { name: "Tailwind CSS", color: "rgba(15, 219, 255, 0.1)" },
    //     { name: "Axios", color: "rgba(0, 122, 204, 0.1)" },
    //   ],
    // },
    // {
    //   link: "http://speak-it-nine.vercel.app",
    //   name: "SpeakIt",
    //   color: "#a855f7",
    //   img: p6,
    //   description:
    //     "A simple web based platform made with Node.js and MongoDB that enables you to learn langauges so that you can communicate easily and conviniently in several languages.",
    //   technologies: [
    //     { name: "React.js", color: "rgba(97, 218, 251, 0.1)" },
    //     { name: "Node.js", color: "rgba(104, 160, 99, 0.1)" },
    //     { name: "Express", color: "rgba(255, 226, 10, 0.1)" },
    //     { name: "MongoDB", color: "rgba(77, 179, 61, 0.1)" },
    //     { name: "Tailwind CSS", color: "rgba(15, 219, 255, 0.1)" },
    //     { name: "Axios", color: "rgba(0, 122, 204, 0.1)" },
    //   ],
    // },
    {
      link: "https://sneakstore-smoky.vercel.app/",
      name: "Sneakstore",
      color: "#fcc623",
      img: p7,
      description:
        "Product page demo that enables you to sort and filter the products as per your preferences. You can filter the products based on different fields like brand, color, etc.",
      technologies: [
        { name: "React.js", color: "rgba(97, 218, 251, 0.1)" },
        { name: "Tailwind CSS", color: "rgba(15, 219, 255, 0.1)" },
      ],
    },
    {
      link: "https://json-api-peach.vercel.app",
      name: "JsonAPI",
      color: "#7d7d7d",
      img: p8,
      description:
        "Simple page representing data fetching through an api with axios get request, it demonstrate the fetching of json and mapping the json array when the data is loaded.",
      technologies: [
        { name: "React.js", color: "rgba(97, 218, 251, 0.1)" },
        { name: "Axios", color: "rgba(0, 122, 204, 0.1)" },
        { name: "Tailwind CSS", color: "rgba(15, 219, 255, 0.1)" },
      ],
    },
  ];

  return (
    <motion.div
      className="mt-40 w-[90%] md:w-[80%] mx-auto text-center overflow-x-hidden."
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      id="projects"
      animate={mainControls}
      transition={{ duration: 0.8, delay: 0.25 }}
    >
      <div className="head w-full mx-auto text-3xl md:text-4xl font-bold text-white text-start  ">
        Web Projects ⚒️
        <div className="sub text-sm font-normal mt-5 text-text_light  md:w-[85%] w-full">
          I present a showcase of my passion for web development through a
          collection of innovative projects. With a keen eye for design and a
          commitment to functionality, each creation embodies my dedication to
          crafting immersive digital experiences. From responsive layouts to
          seamless user interfaces, I strive to push the boundaries of
          creativity and technology. Explore my work and witness the synergy
          between aesthetics and usability that defines my approach to web
          development. Let's embark on a journey through the artistry and
          ingenuity behind each project.
        </div>
      </div>
      <div className="projects flex flex-wrap gap-3 justify-start mt-10">
        {projectData.map((p) => {
          return (
            <Projectcomponent
              name={p.name}
              color={p.color}
              description={p.description}
              link={p.link}
              img={p.img}
              technologies={p.technologies}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
