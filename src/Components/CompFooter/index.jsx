// Footer.js

import React from 'react';
import './style.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 MovieNet. Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href="/termos">Termos de Serviço</a>
          <a href="/privacidade">Política de Privacidade</a>
          <a href="/contato">Contato</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
