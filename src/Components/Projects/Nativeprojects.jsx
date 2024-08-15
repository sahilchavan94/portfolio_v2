import React, { useRef, useEffect } from "react";
import Projectcomponent from "./Projectcomponent";
import { motion, useAnimation, useInView } from "framer-motion";
import p9 from "../assets/projects/p9.png";
import p10 from "../assets/projects/p10.png";
import p11 from "../assets/projects/p11.png";
import p12 from "../assets/projects/p12.png";
import p13 from "../assets/projects/p13.png";
import p14 from "../assets/projects/p14.png";
import p15 from "../assets/projects/p15.png";

export const NativeProjects = () => {
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
      link: "https://github.com/sahil-gpm/dockIt",
      name: "DockIt",
      color: "#7d7d7d",
      description:
        "A daily task planner for your routine, made with Flutter. It has a nice and easy to operate user interface that enables you to add, delete and mark your tasks as complete and incomplete.",
      img: p9,
      technologies: [
        { name: "Flutter", color: "rgba(255, 102, 102, 0.1)" },
        { name: "Dart", color: "rgba(1, 117, 194, 0.1)" },
        { name: "Hive DB", color: "rgba(146, 85, 247, 0.1)" },
      ],
    },
    {
      link: "https://github.com/sahil-gpm/flutplay",
      name: "Flutplay",
      color: "#664441",
      description:
        "A Flutter music player app with a single yet beautiful screen that plays only a  single song for now. However the main focus was to know about the flutter widgets and rendering of UI.",
      img: p10,
      technologies: [
        { name: "Flutter", color: "rgba(255, 102, 102, 0.1)" },
        { name: "Dart", color: "rgba(1, 117, 194, 0.1)" },
        { name: "Audioplayers", color: "rgba(255, 226, 10, 0.1)" },
      ],
    },
    {
      link: "https://github.com/sahil-gpm/flutter_bloc_shopping_cart",
      name: "Flutter Bloc sneakers",
      color: "#a855f7",
      description:
        "A Flutter app that focuses on the implementation of bloc state management that enables you to separate the UI and the backend logic making it easy to understand and maintain.",
      img: p11,
      technologies: [
        { name: "Flutter", color: "rgba(255, 102, 102, 0.1)" },
        { name: "Dart", color: "rgba(1, 117, 194, 0.1)" },
        { name: "BLoC", color: "rgba(55, 134, 255, 0.1)" },
      ],
    },
    {
      link: "https://github.com/sahil-gpm/flutter_bloc_news_app",
      name: "Flutter Bloc News",
      color: "#fc44cb",
      img: p12,
      description:
        "A beautiful and user-friendly news app built with flutter that demonstrates the use of bloc. It helps you to keep your code properly managed and separates the UI, business logic and network logic.",
      technologies: [
        { name: "Flutter", color: "rgba(255, 102, 102, 0.1)" },
        { name: "Dart", color: "rgba(1, 117, 194, 0.1)" },
        { name: "BLoC", color: "rgba(55, 134, 255, 0.1)" },
        { name: "News API", color: "rgba(255, 105, 31, 0.1)" },
        { name: "Http", color: "rgba(0, 122, 204, 0.1)" },
      ],
    },
    {
      link: "https://github.com/sahil-gpm/flutter_wallpapers",
      name: "Flutter Wallpapers",
      color: "#11998e",
      img: p13,
      description:
        "A beautiful wallpaper app built with flutter, which fetches wallpaper images from an external image API, and enables the user to select a wallpaper as per the preferred categories and interests.",
      technologies: [
        { name: "Flutter", color: "rgba(255, 102, 102, 0.1)" },
        { name: "Dart", color: "rgba(1, 117, 194, 0.1)" },
        { name: "Pexels API", color: "rgba(255, 105, 31, 0.1)" },
        { name: "Http", color: "rgba(0, 122, 204, 0.1)" },
      ],
    },
    {
      link: "https://github.com/sahilchavan94/flutter_clean_architecture_blog_app",
      name: "Flutter Blogs",
      color: "#52FF00",
      img: p14,
      description:
        "Blog application built with flutter clean architecture making the development and modifications easier.",
      technologies: [
        { name: "Flutter", color: "rgba(255, 102, 102, 0.1)" },
        { name: "Dart", color: "rgba(1, 117, 194, 0.1)" },
        { name: "Firebase", color: "rgba(255, 202, 40, 0.1)" },
        { name: "BLoC", color: "rgba(55, 134, 255, 0.1)" },
        { name: "Provider", color: "rgba(97, 218, 251, 0.1)" },
      ],
    },
    {
      link: "https://github.com/sahilchavan94/Chattin.",
      name: "Chattin`",
      color: "#128DFF",
      img: p15,
      description:
        "A Chat App made in Flutter for Android mobile devices. It is an attempt to learn more about the clean architecture, state management, etc. It has a nice interface along with some cool features which you can use to chat with your friends",
      technologies: [
        { name: "Flutter", color: "rgba(255, 102, 102, 0.1)" },
        { name: "Dart", color: "rgba(1, 117, 194, 0.1)" },
        { name: "Firebase", color: "rgba(255, 202, 40, 0.1)" },
        { name: "BLoC", color: "rgba(55, 134, 255, 0.1)" },
        { name: "Provider", color: "rgba(97, 218, 251, 0.1)" },
      ],
    },
  ];

  return (
    <motion.div
      className="mt-20 w-[90%] md:w-[80%] mx-auto text-center overflow-x-hidden"
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.8, delay: 0.25 }}
    >
      <div className="head w-full mx-auto text-3xl md:text-4xl font-bold text-white text-start  mt-24">
        Native Projects ⚒️
        <div className="sub md:w-[85%] w-full text-sm font-normal mt-5 text-text_light  ">
          I showcase my proficiency in Flutter app development through a curated
          assortment of projects. With a primary emphasis on crafting intuitive
          user interfaces and ensuring cross-platform compatibility, each app
          exemplifies my commitment to delivering polished digital solutions.
        </div>
      </div>
      <div className="projects flex flex-wrap gap-3 justify-start items-center mt-10">
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

export default NativeProjects;
