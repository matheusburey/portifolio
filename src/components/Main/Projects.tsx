import Image from 'next/image'
import Button from '../Button'

export function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Image
        src="https://github.com/matheusburey/feedback_widget/blob/main/.github/img_project.png?raw=true"
        alt="banner projet"
        width={300}
        height={300}
      />
      <div className="text-left">
        <h2 className="text-xl font-bold">FEEDBACK WIDGET</h2>
        <p>
          Um Component Widget para feedback que pode ser utilizado em qualquer
          site.
        </p>
        <Button
          text="VER PROJETO"
          href="https://feedback-widget-topaz-seven.vercel.app/"
        />
      </div>
    </div>
  )
}
