import React from 'react';

const numero = '5491133445566'; // Cambiar por el número real de Hey Jack!
const mensaje = encodeURIComponent('Hola, quiero más información sobre Hey Jack!');

import styles from './WhatsAppButton.module.css';
const WhatsAppButton = () => (
  <a href={`https://wa.me/${numero}?text=${mensaje}`} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn} aria-label="WhatsApp">
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.4 8.5 8.5 0 1 1-2.6-13.2"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
  </a>
);

export default WhatsAppButton;
