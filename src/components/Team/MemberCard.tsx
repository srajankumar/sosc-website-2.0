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
    <Link
      href={`https://github.com/${username}`}
      target="_blank"
      className="flex hover:shadow-xl aaa transition duration-300 px-5 items-center w-full h-[7rem] rounded-3xl"
      // className="flex hover:border-chartreuse-200 border-2 border-black transition duration-300 px-5 items-center w-full h-[7rem] bg-gradient-to-br from-black via-[#111111] via-70% to-[#212121] to-100% rounded-3xl"
    >
      <div className="rounded-full">
        <Image
          className="w-20 h-20 rounded-full"
          src={imageSrc}
          alt=""
          width={500}
          height={500}
        />
      </div>
      <div className="text-black w-3/4 px-5 font-montserratB">
        <h1 className="py-1">{name}</h1>
        <p className="font-montserratR text-sm">{role}</p>
      </div>
    </Link>
  );
};

export default MemberCard;
