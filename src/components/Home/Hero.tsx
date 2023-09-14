import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center p-20 bg-black">
      <div className="absolute w-4/5 font-montserratB md:left-[3.5rem] left-[1.69rem] text-white ">
        <div className="lg:text-7xl md:text-6xl text-5xl md:leading-[4rem] lg:leading-[4.96rem]">
          Sahyadri Open Source{" "}
          <span className="text-chartreuse-200">Community</span>
        </div>
        <p className="font-montserratR lg:w-[50rem] pt-5">
          A community driven by tech enthusiasts and open-source contributors,
          to help young students to be part of the open-source ecosystem by
          providing training and skill development.
        </p>
        <div className="flex mt-7 text-sm justify-center rounded-full items-center bg-chartreuse-200 text-black w-[7.25rem] h-[2.125rem]">
          Learn More
        </div>
      </div>
    </div>
  );
};

export default Hero;
