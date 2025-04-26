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
  <section id="proceso" className="section-bg" style={{textAlign:'center'}}>
    <h2 style={{color:'var(--primary)', fontWeight:800}}>¿Cómo funciona CheekUS?</h2>
    <div className="decorative-line" style={{maxWidth:320, margin:'1.5em auto'}}></div>
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'2em', marginTop:'2em'}}>
      {pasos.map((p,i) => (
        <div key={i} style={{background:'#112244cc', borderRadius:14, padding:'2em 1.2em', minWidth:240, maxWidth:320, boxShadow:'0 2px 16px #1746a211', display:'flex',flexDirection:'column',alignItems:'center',gap:'1em'}}>
          {p.icon}
          <h3 style={{color:'#21e6c1', margin:'0.7em 0 0.3em 0'}}>{p.titulo}</h3>
          <p style={{color:'#b3cfff'}}>{p.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Proceso;
