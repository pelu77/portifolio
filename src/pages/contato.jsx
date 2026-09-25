import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import './contato.css';

function Contato() {
  return (
    <main className="pagina-contato">
      <h1 className='contato-texto'>Entre em contato</h1>

      <p className="contato-texto">
        Quer conversar sobre projetos, oportunidades ou
        tecnologia? Entre em contato comigo.
      </p>

      <div className="contatos">
        <a href="mailto:pedrolrc27@gmail.com" aria-label="E-mail">
          <FaEnvelope size={28} />
        </a>

        <a
          href="https://www.linkedin.com/in/pedro-lucas-rodrigues-cordeiro-8751492b1"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn size={28} />
        </a>

        <a
          href="https://github.com/pelu77"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={28} />
        </a>
      </div>
    </main>
  );
}

export default Contato;