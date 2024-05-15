import React from 'react';
import { UilInstagram } from '@iconscout/react-unicons'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h5>Academia</h5>
        <a href="https://www.instagram.com/suaconta" target="_blank" rel="noopener noreferrer" className="btn-instagram">
          {UilInstagram }
        </a>
      </div>
    </footer>
  );
}

export default Footer;
