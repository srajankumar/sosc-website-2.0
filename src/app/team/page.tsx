import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";

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

  const alumniPosts = postMetadata.filter(
    (post) => post.designation === "Alumni"
  );

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

  const presidentPreview = president.map((post) => <PostPreview {...post} />);

  const vicePresidentPreview = vicePresident.map((post) => (
    <PostPreview {...post} />
  ));

  const generalSecretaryPreview = generalSecretary.map((post) => (
    <PostPreview {...post} />
  ));

  const soswcPresidentPreview = soswcPresident.map((post) => (
    <PostPreview {...post} />
  ));

  const soswcVPresidentPreview = soswcVPresident.map((post) => (
    <PostPreview {...post} />
  ));

  const treasurerPreview = treasurer.map((post) => <PostPreview {...post} />);

  const techLeadPreview = techLead.map((post) => <PostPreview {...post} />);

  const webAdminPreview = webAdmin.map((post) => <PostPreview {...post} />);

  const domainLeadsPreview = postMetadata
    .filter((post) => domainLeads.includes(post.designation))
    .map((post) => <PostPreview key={post.id} {...post} />);
  6;

  const coLeadsPreview = postMetadata
    .filter((post) => coLeads.includes(post.designation))
    .map((post) => <PostPreview key={post.id} {...post} />);
  6;

  const communityLeadPreview = communityLead.map((post) => (
    <PostPreview {...post} />
  ));

  const alumniPreviews = alumniPosts.map((post) => <PostPreview {...post} />);
  const coreMembersPreviews = coreMembersPosts.map((post) => (
    <PostPreview {...post} />
  ));

  return (
    <div className="bg-black min-h-screen md:pt-20 pt-20 md:px-14 px-5 flex flex-col">
      <h1 className="font-montserratB text-white text-3xl py-5">
        Core Members
      </h1>{" "}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10">
        {presidentPreview}
        {vicePresidentPreview}
        {generalSecretaryPreview}
        {soswcPresidentPreview}
        {soswcVPresidentPreview}
        {treasurerPreview}
        {techLeadPreview}
        {webAdminPreview}
        {domainLeadsPreview}
        {coreMembersPreviews}
        {coLeadsPreview}
        {communityLeadPreview}
      </div>
      <h1 className="font-montserratB text-white text-3xl py-5">Alumni</h1>{" "}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10">
        {alumniPreviews}
      </div>
    </div>
  );
};

export default HomePage;
