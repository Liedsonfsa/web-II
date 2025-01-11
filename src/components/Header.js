import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const teste = () => {
        console.log('Botão explorar clicado');
    };

    const redirecionarParaPerfil = () => {
        console.log('Redirecionando para perfil');
    };

    return (
        <header>
            <div className="logo">Logo</div>
            <div className="search-bar">
                <input type="text" placeholder="Local..." />
                <button>Buscar</button>
            </div>
            <div className="buttons">
                <button className="explore-btn" onClick={teste}>
                    <FontAwesomeIcon icon={faCompass} />
                </button>
                <button className="profile-btn" onClick={redirecionarParaPerfil}>
                    <FontAwesomeIcon icon={faUser} />
                </button>
            </div>
        </header>
    );
};

export default Header;
