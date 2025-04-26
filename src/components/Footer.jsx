import React from 'react';

const Footer = ({ onShowLegales, onShowPrivacidad, onShowTerminos, onShowCookies, onShowFAQs }) => (
  <footer style={{background:'#0a192f', color:'#b3cfff', padding:'2em 0 1em 0', textAlign:'center', marginTop:'3em'}}>
    <div style={{maxWidth:1200, margin:'0 auto'}}>
      <div style={{marginBottom:'1.2em', display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'1.2em'}}>
        <button onClick={onShowPrivacidad} style={{color:'#21e6c1', margin:'0 0.7em', fontWeight:600, background:'none', border:'none', cursor:'pointer'}}>Privacidad</button>
        <button onClick={onShowTerminos} style={{color:'#21e6c1', margin:'0 0.7em', fontWeight:600, background:'none', border:'none', cursor:'pointer'}}>Términos</button>
        <button onClick={onShowCookies} style={{color:'#21e6c1', margin:'0 0.7em', fontWeight:600, background:'none', border:'none', cursor:'pointer'}}>Cookies</button>
        <button onClick={onShowLegales} style={{color:'#21e6c1', margin:'0 0.7em', fontWeight:600, background:'none', border:'none', cursor:'pointer'}}>Legales</button>
        <button onClick={onShowFAQs} style={{color:'#21e6c1', margin:'0 0.7em', fontWeight:600, background:'none', border:'none', cursor:'pointer'}}>FAQs</button>
      </div>
      <div style={{fontSize:'0.98em', color:'#7dd3fc'}}> {new Date().getFullYear()} CheekUS. Todos los derechos reservados.</div>
    </div>
  </footer>
);

export default Footer;
