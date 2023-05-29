interface IProps {
  text: string;
}
export default function Button({ text }: IProps) {
  return (
    <button className="bg-blue-900 text-gray-100 px-8 py-3 rounded font-bold text-2xl hover:bg-blue-700 transition duration-300">
      {text}
    </button>
  );
}
