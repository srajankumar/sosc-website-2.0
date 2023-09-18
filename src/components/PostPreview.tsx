import { PostMetadata } from "./PostMetadata";
import MemberCard from "./Team/MemberCard";

const PostPreview = (props: PostMetadata) => {
  return (
    <div>
      <MemberCard
        name={props.name}
        role={props.designation}
        imageSrc={`https://avatars1.githubusercontent.com/${props.username}`}
        username={props.username}
      />
    </div>
  );
};

export default PostPreview;
