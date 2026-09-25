
import './projetos.css';

function Projetos() {
  return (
    <main className="pagina-projetos">
      <h1>Meus projetos</h1>

      <section className="lista-projetos">
        <article className="card-projeto">
          <h2>StudyTrack</h2>
          <p>
            Aplicação para organizar tarefas e acompanhar
            sessões de estudo.
          </p>
          <span>React, JavaScript e Firebase</span>
        </article>

        <article className="card-projeto">
          <h2>Portfólio pessoal</h2>
          <p>
            Site para apresentar minha trajetória e meus
            projetos de desenvolvimento.
          </p>
          <span>React, Vite e CSS</span>
        </article>

        <article className="card-projeto">
          <h2>Projeto Java</h2>
          <p>
            Aplicação desenvolvida para praticar programação
            orientada a objetos.
          </p>
          <span>Java e POO</span>
        </article>
      </section>
    </main>
  );
}

export default Projetos;