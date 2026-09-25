import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Apresentacao from './pages/apresentacao';
import Projetos from './pages/projetos';
import Tecnologias from './pages/tecnologias';
import Cursos from './pages/cursos';
import Contato from './pages/contato';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Apresentacao />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/tecnologias" element={<Tecnologias />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;