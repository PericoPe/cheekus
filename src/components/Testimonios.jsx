import React, { useState, useEffect } from 'react';

const testimonios = [
  {
    nombre: 'María G.',
    texto: 'Me despreocupé de los vencimientos del seguro y la VTV. El bot me avisa de todo y el soporte es excelente.',
    imagen: 'https://randomuser.me/api/portraits/women/65.jpg',
    ciudad: 'CABA'
  },
  {
    nombre: 'Lucas P.',
    texto: 'Instalé CheekUS en mi flota y ahora tengo reportes y alertas automáticas, ¡me ahorró multas y dolores de cabeza!',
    imagen: 'https://randomuser.me/api/portraits/men/44.jpg',
    ciudad: 'La Plata'
  },
  {
    nombre: 'Sofía R.',
    texto: 'La instalación fue rápida y el bot responde todas mis dudas. Muy recomendable para olvidarse del mantenimiento.',
    imagen: 'https://randomuser.me/api/portraits/women/43.jpg',
    ciudad: 'Córdoba'
  },
  {
    nombre: 'Martín D.',
    texto: 'El sistema de alertas me salvó de una multa por VTV vencida. ¡Excelente inversión!',
    imagen: 'https://randomuser.me/api/portraits/men/32.jpg',
    ciudad: 'Rosario'
  },
  {
    nombre: 'Florencia S.',
    texto: 'Me encanta poder ver el estado de mi auto desde el celular y recibir recordatorios automáticos.',
    imagen: 'https://randomuser.me/api/portraits/women/68.jpg',
    ciudad: 'Mendoza'
  }
];

const CARDS_PER_ROW = 4;

const Testimonios = () => {
  // Estado: testimonios a mostrar en cada card
  const [indices, setIndices] = useState([0, 1, 2, 3]);
  const [flippingIndex, setFlippingIndex] = useState(-1); // -1 = ninguna
  const total = testimonios.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setFlippingIndex((prev) => (prev + 1) % CARDS_PER_ROW);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (flippingIndex === -1) return;
    const timeout = setTimeout(() => {
      setIndices((prev) => {
        const newIndices = [...prev];
        // Avanzar solo la card que está girando
        newIndices[flippingIndex] = (newIndices[flippingIndex] + CARDS_PER_ROW) % total;
        return newIndices;
      });
    }, 700); // duración del flip
    return () => clearTimeout(timeout);
  }, [flippingIndex, total]);

  return (
    <section id="testimonios" className="section-bg" style={{textAlign:'center', marginBottom:'4em', overflow:'visible', paddingBottom:'2em'}}>
      <h2 style={{color:'var(--primary)', fontWeight:800}}>Testimonios</h2>
      <div className="decorative-line" style={{maxWidth:320, margin:'1.5em auto'}}></div>
      <div style={{display:'flex', justifyContent:'center', margin:'2em 0', gap:'2.7em', flexWrap:'nowrap', overflow:'visible'}}>
        {indices.map((testiIdx, i) => {
          const t = testimonios[testiIdx % total];
          const isFlipping = flippingIndex === i;
          return (
            <div key={i} className={`flip-card${isFlipping ? ' flipping' : ''}`} style={{perspective:'900px', minWidth:180, maxWidth:220, flex:'1 1 0', transition:'transform 0.7s', transformStyle:'preserve-3d'}}>
              <div className="flip-card-inner" style={{transition:'transform 0.7s', transformStyle:'preserve-3d', transform: isFlipping ? 'rotateY(180deg)' : 'none'}}>
                <div className="flip-card-front" style={{background:'#192a3c', borderRadius:16, boxShadow:'0 2px 18px #1e293b33', padding:'0.7em', minHeight:220, display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center', backfaceVisibility:'hidden'}}>
                  <img src={t.imagen} alt={t.nombre} style={{width:44, height:44, borderRadius:'50%', marginBottom:'0.7em',objectFit:'cover',border:'2px solid #4ad4ff'}} />
                  <div style={{fontWeight:600, color:'#4ad4ff',marginBottom:6}}>{t.nombre}</div>
                  <div style={{fontSize:'1em', color:'#eaf6ff',marginBottom:6}}>{t.texto}</div>
                  <div style={{fontSize:'0.92em', color:'#b3cfff'}}>{t.ciudad}</div>
                </div>
                <div className="flip-card-back" style={{background:'#23272f', borderRadius:16, boxShadow:'0 2px 18px #1e293b33', padding:'0.7em', minHeight:220, display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center', position:'absolute', top:0, left:0, width:'100%', height:'100%', backfaceVisibility:'hidden', transform:'rotateY(180deg)'}}>
                  <span style={{fontSize:'2.2em', color:'#4ad4ff', display:'flex', alignItems:'center', justifyContent:'center'}}>✨</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonios;
