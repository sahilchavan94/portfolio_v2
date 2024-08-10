import React from "react";

const EducationComp = ({
  join,
  end,
  logoImg,
  title,
  subTitle,
  grades,
  desc,
}) => {
  return (
    <div className="edu-details mt-5 w-full md:w-1/2 bg-card p-5 rounded-lg lg:rounded-2xl z-50">
      <div className="flex text-2xl items-center font-semibold">
        <img
          src={logoImg}
          className="w-10 h-10 rounded-full object-cover mr-2"
          alt=""
        />
        {title}
      </div>
      <div className="text-text_light opacity-60 text-sm mt-4">{subTitle}</div>
      <div className="edu-details-head text-sm font-normal text-text_light opacity-60 mt-1">
        {join} to {end}, {grades}
        <div className="text-text_light opacity-60 mt-3">{desc}</div>
      </div>
    </div>
  );
};

export default EducationComp;