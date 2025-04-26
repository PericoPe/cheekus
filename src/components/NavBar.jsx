import React from 'react';

const NavBar = () => (
  <nav style={{
    width: '100%',
    background: 'rgba(10,25,47,0.98)',
    boxShadow: '0 2px 12px #1746a211',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 100,
    padding: '0.5em 0',
    backdropFilter: 'blur(6px)'
  }}>
    <div style={{
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 1.5em',
    }}>
      <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center', padding:'0'}}>
        <a href="/#hero" onClick={e => {
          e.preventDefault();
          window.location.hash = '#hero';
          document.getElementById('hero')?.scrollIntoView({behavior:'smooth'});
        }} style={{textDecoration:'none', margin:'0 auto', width:'100%'}}>
          <span style={{fontWeight:900, fontSize:'2em', color:'var(--primary)', letterSpacing:'-2px', fontFamily:'Montserrat, Arial, sans-serif', display:'block', textAlign:'center', width:'100%'}}>Hey Jack!</span>
        </a>
        <style>{`
          @media (max-width: 600px) {
            nav div {
              padding: 0 !important;
            }
            nav span {
              font-size: 2.1em !important;
              text-align: center !important;
              width: 100vw !important;
              margin: 0 auto !important;
              display: block !important;
            }
          }
        `}</style>
      </div>
    </div>
  </nav>
);

export default NavBar;
