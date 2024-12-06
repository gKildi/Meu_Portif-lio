import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contato from './pages/contato';
import NotFound from './pages/NotFound';


import './assets/styles/Portfolio.css';
import './assets/styles/home.css';
import './assets/styles/contato.css';
import './assets/styles/app.css';


function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to ="/Portfolio">Projetos</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Este é o meu Portifólio, seja Bem-vindo.</h1>
        <footer className="direitos">2024, Kildey Ruan. Todos os direitos reservados. 
        <p className='links'> <a href="https://www.github.com/gKildi/" target="_blank" rel="noopener noreferrer">Acesse meu GitHub</a> </p>
        <p className='links'><a href="https://www.linkedin.com/in/o-kildey-ruan/" target="_blank" rel="noopener noreferrer">Acesse meu LinkedIn</a> </p>
        <p className='links'><a href="https://www.instagram.com/okildii/" target="_blank" rel="noopener noreferrer">Acesse meu Instagram</a> </p>
        </footer>
      </main>
    </Router>
  );
}

export default App;
