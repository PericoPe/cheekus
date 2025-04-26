import React from 'react';

const Contacto = () => (
  <footer id="contacto" style={{padding:'2.5em 1em', background:'#181d23', textAlign:'center', color:'#eaf6ff'}}>
    <h2 style={{color:'#4ad4ff', marginBottom:'0.5em'}}>CheekUS</h2>
    <div style={{marginBottom:'0.7em', fontWeight:600}}>Tecnología para tu auto, tranquilidad para vos</div>
    <div style={{marginBottom:'0.7em'}}>
      <span style={{fontWeight:600}}>Email:</span> <a href="mailto:info@cheekus.com.ar" style={{color:'#7dd3fc'}}>info@cheekus.com.ar</a>
    </div>
    <div style={{display:'flex', justifyContent:'center', gap:'1.6em', marginTop:'1.2em'}}>
      <a href="https://instagram.com/cheekus.ar" target="_blank" rel="noopener noreferrer" title="Instagram" style={{color:'#fff', fontSize:'2em'}}>
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#4ad4ff"/><path d="M16.98 7.02a.7.7 0 1 1 1.4 0 .7.7 0 0 1-1.4 0ZM12 8.4A3.6 3.6 0 1 0 12 15.6a3.6 3.6 0 0 0 0-7.2Zm0 5.8a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4Zm5.44-6.06A3.09 3.09 0 0 0 17.06 6.56c-.42-.16-.87-.26-1.36-.28C14.5 6.25 14.3 6.25 12 6.25s-2.5 0-3.7.03c-.5.02-.94.12-1.36.28-.42.16-.79.38-1.11.7-.32.32-.54.7-.7 1.11-.16.42-.26.87-.28 1.36C6.25 9.5 6.25 9.7 6.25 12s0 2.5.03 3.7c.02.5.12.94.28 1.36.16.42.38.79.7 1.11.32.32.7.54 1.11.7.42.16.87.26 1.36.28 1.2.03 1.4.03 3.7.03s2.5 0 3.7-.03c.5-.02.94-.12 1.36-.28.42-.16.79-.38 1.11-.7.32-.32.54-.7.7-1.11.16-.42.26-.87.28-1.36.03-1.2.03-1.4.03-3.7s0-2.5-.03-3.7c-.02-.5-.12-.94-.28-1.36Zm-1.06 8.56a1.77 1.77 0 0 1-1.01 1.01c-.4.16-.82.25-1.33.27-1.19.03-1.39.03-3.66.03s-2.47 0-3.66-.03c-.51-.02-.93-.11-1.33-.27a1.77 1.77 0 0 1-1.01-1.01c-.16-.4-.25-.82-.27-1.33C6.25 14.5 6.25 14.3 6.25 12s0-2.5.03-3.66c.02-.51.11-.93.27-1.33a1.77 1.77 0 0 1 1.01-1.01c.4-.16.82-.25 1.33-.27C9.5 6.25 9.7 6.25 12 6.25s2.5 0 3.66.03c.51.02.93.11 1.33.27.4.16.82.41 1.01 1.01.16.4.25.82.27 1.33.03 1.19.03 1.39.03 3.66s0 2.47-.03 3.66c-.02.51-.11.93-.27 1.33Z" fill="#181d23"/></svg>
      </a>
      <a href="https://facebook.com/cheekus.ar" target="_blank" rel="noopener noreferrer" title="Facebook" style={{color:'#fff', fontSize:'2em'}}>
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#4ad4ff"/><path d="M15.5 8.5h-1.5A1 1 0 0 0 13 9.5v1H15l-.5 2H13v6h-2v-6H9v-2h2v-1.5A2.5 2.5 0 0 1 13.5 6h2v2.5Z" fill="#181d23"/></svg>
      </a>
      <a href="https://wa.me/5491122223333" target="_blank" rel="noopener noreferrer" title="WhatsApp" style={{color:'#fff', fontSize:'2em'}}>
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#4ad4ff"/><path d="M12 6.5A5.5 5.5 0 0 0 7.2 15.2l-1.2 3.3 3.4-1.2A5.5 5.5 0 1 0 12 6.5Zm0 9.5a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm2.2-3.3c-.1-.1-.6-.3-1.2-.5-.2-.1-.5-.2-.7-.1-.2.1-.4.3-.6.5-.1.1-.3.2-.4.2-.2 0-.4-.1-.7-.3-.5-.3-1-.8-1.3-1.4-.1-.2-.1-.4.1-.6.1-.1.2-.3.3-.4.1-.2.1-.4 0-.6-.1-.2-.6-1.5-.8-2.1-.2-.6-.4-.6-.6-.6h-.5c-.2 0-.4.1-.5.3-.5.7-.8 1.5-.8 2.4A7.5 7.5 0 0 0 12 19.5c1.2 0 2.4-.3 3.4-.8-.9-.8-1.7-1.7-2.2-2.5Z" fill="#181d23"/></svg>
      </a>
    </div>
    <div style={{marginTop:'2em', fontSize:'0.97em', color:'#7dd3fc'}}>© {new Date().getFullYear()} CheekUS. Todos los derechos reservados.</div>
  </footer>
);

export default Contacto;
