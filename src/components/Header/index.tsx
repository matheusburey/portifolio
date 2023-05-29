import Image from "next/image";
import Link from "./Link";

interface IProps {
  user: IData;
}

export default function Header({ user }: IProps) {
  return (
    <header className="fixed w-full p-6 bg-white">
      <div className="max-w-7xl mx-auto flex  justify-between">
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
        <nav className="flex align-center">
          <Link href="" text="HOME" />
          <Link href="#about" text="SOBRE MIM" />
          <Link href="#projects" text="PROJETOS" />
          <Link href="#contact" text="CONTATO" />
        </nav>
      </div>
    </header>
  );
}
