import React from "react";
import { Link } from "react-router-dom";

const Projectcomponent = ({
  name,
  description,
  color,
  link,
  img,
  technologies,
}) => {
  return (
    <div className="bg-mobile md:bg-card p-4 md:p-6 w-full md:w-[23.5rem] rounded-lg lg:rounded-2xl text-start">
      <div className="logo" style={{ color: color }}>
        <img
          src={img}
          className="h-52 md:h-68 lg:h-48 w-full object-cover rounded-md lg:rounded-lg opacity-80"
          alt=""
        />
      </div>
      <div
        className="project-name text-start mt-6 text-2xl font-semibold"
        style={{ color: color }}
      >
        {name}
      </div>
      <div className="project-description text-sm text-text_light opacity-60 text-start mt-1 font-normal overflow-scroll md:h-12 lg:h-24 ">
        {description}
      </div>
      <div className="tech flex justify-start gap-3 flex-wrap md:mt-4 mt-8 h-6 ">
        {technologies.map((t) => {
          return (
            <div
              className="text-xs h-fit px-3 py-[.2px] rounded-sm"
              style={{
                backgroundColor: t.color,
                color:
                  "rgb" + (t.color.split(", 0.1")[0] + ")").split("rgba")[1],
              }}
            >
              {t.name}
            </div>
          );
        })}
      </div>
      <Link target="_blank" to={link}>
        <button
          style={{ color: "#ffffff", marginTop: "3rem" }}
          className="px-10 py-[.5rem] rounded-md opacity-50 hover:opacity-100 bg-gradient-to-r bg-black transition-all text-sm duration-1000"
        >
          View project
        </button>
      </Link>
    </div>
  );
};

export default Projectcomponent;
