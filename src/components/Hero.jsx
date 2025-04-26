import React from 'react';

const Hero = ({ onLeadClick }) => (
  <section id="hero" style={{
    background: 'linear-gradient(120deg, #1746a2 60%, #21a1e6 100%)',
    padding: '6em 1em 3em 1em',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    color: '#fff',
  }}>
    <svg style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',zIndex:0}} viewBox="0 0 1440 320"><path fill="#21e6c1" fillOpacity="0.12" d="M0,128L80,122.7C160,117,320,107,480,133.3C640,160,800,224,960,234.7C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    <div style={{position:'relative',zIndex:1, maxWidth:1200, margin:'0 auto'}}>
      <div style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        gap:'2em',
        flexWrap:'wrap',
      }}>
        {/* Lado izquierdo: texto */}
        <div style={{flex:'1 1 350px', minWidth:280, maxWidth:540, textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center'}}>
          <h1 style={{fontSize:'2.7em', marginBottom:'0.6em', fontWeight:800, letterSpacing:'-1px', color:'#fff', lineHeight:1.11}}>Hey Jack!: Tecnología para tu auto, tranquilidad para vos</h1>

          <div className="decorative-line" style={{margin:'2em 0',maxWidth:220}}></div>
<button onClick={typeof onLeadClick === 'function' ? onLeadClick : undefined} style={{marginTop:'1.5em',background:'var(--primary)',color:'#fff',padding:'0.9em 2em',border:'none',borderRadius:10,fontWeight:700,fontSize:'1.15em',cursor:'pointer',boxShadow:'0 2px 8px #1746a233'}}>Quiero saber más...</button>
        </div>
        {/* Lado derecho: gráfico visual Storyset */}
        <div style={{flex:'1 1 350px', minWidth:260, display:'flex',justifyContent:'center',alignItems:'center',padding:'1.2em 0'}}>
          <img 
            src="/19199285.jpg" 
            alt="Hey Jack auto tecnología" 
            style={{
              width: '100%',
              maxWidth: 420,
              height: 'auto',
              borderRadius: 20,
              boxShadow: '0 4px 28px #1746a220',
              background: '#fff',
              objectFit: 'contain',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
