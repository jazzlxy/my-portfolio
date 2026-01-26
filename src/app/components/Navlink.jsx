import Link from "next/link";

const Navlink = ({ href, title }) => {
  return (
    <Link href={href} className="navlink">
      {title}
    </Link>
  );
};

export default Navlink;
