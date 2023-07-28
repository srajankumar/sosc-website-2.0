import { FC } from "react";
import Link from "next/link";
interface LinkProps {
  href: string;
  text: string;
}

const Links: FC<LinkProps> = ({ href, text }) => {
  return (
    <div className="pt-2">
      <Link
        className="hover:underline decoration-chartreuse-100 underline-offset-8"
        href={href}
        target="blank"
      >
        {text}
      </Link>
    </div>
  );
};

export default Links;
