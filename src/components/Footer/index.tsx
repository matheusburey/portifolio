import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

interface IProps {
  user: IData;
}

export default function Footer({ user }: IProps) {
  return (
    <footer className="bg-black text-white py-16 w-full px-6">
      <div className="max-w-7xl mx-auto flex justify-between">
        <div className="max-w-md">
          <h1 className="font-bold text-xl mb-6">{user.name.toUpperCase()}</h1>
          <p className="text-sm">{user.bio}</p>
        </div>
        <div>
          <h2 className="font-bold text-xl">SOCIAL</h2>
          <nav className="flex gap-5 pt-4">
            <Link href={user.html_url} target="_blank">
              <AiFillGithub size={25} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/matheus-h-burei/"
              target="_blank"
            >
              <AiFillLinkedin size={25} />
            </Link>
            <Link
              href={`https://twitter.com/${user.twitter_username}`}
              target="_blank"
            >
              <AiOutlineTwitter size={25} />
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
