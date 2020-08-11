import {FiLogIn} from 'react-icons/fi';
import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.svg';

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta" />
        </header>

        <main>
          <h1>seu problema resolvido!.</h1>
          <p>Ajudamos pessoas a encontrarem pontos de servições de carros de forma eficiente.</p>
           <Link to="/create-point">
            <span>
          <FiLogIn/>
            </span>
            <strong>
              Cadastre o seu ponto
            </strong>
            </Link>
        </main>
      </div>
    </div>
  )
}

export default Home;