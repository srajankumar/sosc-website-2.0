import getPostMetadata from "@/components/getPostMetadata";
import Links from "@/components/Links";
import PostPreview from "@/components/PostPreview";
import Image from "next/image";
import Link from "next/link";
const HomePage = () => {
  const postMetadata = getPostMetadata();

  const president = postMetadata.filter(
    (post) => post.designation === "President"
  );

  const vicePresident = postMetadata.filter(
    (post) => post.designation === "Vice President"
  );

  const generalSecretary = postMetadata.filter(
    (post) => post.designation === "General Secretary"
  );

  const soswcPresident = postMetadata.filter(
    (post) => post.designation === "SOSWC - President"
  );

  const soswcVPresident = postMetadata.filter(
    (post) => post.designation === "SOSWC - Vice President"
  );

  const treasurer = postMetadata.filter(
    (post) => post.designation === "Treasurer"
  );

  const techLead = postMetadata.filter(
    (post) => post.designation === "Technical Lead"
  );

  const webAdmin = postMetadata.filter(
    (post) => post.designation === "Web Lead"
  );

  const domainLeads = [
    "App Lead",
    "AI/ML Lead",
    "Competitive Programming and DSA Lead",
    "Cybersecurity Lead",
  ];

  const communityLead = postMetadata.filter(
    (post) => post.designation === "Community Lead"
  );

  const coLeads = ["Content Co-Lead", "Design Co-Lead"];

  const coreMembersPosts = postMetadata.filter(
    (post) =>
      ![
        "Alumni",
        "President",
        "Vice President",
        "Technical Lead",
        "Treasurer",
        "SOSWC - Vice President",
        "SOSWC - President",
        "General Secretary",
        "Web Lead",
        "App Lead",
        "AI/ML Lead",
        "Competitive Programming and DSA Lead",
        "Cybersecurity Lead",
        "Content Co-Lead",
        "Design Co-Lead",
        "Community Lead",
      ].includes(post.designation)
  );

  const presidentPreview = president.map((post) => (
    <PostPreview key={post.id} {...post} />
  ));

  const vicePresidentPreview = vicePresident.map((post) => (
    <PostPreview key={post.id} {...post} />
  ));

  const generalSecretaryPreview = generalSecretary.map((post) => (
    <PostPreview key={post.id} {...post} />
  ));

  const soswcPresidentPreview = soswcPresident.map((post) => (
    <PostPreview key={post.id} {...post} />
  ));

  const soswcVPresidentPreview = soswcVPresident.map((post) => (
    <PostPreview key={post.id} {...post} />
  ));

  const treasurerPreview = treasurer.map((post) => (
    <PostPreview key={post.id} {...post} />
  ));

  const techLeadPreview = techLead.map((post) => (
    <PostPreview key={post.id} {...post} />
  ));

  const webAdminPreview = webAdmin.map((post) => (
    <PostPreview key={post.id} {...post} />
  ));

  const communityLeadPreview = communityLead.map((post) => (
    <PostPreview key={post.id} {...post} />
  ));

  const coreMembersPreviews = coreMembersPosts.map((post) => (
    <PostPreview key={post.id} {...post} />
  ));

  const domainLeadsPreview = postMetadata
    .filter((post) => domainLeads.includes(post.designation))
    .map((post) => <PostPreview key={post.id} {...post} />);
  6;

  const coLeadsPreview = postMetadata
    .filter((post) => coLeads.includes(post.designation))
    .map((post) => <PostPreview key={post.id} {...post} />);
  6;

  return (
    <div className="bg-white">
      <div className="bg-black md:py-20 py-14">
        <h1 className="text-white pt-10 font-bold tracking-wide text-4xl md:text-5xl text-center">
          Team
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-5 min-h-[100dvh] flex flex-col">
        <h1 className="font-semibold mt-10 mb-5 text-black text-2xl py-5">
          Co-ordinators
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          <div className="relative flex flex-col">
            <Image
              className="z-10 mt-0 rotate-0 right-3 left-0 absolute w-16"
              src="/assets/team/tilted-box.png"
              alt="logo"
              width={500}
              height={500}
            ></Image>
            <Image
              className="bg-black ml-0 rounded-md mt-7 z-10 absolute w-24 h-24 aspect-square object-cover"
              src="/assets/team/mustafa_basthikodi.jpg"
              alt="speaker"
              width={500}
              height={500}
            ></Image>
            <div className="ml-10 mt-[3.4rem] shadow-lg text-black hover:shadow-xl transition-all duration-200 rounded-xl">
              <div className="mt-5 ml-20 my-5 mr-5 flex flex-col gap-1">
                <h1 className="font-medium tracking-wide text-lg">
                  Dr. Mustafa Basthikodi
                </h1>
                <h3 className="font-medium text-black/75 tracking-wider text-sm">
                  Faculty Co-ordinator
                </h3>
              </div>
            </div>
          </div>
        </div>
        <h1 className="font-semibold mt-10 mb-5 text-black text-2xl py-5">
          Core Members
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {presidentPreview}
          {vicePresidentPreview}
          {generalSecretaryPreview}
          {treasurerPreview}
          {soswcPresidentPreview}
          {soswcVPresidentPreview}
          {techLeadPreview}
          {webAdminPreview}
          {domainLeadsPreview}
          {coreMembersPreviews}
          {coLeadsPreview}
          {communityLeadPreview}
        </div>
        <div className="font-montserratB text-white text-center mt-10">
          <Links href="/alumni" target="" text="Meet our Amazing Alumni!" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
