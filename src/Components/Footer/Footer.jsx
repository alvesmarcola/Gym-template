import React from 'react';
import { UilInstagram } from '@iconscout/react-unicons'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h5>MMT Fitness</h5>
        <a href="https://www.instagram.com/mmt_academia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="btn-instagram">
          {<UilInstagram color="white" /> }
        </a>
      </div>
    </footer>
  );
}

export default Footer;
