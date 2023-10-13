import Image from 'next/image'
import Button from '../Button'

interface IProps {
  name: string
  description: string
  img: string
}

export function Projects({ description, name, img }: IProps) {
  return (
    <div className="flex justify-evenly mt-12">
      <Image src={img} alt="banner projet" width={300} height={300} />
      <div className="text-left w-[400px]">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-md my-7 text-gray-600">{description}</p>
        <Button text="VER PROJETO" href={img} />
      </div>
    </div>
  )
}
