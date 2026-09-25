
import './apresentacao.css';
import minhaFoto from '../assets/Foto-teste.jpg';

function Apresentacao() {
  return (
    <main className="apresentacao">
      <p>ESTUDANTE DE ENGENHARIA DA COMPUTAÇÃO</p>

      <h1>
        Olá, eu sou o <span>Pedro</span>
      </h1>

      <p>
        Sou estudante de Engenharia da Computação na universidade de Fortaleza (UNIFOR) e tenho
        interesse em desenvolvimento full-stack,
        e tecnologia.
      </p>

      <div className="foto">
        <img src={minhaFoto} alt="Minha foto" />
      </div>

      <a href="/projetos" className="botao">Ver meus projetos</a>
    </main>
  );
}

export default Apresentacao;