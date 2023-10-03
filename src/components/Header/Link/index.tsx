interface IProps {
  text: string
  href: string
}

export default function Link({ text, href }: IProps) {
  return (
    <a
      href={href}
      className="hover:text-blue-500 p-3 font-bold transition duration-300"
    >
      {text}
    </a>
  )
}
