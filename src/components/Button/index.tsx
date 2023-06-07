import Link from "next/link";

interface IProps {
  text: string;
  href: string;
}
export default function Button({ text, href }: IProps) {
  return (
    <Link href={href} className="bg-blue-900 text-gray-100 px-8 py-3 rounded font-bold text-2xl hover:bg-blue-700 transition duration-300">
      {text}
    </Link>
  );
}
