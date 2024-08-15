import React from "react";
import { Link } from "react-router-dom";
import maximize from "../assets/maximize.png";

const Projectcomponent = ({
  name,
  description,
  color,
  link,
  img,
  technologies,
}) => {
  return (
    <div className="bg-mobile md:bg-card w-full md:w-[17.5rem] rounded-md text-start border border-border">
      <div className="logo " style={{ color: color }}>
        <img
          src={img}
          className="h-52 md:h-68 lg:h-48 w-full object-cover rounded-tl-md rounded-tr-md opacity-80"
          alt=""
        />
      </div>

      <div className="project-description px-3 md:px-4">
        <div
          className="project-name text-start mt-4 text-xl font-semibold"
          style={{ color: color }}
        >
          {name}
        </div>
        <div className="project-description text-sm text-text_light/40 text-start mt-1 overflow-scroll">
          {description.length > 60 ? (
            <>
              {/* Render full description on mobile */}
              <div className="block md:hidden">{description}</div>

              {/* Render truncated description with "Read more" on desktop */}
              <div className="hidden md:block">
                {description.substring(0, 55)}...
                <span className="text-blue opacity-100 cursor-pointer">
                  Read more
                </span>
              </div>
            </>
          ) : (
            description
          )}
        </div>

        <div className="tech flex justify-start items-start flex-wrap gap-2 mt-5 h-10">
          {technologies.map((t) => {
            return (
              <div
                className="text-xs h-fit px-2 py-[.2px] rounded-sm"
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
        <div className="pt-5 pb-4">
          <Link target="_blank" to={link}>
            <img
              src={maximize}
              className="w-4 h-4 md:w-3 md:h-3 opacity-30 hover:opacity-70 transition-opacity duration-300"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projectcomponent;
