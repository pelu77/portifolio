import './cursos.css';

function Cursos() {
  return (
    <main className="pagina-cursos">
      <h1 className="cursos-titulo">Cursos e Experiências</h1>

      <p className="cursos-subtitulo">
        Alguns dos cursos, imersões e eventos que participei ao longo da minha jornada.
      </p>

      <div className="cursos-grid">
        <div className="curso-card">
          <h2 className="titulo">Imersão em Python</h2>
          <span className="curso-instituicao">Santander Open Academy</span>
          <p className="curso-aprendizado">
            Nesse curso, aprendi os fundamentos do Python do zero até um nível sólido de compreensão. Desenvolvi a habilidade de escrever códigos de forma clara e eficiente, através de aulas interativas, exercícios práticos e problemas reais
          </p>
        </div>

        <div className="curso-card">
          <h2 className="titulo">Curso de Java</h2>
          <span className="curso-instituicao">Coursera</span>
          <p className="curso-aprendizado">
            Nesse curso, aprendi os fundamentos da programação orientada a objetos (POO) em Java, incluindo conceitos como classes, herança e polimorfismo. Também desenvolvi conhecimento sobre como consumir e integrar APIs, aplicando esse aprendizado em exercícios práticos.
          </p>
        </div>

        <div className="curso-card">
          <h2 className="curso-titulo">Hackatruck Maker Space</h2>
          <span className="curso-instituicao">El Dorado</span>
          <p className="curso-aprendizado">
            No Hackatruck Maker Space, tive a oportunidade de explorar diferentes tecnologias em um formato prático e colaborativo. Aprendi os fundamentos de Swift para desenvolvimento mobile, construí e integrei APIs, e tive contato com prototipagem física através de impressão 3D e Arduino, unindo hardware e software em projetos reais
          </p>
        </div>
      </div>
    </main>
  );
}

export default Cursos;