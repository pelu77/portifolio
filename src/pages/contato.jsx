
import './contato.css';

function Contato() {
  return (
    <main className="pagina-contato">
      <h1>Entre em contato</h1>

      <p>
        Quer conversar sobre projetos, oportunidades ou
        tecnologia? Entre em contato comigo.
      </p>

      <div className="contatos">
        <a href="mailto:seuemail@exemplo.com">
          E-mail
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </main>
  );
}

export default Contato;