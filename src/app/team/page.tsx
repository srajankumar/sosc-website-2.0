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
    <div className="bg-black min-h-screen md:pt-20 pt-20 md:px-14 px-5 flex flex-col">
      <h1 className="font-montserratB text-white text-3xl py-5">
        Co-ordinators
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10">
        <div className="flex hover:border-chartreuse-200 border-2 border-black transition duration-300 px-5 items-center w-full h-[7rem] bg-gradient-to-br from-black via-[#111111] via-70% to-[#212121] to-100% rounded-3xl">
          <div className="rounded-full">
            <Image
              className="w-20 h-20 rounded-full"
              src="/assets/team/mustafa_basthikodi.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="text-white w-3/4 px-5 font-montserratB">
            <h1 className="py-1">Dr. Mustafa Basthikodi</h1>
            <p className="font-montserratR text-sm">Faculty Co-ordinator</p>
          </div>
        </div>
      </div>
      <h1 className="font-montserratB text-white text-3xl py-5">
        Core Members
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10">
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
        <Links href="/alumni" target="" text="Meet our outstanding alumni" />
      </div>
    </div>
  );
};

export default HomePage;
