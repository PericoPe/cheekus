import React from 'react';
import { FaTools, FaMicrochip, FaRobot, FaSmileBeam } from 'react-icons/fa';

const pasos = [
  {
    icon: <FaTools color="#21e6c1" size={32} />,
    titulo: 'Diagnóstico inicial',
    desc: 'Traé tu vehículo a CheekUS Lab para un chequeo digital completo. Recibí un reporte detallado del estado de tu auto.'
  },
  {
    icon: <FaMicrochip color="#21e6c1" size={32} />,
    titulo: 'Instalación de tecnología',
    desc: 'Colocamos sensores, scanner, GPS y conectividad. Tu auto queda conectado y seguro.'
  },
  {
    icon: <FaRobot color="#21e6c1" size={32} />,
    titulo: 'Bot CheekUS conectado',
    desc: 'El bot monitorea tu auto, te envía alertas, recordatorios y recomendaciones personalizadas.'
  },
  {
    icon: <FaSmileBeam color="#21e6c1" size={32} />,
    titulo: 'Tranquilidad total',
    desc: 'Tu vehículo está protegido y vos recibís asistencia y reportes siempre que lo necesites.'
  }
];

const Proceso = () => (
  <section id="proceso" className="section-bg" style={{textAlign:'center', background: 'linear-gradient(120deg, #e0f7fa 0%, #f8fafc 100%)', paddingBottom: '3em'}}>
    <h2 style={{color:'var(--primary)', fontWeight:800}}>¿Cómo funciona CheekUS?</h2>
    <div style={{color:'#1746a2', fontWeight:600, marginTop:'.5em', marginBottom:'1.5em', fontSize:'1.1em'}}>Un proceso simple, seguro y 100% digital</div>
    <div className="decorative-line" style={{maxWidth:320, margin:'1.5em auto'}}></div>
    <div className="proceso-timeline" style={{
      display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'2em', marginTop:'2em', position:'relative', flexDirection:'row'
    }}>
      {pasos.map((p,i) => (
        <div key={i} className="proceso-step" style={{
          background:'#112244cc', borderRadius:18, padding:'2.5em 1.5em', minWidth:240, maxWidth:330, boxShadow:'0 4px 24px #1746a233', display:'flex', flexDirection:'column', alignItems:'center', gap:'1.3em', position:'relative', zIndex:2
        }}>
          <div className="proceso-icon-wrapper" style={{
            background:'#fff', borderRadius:'50%', padding:18, boxShadow:'0 2px 8px #21e6c155', marginBottom:'.4em', display:'flex', alignItems:'center', justifyContent:'center', width:70, height:70
          }}>{React.cloneElement(p.icon, {size:36})}</div>
          <h3 style={{color:'#21e6c1', margin:'0.7em 0 0.3em 0', fontWeight:700, fontSize:'1.2em'}}>{p.titulo}</h3>
          <p style={{color:'#b3cfff', fontSize:'1.06em', lineHeight:1.6}}>{p.desc}</p>
          {/* Línea de conexión horizontal (desktop) o vertical (mobile) */}
          {i < pasos.length-1 && (
            <div className="proceso-connector"></div>
          )}
        </div>
      ))}
      <style>{`
        /* Desktop: horizontal timeline */
        .proceso-timeline { flex-direction: row; }
        .proceso-step { margin-bottom: 0; }
        .proceso-connector {
          display: none;
        }
        @media (min-width: 900px) {
          .proceso-connector {
            display: block;
            position: absolute;
            right: -38px;
            top: 50%;
            transform: translateY(-50%);
            height: 4px;
            width: 50px;
            background: linear-gradient(90deg,#21e6c1 40%,#60a5fa 100%);
            border-radius: 3px;
            z-index: 1;
          }
        }
        /* Mobile: vertical timeline */
        @media (max-width: 899px) {
          .proceso-timeline { flex-direction: column; gap: 2.5em; }
          .proceso-step {
            min-width: 0;
            max-width: 98vw;
            width: 100%;
            padding: 1.5em 0.6em;
            gap: 1em;
          }
          .proceso-icon-wrapper {
            width: 56px; height: 56px; padding: 10px;
          }
          .proceso-step h3 { font-size: 1.08em; }
          .proceso-step p { font-size: 0.99em; }
          .proceso-connector {
            display: block;
            position: absolute;
            left: 50%;
            top: 100%;
            transform: translateX(-50%);
            width: 4px;
            height: 40px;
            background: linear-gradient(180deg,#21e6c1 40%,#60a5fa 100%);
            border-radius: 3px;
            z-index: 1;
          }
        }
      `}</style>
    </div>
    <div style={{marginTop:'2.5em', color:'#1746a2', fontWeight:500, fontSize:'1em'}}>¡Así de fácil es transformar tu auto en un vehículo inteligente y protegido!</div>
  </section>
);

export default Proceso;
