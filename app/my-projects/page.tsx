import ProjectSlider from "@/components/ProjectSlider";
import React from "react";

const MyProjects = () => {
  return (
    <div className="flex items-center justify-center gap-5 flex-col md:flex-row h-screen bg-[#0c011a]">
      <div className="flex flex-col gap-3 mt-40 md:mt-5">
        <h1 className="text-[50px] text-white font-semibold">
          My work<span className="text-red-500">.</span>
        </h1>
        <p className="text-[16px] max-w-[400px] text-gray-200 md:text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
          dolore. Dolorem velit, ipsam nobis odio quibusdam temporibus deleniti.
        </p>
      </div>
      <ProjectSlider />
    </div>
  );
};

export default MyProjects;
