import React from 'react';
import './styles.css';

import logo from '../../assets/logo.png';

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta" />
        </header>

        <main>
          <h1>seu problema resolvido.</h1>
          <p>Ajudamos pessoas a encontrarem pontos de servições de carros de forma eficiente.</p>
           <a href="/cadastro">
            <span>
          
            </span>
            <strong>
              Cadastre o seu ponto
            </strong>
            </a>
        </main>
      </div>
    </div>
  )
}

export default Home;