import Button from '../Button'
import { IData } from '@/app/types'
import { Projects } from './Projects'

const skills = [
  'HTML',
  'CSS',
  'JavaScrip',
  'React',
  'Sass',
  'Tailwind',
  'Node',
  'Python',
  'Git',
  'Docker',
  'SQL',
  'Typescript',
  'Vue',
  'Next',
  'Django',
]

const projectInHighlights = [
  {
    name: 'Feedback Widget',
    description:
      'Um Component Widget para feedback que pode ser utilizado em qualquer site.',
    img: 'https://github.com/matheusburey/feedback_widget/blob/main/.github/img_project.png?raw=true',
    link: 'https://github.com/matheusburey/feedback_widget',
  },
  {
    name: 'Feedback Widget',
    description:
      'Um Component Widget para feedback que pode ser utilizado em qualquer site.',
    img: 'https://github.com/matheusburey/feedback_widget/blob/main/.github/img_project.png?raw=true',
    link: 'do-it-beige.vercel.app',
  },
  {
    name: 'Do It',
    description: 'Um app organize seu trabalho e sua vida.',
    img: 'https://github.com/matheusburey/feedback_widget/blob/main/.github/img_project.png?raw=true',
    link: 'https://github.com/matheusburey/feedback_widget',
  },
]

interface IProps {
  user: IData
}

export default function Main({ user }: IProps) {
  return (
    <main>
      <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold">
          OLA, SOU {user.name.toUpperCase()}
        </h1>
        <p className="text-2xl text-gray-700 py-20 max-w-3xl text-center">
          {user.bio}
        </p>
        <Button text="PROJETOS" href="#projects" />
      </div>

      <div id="about" className="py-28 max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">SOBRE MIM</h2>
          <hr className="border-y-2 border-blue-500 w-10 mx-auto my-8 rounded" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">{user.bio}</p>
        </div>
        <div className="display flex">
          <div className="w-1/2 p-8 text-gray-700">
            <h3 className="text-2xl font-bold py-8 text-black">Me conhecer!</h3>
            <p className="text-xl">
              Sou um Desenvolvedor Web Fullstack que cria sites e aplicativos da
              Web que levam ao sucesso geral do produto. Confira alguns dos meus
              trabalhos na seção de projetos.
            </p>
            <p className="pb-10 pt-4 text-xl">
              Estou aberto a oportunidades de trabalho onde possa contribuir,
              aprender e crescer. Se você tiver uma boa oportunidade que
              corresponda às minhas habilidades e experiência, não hesite em
              entrar em contato comigo.
            </p>
            <Button text="PROJETOS" href="#projects" />
          </div>
          <div className="w-1/2 p-8">
            <h3 className="font-bold text-2xl py-8">Minhas habilidades</h3>
            <div className="flex flex-wrap ">
              {skills.map((skill) => (
                <p
                  key={skill}
                  className="text-xl text-gray-600 p-3 m-2 bg-gray-200 rounded"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="projects" className="py-28 max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">PROJETOS</h2>
          <hr className="border-y-2 border-blue-500 w-10 mx-auto my-8 rounded" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Aqui você encontrará alguns dos projetos pessoais e de clientes que
            criei com cada projeto contendo seu próprio estudo de caso
          </p>
          <div className="pt-32 px-12">
            {projectInHighlights.map((project) => (
              <Projects key={project.name} {...project} />
            ))}
          </div>
        </div>
      </div>
      <div id="contact" className="py-28 mx-auto px-6 bg-gray-100">
        <div className="text-center">
          <h2 className="text-4xl font-bold">CONTATO</h2>
          <hr className="border-y-2 border-blue-500 w-10 mx-auto my-8 rounded" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Sinta-se à vontade para entrar em contato comigo enviando o
            formulário abaixo e retornarei o mais breve possível.
          </p>
        </div>
        <form
          action="https://getform.io/f/8f633616-a370-41f7-9f57-3968e852c92d"
          className="max-w-3xl mx-auto bg-white p-10 text-gray-600 font-medium shadow-lg mt-8"
          method="POST"
        >
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Digite seu nome"
              className="bg-gray-200 w-full rounded p-2 text-xl my-4"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu email"
              className="bg-gray-200 w-full rounded p-2 text-xl my-4"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Digite sua mensagem"
              rows={5}
              className="bg-gray-200 w-full rounded p-2 text-xl my-4"
            ></textarea>
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-500 py-4 rounded px-8 text-xl text-white shadow-lg hover:bg-blue-600"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
