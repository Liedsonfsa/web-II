import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="help-section">
                    <h3>Ajuda</h3>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Suporte Técnico</a></li>
                        <li><a href="#">Termos de Uso</a></li>
                    </ul>
                </div>
                <div className="contact-section">
                    <h3>Contato</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={faEnvelope} /> contato@jesus.com</li>
                        <li><FontAwesomeIcon icon={faPhone} /> (86) 4002-8922</li>
                    </ul>
                </div>
                <div className="social-section">
                    <ul>
                        <li><a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} size="lg" /></a></li>
                        <li><a href=""><FontAwesomeIcon icon={['fab', 'instagram']} size="lg" /></a></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <p>&copy; 2024 Kiko, Zinho e Lindo. Todos os direitos reservados.</p>
        </footer>
    );
};

export default Footer;
