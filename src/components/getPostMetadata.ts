import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "../components/PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "src/app/team/members";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(
      `src/app/team/members/${fileName}`,
      "utf8"
    );
    const matterResult = matter(fileContents);
    return {
      id: matterResult.data.id,
      username: matterResult.data.username,
      name: matterResult.data.name,
      designation: matterResult.data.designation,
      email: matterResult.data.email,
      linkedin: matterResult.data.linkedin,
    };
  });

  return posts;
};

export default getPostMetadata;
