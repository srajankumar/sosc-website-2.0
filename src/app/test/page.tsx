import React from "react";

const page = () => {
  return (
    <div>
      {/* <div>
        <div className="bg-black flex justify-end md:px-20 px-5 min-h-screen">
          <div className="p-5 bg-yellow-300 border-r-4 w-1/2 border-b-4 rounded-br-[6rem] h-[95vh]">
            ss
          </div>
        </div>
        <div className="bg-black flex justify-start -mt-[5.5vh]  md:px-20 px-5 pb-20 min-h-screen">
          <div className="p-5 bg-yellow-300 border-t-4 w-1/2 border-l-4 rounded-tl-[6rem]">
            ss
          </div>
        </div>
      </div> */}
      {/* <div className="flex w-full absolute top-0 justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1180"
          height="1857"
          viewBox="0 0 1180 1857"
          fill="none"
        >
          <path
            d="M1178 0C1178 169.683 1178 507.005 1178 583.229C1178 652.523 1133.24 773.522 1051.17 773.522C985.511 773.522 128.305 773.522 91.0007 773.522C66.7531 773.522 2 771.29 2 829.284C2 887.279 9.5 1749.18 9.5 1856.5"
            stroke="url(#paint0_linear_562_202)"
            stroke-width="4"
          />
          <defs>
            <linearGradient
              id="paint0_linear_562_202"
              x1="1150.95"
              y1="178.123"
              x2="777.915"
              y2="1187.17"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#64FF04" />
              <stop offset="1" stop-color="#52FF00" stop-opacity="0.09" />
            </linearGradient>
          </defs>
        </svg>
      </div> */}
      <div>
        <div className="bg-black flex justify-end md:px-20 px-5 min-h-screen">
          <div className="flex bg-gradient-to-bl from-chartreuse-200 to-chartreuse-300 pr-1 pb-1 rounded-br-[6rem] w-1/2 h-[95vh]">
            <div className="bg-black p-4 w-full rounded-br-[5.7rem]"></div>
          </div>
        </div>
        <div className="bg-black flex justify-start md:-mt-[5.5vh] -mt-[5.4vh] md:px-20 px-5 min-h-screen">
          <div className="bg-gradient-to-r flex from-chartreuse-400 to-chartreuse-300 pl-1 pt-1 rounded-tl-[6rem] w-1/2 h-[95vh]">
            <div className="bg-black p-4 w-full rounded-tl-[5.7rem]"></div>
          </div>
        </div>
        <div className="bg-black flex justify-start -mt-[6.1vh] md:px-20 px-5 min-h-screen">
          <div className="bg-gradient-to-b flex from-chartreuse-400 to-black pl-1 w-1/2 h-[95vh]">
            <div className="bg-black p-4 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
