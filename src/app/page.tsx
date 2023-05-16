import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function Home() {
  const staticData = await fetch("https://api.github.com/users/matheusburey", {
    next: { revalidate: 2592000 }, // 2592000 = 30 days
  });
  const data: IData = await staticData.json();

  return (
    <>
      <Header user={data} />
      <main>
        <div className="container">
          <div className="linha">
            <div className="coluna coluna-esquerda">
              <section>
                <h2>Perfil Profissional</h2>
                <p>
                  Olá, sou um estudante de desenvolvimento web, apaixonado por
                  tecnologia, hoje meu foco é ser desenvolvedor Front-End mais
                  meu objetivo é ser um full stack, gosto de resolver problemas
                  e sempre mantenho a calma para resolver os problemas das
                  maneiras mais simples possíveis e também sou comunicativo e
                  bem humorado.
                </p>
              </section>
              <section>
                <h2>Especialidades</h2>
                <ul>
                  <li>HTML 5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>Python3</li>
                  <li>Git</li>
                </ul>
              </section>
              <section>
                <h2>Cursos</h2>
                <ul>
                  <li>HTML5 e CSS3 - Kenzie Academy Brasil</li>
                  <li>JavaScript - Alura</li>
                  <li>Python3 - Kenzie Academy Brasil</li>
                  <li>WordPress/woocommerce - Curso em Video</li>
                </ul>
              </section>
            </div>
            <div className="coluna coluna-direita">
              <section>
                <h2>Experiencias</h2>
                <ul>
                  <li>
                    <h3>Desenvolvedor de sites com WordPress</h3>
                    <strong>Freelancer</strong>
                    <p>
                      Tenho experiencia trabalhando de freelancer na construção
                      de sites e blogs com WordPress.
                    </p>
                    <strong>templates prontos:</strong>
                    <nav>
                      <ul>
                        <li>
                          <a href="#" target="_blank">
                            Loja de roupas
                          </a>
                        </li>
                        <li>
                          <a href="#">Restaurante</a>
                        </li>
                      </ul>
                    </nav>
                  </li>
                  <li>
                    <h3>Desenvolvimento de sites em HTML5 e CSS3</h3>
                    <strong>Freelancer</strong>
                    <p>
                      Tenho experiencia trabalhando de freelancer na construção
                      de sites com html5 e css3.
                    </p>
                  </li>
                </ul>
              </section>
              <section>
                <h2>Formação</h2>
                <ul>
                  <li>
                    <h3>Desenvolvedor de sites com WordPress</h3>
                    <strong>Freelancer</strong>
                    <p>
                      Tenho experiencia trabalhando de freelancer na construção
                      de sites e blogs com WordPress.
                    </p>
                  </li>
                  <li>
                    <h3>Desenvolvimento de sites em HTML5 e CSS3</h3>
                    <strong>Freelancer</strong>
                    <p>
                      Tenho experiencia trabalhando de freelancer na construção
                      de sites com html5 e css3.
                    </p>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer user={data} />
    </>
  );
}
