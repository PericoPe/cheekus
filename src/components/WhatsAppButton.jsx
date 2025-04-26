import React from 'react';

const numero = '5491133445566'; // Cambiar por el número real de Hey Jack!
const mensaje = encodeURIComponent('Hola, quiero más información sobre Hey Jack!');

const WhatsAppButton = () => (
  <a href={`https://wa.me/${numero}?text=${mensaje}`} target="_blank" rel="noopener noreferrer" style={{
    position:'fixed',
    bottom:20,
    right:20,
    background:'#21e6c1',
    color:'#fff',
    borderRadius:'50%',
    width:60,
    height:60,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    boxShadow:'0 2px 12px #1746a288',
    fontSize:'2em',
    zIndex:9999,
    textDecoration:'none',
    border:'none',
    transition:'box-shadow .2s',
    padding:0
  }}
    aria-label="WhatsApp"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.4 8.5 8.5 0 1 1-2.6-13.2"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    <style>{`
      @media (max-width: 600px) {
        a[aria-label="WhatsApp"] {
          width: 15vw !important;
          height: 15vw !important;
          min-width: 46px !important;
          min-height: 46px !important;
          max-width: 64px !important;
          max-height: 64px !important;
          bottom: 4vw !important;
          right: 2vw !important;
          font-size: 1.5em !important;
          box-sizing: border-box !important;
          margin: 0 !important;
        }
      }
    `}</style>
  </a>
);

export default WhatsAppButton;
