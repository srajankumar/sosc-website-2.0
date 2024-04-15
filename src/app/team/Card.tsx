import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardData {
  id: number;
  title: string;
  date: string;
  description: string;
  speaker: string;
  linkedin: string;
  imageSrc: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    title: "Unlocking Business Potential with Salesforce Cloud",
    date: "23rd, 05:00 pm - 07:00 pm",
    description:
      "Experienced Salesforce Developer specializing in Apex, Triggers, Aura, and LWC, currently serving as the team lead at Novigo Solutions.",
    speaker: "Mohammed Shahid",
    linkedin: "https://www.linkedin.com/in/shahidbit/",
    imageSrc: "mustafa_basthikodi.jpg",
  },

  {
    id: 2,
    title: "Exploring DevOps Essentials for Modern Innovation",
    date: "23rd, 07:00 pm - 08:30 pm",
    description:
      "Master of Science and Graduate Research Assistant at The University of Texas at Arlington, USA. Former Java Full Stack Developer at IBM with expertise in Spring Boot, Angular, Cloud, CI/CD, Node.js, and Python.",
    speaker: "Arjun Suvarna",
    linkedin: "https://www.linkedin.com/in/arjun-suvarna/",
    imageSrc: "mustafa_basthikodi.jpg",
  },

  {
    id: 3,
    title: "Engineering and UX Synergy",
    date: "24th, 11:00 am - 12:30 pm",
    description:
      "Senior UI/UX Designer at Novigo Solutions with a strong background in graphic design. Former Design Head at SOSC, bringing 5 years of expertise in UI/UX.",
    speaker: "Adib Ghani Ahamed",
    linkedin: "https://www.linkedin.com/in/adib-kalopsia/",
    imageSrc: "adib.jpg",
  },

  {
    id: 4,
    title: "Ask me anything about Placements",
    date: "24th, 02:00 pm - 03:30 pm",
    description:
      "Cloud Solutions Engineer at Google. Formerly led open-source communities, including GitHub Campus Expert, Microsoft LSA, HackClub, Codechef, and SOSC.",
    speaker: "Swasthik Shetty",
    linkedin: "https://www.linkedin.com/in/swaaz/",
    imageSrc: "swaaz.jpg",
  },

  {
    id: 5,
    title: "Promising with JavaScript",
    date: "24th, 03:30 pm - 07:00 pm",
    description:
      "Frontend Developer and the President of Sahyadri Open Source Community, Postman Student Leader at SCEM. Intern at Niveus Solutions, Mangalore. Loves building projects. Exploring Cloud and DevOps.",
    speaker: "Deveesh Shetty",
    linkedin: "https://www.linkedin.com/in/swaaz/",
    imageSrc: "deveesh.jpeg",
  },
];

const Card = () => {
  return (
    <div className="flex bg-black justify-center items-center w-full">
      <div className="max-w-5xl my-20 mx-8 md:mx-14">
        <div className="md:text-4xl font-nebulaR text-3xl my-5 font-bold">
          <h1>Events</h1>
        </div>

        {cardData.map((card) => (
          <div
            key={card.id}
            className="relative text-white pb-14 flex flex-col mt-14 mb-40 my-10"
          >
            <Image
              className="z-10 mt-0 rotate-0 right-3 left-0 absolute w-20"
              src="/assets/team/tilted-box.png"
              alt="logo"
              width={500}
              height={500}
            ></Image>
            <Image
              className="bg-black ml-0 border border-white/30 rounded-md mt-7 z-10 absolute w-36 h-36 aspect-square"
              src={`/assets/team/${card.imageSrc}`}
              alt="speaker"
              width={500}
              height={500}
            ></Image>
            <div className="ml-20 mt-24 border rounded-xl">
              <div className="mt-5 ml-20 my-5 mr-5">
                <h1 className="tracking-wide mb-1 font-semibold text-xl">
                  Dr. Mustafa Basthikodi
                </h1>
                <h3 className="font-medium text-white/75 tracking-wider text-lg">
                  Faculty Co-ordinator
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
