import React from 'react';
import { FaBell, FaCar, FaRobot, FaCalendarCheck, FaShieldAlt, FaClipboardList, FaCloud } from 'react-icons/fa';

const beneficios = [
  // Las 3 principales de Hey Jack!
  {
    icon: <FaBell color="#21e6c1" size={44} />,
    text: <><b>Hey Jack</b> genera alertas automáticas sobre<br /><span style={{color:'#21e6c1'}}>registro, VTV, seguro, patente, etc.</span></>
  },
  {
    icon: <FaCalendarCheck color="#21e6c1" size={44} />,
    text: <><b>Hey Jack</b> te recuerda los <br /><span style={{color:'#21e6c1'}}>mantenimientos preventivos</span> para cuidar tu auto</>
  },
  {
    icon: <FaRobot color="#21e6c1" size={48} style={{filter:'drop-shadow(0 0 6px #21e6c199)'}} />,
    text: <><b>Hey Jack</b> es tu <span style={{color:'#21e6c1'}}>agente IA</span>:<br />consultale todo sobre tu auto</>
  },
  // Las otras cards clásicas
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
    <h2 style={{color:'var(--primary)', fontWeight:800}}>Características de Hey Jack!</h2>
    <div className="decorative-line" style={{maxWidth:260, margin:'1.1em auto'}}></div>
    <ul
      style={{
        listStyle: 'none',
        padding: 0,
        maxWidth: 900,
        margin: '1.2em auto 0',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.2em',
        justifyContent: 'center'
      }}
    >
      {beneficios.map((b, i) => (
        <li
          key={i}
          style={{
            marginBottom: '0.7em',
            fontSize: '1.02em',
            background: '#112244cc',
            borderRadius: 12,
            boxShadow: '0 2px 8px #1746a211',
            padding: '1em 1.1em',
            flex: '1 1 260px',
            minWidth: 220,
            maxWidth: 310,
            display: 'flex',
            alignItems: 'center',
            gap: '0.7em',
            width: 'calc(33% - 1.2em)',
            boxSizing: 'border-box'
          }}
        >
          {b.icon}
          <span>{b.text}</span>
        </li>
      ))}
    </ul>
    <style>{`
      @media (max-width: 900px) {
        ul[data-component-name="Beneficios"] li {
          width: calc(50% - 1.2em) !important;
        }
      }
      @media (max-width: 600px) {
        ul[data-component-name="Beneficios"] li {
          width: 100% !important;
          min-width: 0 !important;
          max-width: 100% !important;
        }
        ul[data-component-name="Beneficios"] {
          gap: 0.9em !important;
        }
      }
    `}</style>
  </section>
);

export default Beneficios;
