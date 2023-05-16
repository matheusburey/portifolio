import Image from "next/image";
import Link from "./Link";

interface IProps {
  user: IData;
}

export default function Header({ user }: IProps) {
  return (
    <header className="py-5 flex justify-around items-center">
      <div className="flex items-center gap-5">
        <figure>
          <Image
            src={user.avatar_url}
            alt={user.name}
            width={50}
            height={50}
            className="rounded-full"
          />
          <figcaption className="hidden">{user.name}</figcaption>
        </figure>
        <h1 className="font-bold text-xl">{user.name.toUpperCase()}</h1>
      </div>
      <nav>
        <Link href="#" text="HOME" />
        <Link href="#" text="ABOUT" />
        <Link href="#" text="PROJECTS" />
        <Link href="#" text="CONTACT" />
      </nav>
    </header>
  );
}
