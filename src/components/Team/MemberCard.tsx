// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// interface MemberCardProps {
//   username: string;
//   name: string;
//   role: string;
//   imageSrc: string;
// }

// const MemberCard: React.FC<MemberCardProps> = ({
//   username,
//   name,
//   role,
//   imageSrc,
// }) => {
//   return (
//     <Link
//       href={`https://github.com/${username}`}
//       target="_blank"
//       className="flex hover:border-chartreuse-200 border-2 border-black transition duration-300 px-5 items-center w-full h-[7rem] bg-gradient-to-br from-black via-[#111111] via-70% to-[#212121] to-100% rounded-3xl"
//     >
//       <div className="rounded-full">
//         <Image
//           className="w-20 h-20 rounded-full"
//           src={imageSrc}
//           alt=""
//           width={500}
//           height={500}
//         />
//       </div>
//       <div className="text-white w-3/4 px-5 font-montserratB">
//         <h1 className="py-1">{name}</h1>
//         <p className="font-montserratR text-sm">{role}</p>
//       </div>
//     </Link>
//   );
// };

// export default MemberCard;

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface MemberCardProps {
  username: string;
  name: string;
  role: string;
  imageSrc: string;
}

const MemberCard: React.FC<MemberCardProps> = ({
  username,
  name,
  role,
  imageSrc,
}) => {
  return (
    <div className="relative text-white flex flex-col">
      <Image
        className="z-10 mt-0 rotate-0 right-3 left-0 absolute w-16"
        src="/assets/team/tilted-box.png"
        alt="logo"
        width={500}
        height={500}
      ></Image>
      <Link href={`https://github.com/${username}`} target="_blank">
        <Image
          className="bg-black ml-0 rounded-md mt-7 z-10 absolute w-24 h-24 aspect-square object-cover"
          src={imageSrc}
          alt="speaker"
          width={500}
          height={500}
        ></Image>
      </Link>
      <Link
        href={`https://github.com/${username}`}
        target="_blank"
        className="ml-10 mt-[3.4rem] shadow-lg text-black hover:shadow-xl transition-all duration-200 rounded-xl"
      >
        <div className="mt-5 ml-20 my-5 mr-5 flex flex-col gap-1">
          <h1 className="font-medium tracking-wide text-lg">{name}</h1>
          <h3 className="font-medium text-black/75 tracking-wider text-sm">
            {role}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default MemberCard;
