interface IProps {
  text: string;
  href: string;
}

export default function Link({ text, href }: IProps) {
  return (
    <a href={href} className="hover:text-blue-300 p-3 font-bold">
      {text}
    </a>
  );
}
