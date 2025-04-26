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
      width: '100vw',
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      overflow: 'hidden',
    }}>
      <a href="/#hero" onClick={e => {
        e.preventDefault();
        window.location.hash = '#hero';
        document.getElementById('hero')?.scrollIntoView({behavior:'smooth'});
      }} style={{textDecoration:'none', width:'100%', margin:0, display:'flex', justifyContent:'center', alignItems:'center'}}>
        <span style={{fontWeight:900, fontSize:'2em', color:'var(--primary)', letterSpacing:'-2px', fontFamily:'Montserrat, Arial, sans-serif', display:'block', textAlign:'center', width:'100vw', overflow:'hidden', whiteSpace:'nowrap'}}>Hey Jack!</span>
      </a>
    </div>
    </div>
  </nav>
);

export default NavBar;
