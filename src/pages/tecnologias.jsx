import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiVite,
  SiPython,
  SiSpring,
  SiFirebase,
  SiNodered,
  SiPostman,
  SiSwift,
} from "react-icons/si";
import { FaJava, FaBolt } from "react-icons/fa";
import './tecnologias.css';

function Tecnologias() {
  return (
    <main className="pagina-tecnologias">
      <h1 className="tecnologias-titulo">Tecnologias</h1>

      <p className="tecnologias-subtitulo">
        Ferramentas e linguagens que já utilizei em projetos e estudos.
      </p>

      <div className="tecnologias-secoes">
        <div className="tecnologia-categoria">
          <h2>Front-end</h2>
          <div className="tecnologia-grid">
            <div className="tecnologia-item">
              <SiHtml5 size={40} color="#E34F26" />
              <span>HTML</span>
            </div>

            <div className="tecnologia-item">
              <SiCss size={40} color="#1572B6" />
              <span>CSS</span>
            </div>

            <div className="tecnologia-item">
              <SiJavascript size={40} color="#F7DF1E" />
              <span>JavaScript</span>
            </div>

            <div className="tecnologia-item">
              <SiReact size={40} color="#61DAFB" />
              <span>React</span>
            </div>

            <div className="tecnologia-item">
              <SiVite size={40} color="#646CFF" />
              <span>Vite</span>
            </div>

            <div className="tecnologia-item">
              <SiSwift size={40} color="#F05138" />
              <span>Swift</span>
            </div>
          </div>
        </div>

        <div className="tecnologia-categoria">
          <h2>Back-end</h2>
          <div className="tecnologia-grid">
            <div className="tecnologia-item">
              <FaJava size={40} color="#f89820" />
              <span>Java</span>
            </div>

            <div className="tecnologia-item">
              <SiSpring size={40} color="#6DB33F" />
              <span>Spring</span>
            </div>

            <div className="tecnologia-item">
              <SiPython size={40} color="#3776AB" />
              <span>Python</span>
            </div>

            <div className="tecnologia-item">
              <SiFirebase size={40} color="#FFCA28" />
              <span>Firebase</span>
            </div>

            <div className="tecnologia-item">
              <SiNodered size={40} color="#8F0000" />
              <span>Node-RED</span>
            </div>

            <div className="tecnologia-item">
              <SiPostman size={40} color="#FF6C37" />
              <span>Postman</span>
            </div>

            <div className="tecnologia-item">
              <FaBolt size={40} color="#3B82F6" />
              <span>Thunder Client</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Tecnologias;