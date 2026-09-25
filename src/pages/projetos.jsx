
import './projetos.css';

function Projetos() {
  return (
    <main className="pagina-projetos">
      <h1 className="titulo-pagina">Meus projetos</h1>

      <section className="lista-projetos">
        <article className="card-projeto">
          <h2 className="titulo-projeto">StudyTrack</h2>
          <p className="descricao-projeto">
           Site de gerenciamento de estudos, onde o usuário pode cadastrar suas metas de estudo e acompanhar seu progresso.
          </p>
          <span className="tecnologias-projeto">React, JavaScript e Firebase</span>
        </article>

        <article className="card-projeto">
          <h2 className="titulo-projeto">Portfólio pessoal</h2>
          <p className="descricao-projeto">
            Local para apresentar minha trajetória e meus
            projetos de desenvolvimento.
          </p>
          <span className="tecnologias-projeto">React, Vite, CSS e HTML</span>
        </article>

        <article className="card-projeto">
          <h2 className="titulo-projeto">API com Java e Spring Boot</h2>
          <p className="descricao-projeto">
            Projeto desenvolvido para praticar programação
            orientada a objetos.
          </p>
          <span className="tecnologias-projeto">Java, Spring Boot e POO</span>
        </article>
      </section>
    </main>
  );
}

export default Projetos;