import React from 'react';

const numero = '5491133445566'; // Cambiar por el número real de Hey Jack!
const mensaje = encodeURIComponent('Hola, quiero más información sobre Hey Jack!');

const WhatsAppButton = () => (
  <a href={`https://wa.me/${numero}?text=${mensaje}`} target="_blank" rel="noopener noreferrer" style={{
    position: 'fixed',
    bottom: 24,
    right: 24,
    zIndex: 1000,
    background: 'linear-gradient(135deg, #1de782 60%, #00c9a7 100%)',
    borderRadius: '50%',
    width: 64,
    height: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 12px rgba(0,0,0,0.25)'
  }} aria-label="WhatsApp">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill="none"/>
      <path d="M16 3C9.373 3 4 8.373 4 15c0 2.522.797 4.86 2.186 6.797L4 29l7.389-2.129A12.94 12.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-2.05 0-3.997-.614-5.627-1.672l-.4-.252-4.389 1.264 1.25-4.267-.26-.413A9.963 9.963 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.207-7.793c-.293-.293-.768-.293-1.061 0l-1.146 1.146c-.293.293-.293.768 0 1.061.293.293.768.293 1.061 0l1.146-1.146c.293-.293.293-.768 0-1.061z" fill="#fff"/>
    </svg>
  </a>
);

export default WhatsAppButton;
