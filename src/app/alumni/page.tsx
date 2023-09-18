import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
const HomePage = () => {
  const postMetadata = getPostMetadata();

  const alumniPosts = postMetadata.filter(
    (post) => post.designation === "Alumni"
  );

  const alumniPreviews = alumniPosts.map((post) => <PostPreview {...post} />);

  return (
    <div className="bg-black min-h-screen md:pt-20 pt-20 md:px-14 px-5 flex flex-col">
      <h1 className="font-montserratB text-white text-3xl py-5">Alumni</h1>{" "}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10">
        {alumniPreviews}
      </div>
    </div>
  );
};

export default HomePage;
