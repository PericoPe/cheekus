import React, { useState, useEffect } from 'react';
import styles from "./Testimonios.module.css";

const testimonios = [
  {
    nombre: 'María G.',
    texto: 'Me despreocupé de los vencimientos del seguro y la VTV. El bot me avisa de todo y el soporte es excelente.',
    imagen: 'https://randomuser.me/api/portraits/women/65.jpg',
    ciudad: 'CABA'
  },
  {
    nombre: 'Lucas P.',
    texto: 'Instalé Hey Jack! en mi flota y ahora tengo reportes y alertas automáticas, ¡me ahorró multas y dolores de cabeza!',
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

const isMobile = () => window.innerWidth <= 600;

const Testimonios = () => {
  const [mobile, setMobile] = useState(isMobile());
  const [current, setCurrent] = useState(0);
  const total = testimonios.length;

  // Detecta mobile/desktop
  useEffect(() => {
    const onResize = () => setMobile(isMobile());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Autoplay en mobile
  useEffect(() => {
    if (!mobile) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, [mobile, total]);

  if (mobile) {
    const t = testimonios[current];
    return (
      <section id="testimonios" className={styles.testimoniosSection}>
        <h2 style={{color:'var(--primary)', fontWeight:800}}>Testimonios</h2>
        <div className="decorative-line" style={{maxWidth:220, margin:'1.5em auto'}}></div>
        <div className={styles.sliderMobile}>
          <div className={styles.card}>
            <div style={{background:'#192a3c', borderRadius:16, boxShadow:'0 2px 18px #1e293b33', padding:'0.7em', minHeight:220, display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <img src={t.imagen} alt={t.nombre} style={{width:44, height:44, borderRadius:'50%', marginBottom:'0.7em',objectFit:'cover',border:'2px solid #4ad4ff'}} />
              <div style={{fontWeight:600, color:'#4ad4ff',marginBottom:6}}>{t.nombre}</div>
              <div style={{fontSize:'1em', color:'#eaf6ff',marginBottom:6}}>{t.texto}</div>
              <div style={{fontSize:'0.92em', color:'#b3cfff'}}>{t.ciudad}</div>
            </div>
          </div>
          <div className={styles.dotsRow}>
            {testimonios.map((_, idx) => (
              <button
                key={idx}
                className={current === idx ? styles.dotActive : styles.dot}
                onClick={() => setCurrent(idx)}
                aria-label={`Ver testimonio ${idx+1}`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop: marquee horizontal
  const testimoniosLoop = [...testimonios, ...testimonios];
  return (
    <section id="testimonios" className={styles.testimoniosSection}>
      <h2 style={{color:'var(--primary)', fontWeight:800}}>Testimonios</h2>
      <div className="decorative-line" style={{maxWidth:320, margin:'1.5em auto'}}></div>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          {testimoniosLoop.map((t, i) => (
            <div key={i} className={styles.card}>
              <div style={{background:'#192a3c', borderRadius:16, boxShadow:'0 2px 18px #1e293b33', padding:'0.7em', minHeight:220, display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <img src={t.imagen} alt={t.nombre} style={{width:44, height:44, borderRadius:'50%', marginBottom:'0.7em',objectFit:'cover',border:'2px solid #4ad4ff'}} />
                <div style={{fontWeight:600, color:'#4ad4ff',marginBottom:6}}>{t.nombre}</div>
                <div style={{fontSize:'1em', color:'#eaf6ff',marginBottom:6}}>{t.texto}</div>
                <div style={{fontSize:'0.92em', color:'#b3cfff'}}>{t.ciudad}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
