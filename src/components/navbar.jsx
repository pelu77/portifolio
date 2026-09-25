import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        Pedro Lucas
      </Link>

      <nav className="nav-links">
        <Link to="/" className='apresentacao_link'>Apresentação</Link>
        <Link to="/projetos" className='projetos_link'>Projetos</Link>
        <Link to="/tecnologias" className='tecnologias'>Tecnologias</Link>
        <Link to="/cursos" className='cursos_link'>Cursos</Link>
        <Link to="/contato" className='contato_link'>Contato</Link>
      </nav>
    </header>
  );
}

export default Navbar;