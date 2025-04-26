import React from 'react';
import { FaBell, FaCar, FaRobot, FaCalendarCheck, FaShieldAlt, FaClipboardList, FaCloud } from 'react-icons/fa';

const beneficios = [
  {
    icon: <FaBell color="#21e6c1" size={28} />, 
    text: 'Alertas automáticas de vencimientos: registro, VTV, seguro y multas.'
  },
  {
    icon: <FaCalendarCheck color="#21e6c1" size={28} />, 
    text: 'Recordatorios de mantenimiento preventivo para cuidar el valor de tu auto.'
  },
  {
    icon: <FaRobot color="#21e6c1" size={28} />, 
    text: 'Bot CheekUS: tu asistente digital siempre conectado a tu auto y a vos.'
  },
  {
    icon: <FaCar color="#21e6c1" size={28} />, 
    text: 'Integración con sensores, scanner, IoT y rastreo inteligente.'
  },
  {
    icon: <FaClipboardList color="#21e6c1" size={28} />, 
    text: 'Reportes claros, historial y trazabilidad de todas tus gestiones.'
  },
  {
    icon: <FaShieldAlt color="#21e6c1" size={28} />, 
    text: 'Protección ante multas y vencimientos: evitá sanciones y dolores de cabeza.'
  },
  {
    icon: <FaCloud color="#21e6c1" size={28} />, 
    text: 'Acceso inmediato y seguro a toda tu información desde cualquier lugar.'
  }
];

const Beneficios = () => (
  <section id="caracteristicas" className="section-bg" style={{textAlign:'center', marginTop:'-2em'}}>
    <h2 style={{color:'var(--primary)', fontWeight:800}}>Características de CheekUS</h2>
    <div className="decorative-line" style={{maxWidth:320, margin:'1.5em auto'}}></div>
    <ul style={{listStyle:'none', padding:0, maxWidth:900, margin:'2em auto 0', display:'flex', flexWrap:'wrap', gap:'2em', justifyContent:'center'}}>
      {beneficios.map((b,i) => (
        <li key={i} style={{marginBottom:'1.1em', fontSize:'1.08em', background:'#112244cc', borderRadius:14, boxShadow:'0 2px 12px #1746a211', padding:'1.2em 1.4em', minWidth:260, maxWidth:320, display:'flex',alignItems:'center',gap:'1em'}}>
          {b.icon}
          <span>{b.text}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Beneficios;
