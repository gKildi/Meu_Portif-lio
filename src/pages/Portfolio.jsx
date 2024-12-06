import React from 'react';

const Portfolio = () => {
  const projetos = [
    {
      name: 'Pokedex',
      description: 'Um projeto de um pokedex feito em react',
      image: 'https://img.freepik.com/vetores-gratis/tamagotchi-retro-isolado-no-fundo-branco_1308-128208.jpg?t=st=1733519411~exp=1733523011~hmac=21c02f5410c11ac4590c3907decb837f37a91f97a2faf98e58e51398c5da8de4&w=360',
      link: 'https://github.com/gKildi/ativ_pokedex',
    },
    {
      name: 'Projeto busca de atletas',
      description: 'um prjeto para implementar o mecanismo de busca',
      image: 'https://img.freepik.com/vetores-premium/projeto-de-conceito-de-negocio_24908-12224.jpg?w=740',
      link: 'https://github.com/gKildi/Pesquisa-atletas',
    },
    {
      name: 'Projeto To do List',
      description: 'Criação de uma lista de tarefas',
      image: 'https://img.freepik.com/fotos-gratis/mao-segurando-e-escrevendo-o-documento-do-formulario-de-inscricao-da-lista-de-verificacao-na-area-de-transferencia-na-ilustracao-3d-de-fundo-branco_56104-1551.jpg?t=st=1733519286~exp=1733522886~hmac=4ce31c2084d3e7a081d418368542dbfb401cc9602401cd70d5367a121d13e5f2&w=740',
      link: 'https://github.com/gKildi/Projeto-To-do-List',
    }
  ];

  return (
    <div className="portfolio">
      <div className="projects-list">
        {projetos.map((projeto, index) => (
          <div key={index} className="project-item">
            <img src={projeto.image} alt={projeto.name} />
            <h3>{projeto.name}</h3>
            <p>{projeto.description}</p>
            <a href={projeto.link} target="_blank" rel="noopener noreferrer">
              Ver no GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

