import React from 'react';

const Precios = () => (
  <section id="precios" className="section-bg" style={{textAlign:'center'}}>
    <h2 style={{color:'var(--primary)', fontWeight:800}}>Precios</h2>
    <div className="decorative-line" style={{maxWidth:320, margin:'1.5em auto'}}></div>
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'2em', marginTop:'2em'}}>
      <div style={{background:'#172554', borderRadius:16, padding:'2.5em 1.8em', minWidth:240, maxWidth:330, boxShadow:'0 2px 16px #2563eb22', display:'flex', flexDirection:'column', alignItems:'center'}}>
        <h3 style={{color:'#38bdf8', marginBottom:'0.7em'}}>Setup (Instalación)</h3>
        <div style={{fontSize:'2.3em', color:'#60a5fa', fontWeight:800, marginBottom:'.2em'}}>Consultar</div>
        <div style={{color:'#dbeafe', fontSize:'1.1em', marginBottom:'1em'}}>Pago único</div>
        <ul style={{listStyle:'none', padding:0, color:'#b3cfff', textAlign:'left'}}>
          <li>✔️ Diagnóstico digital</li>
          <li>✔️ Instalación de sensores y scanner</li>
          <li>✔️ Configuración inicial IoT</li>
        </ul>
      </div>
      <div style={{background:'#172554', borderRadius:16, padding:'2.5em 1.8em', minWidth:240, maxWidth:330, boxShadow:'0 2px 16px #2563eb22', display:'flex', flexDirection:'column', alignItems:'center'}}>
        <h3 style={{color:'#38bdf8', marginBottom:'0.7em'}}>Abono mensual</h3>
        <div style={{fontSize:'2.3em', color:'#60a5fa', fontWeight:800, marginBottom:'.2em'}}>$35.000</div>
        <div style={{color:'#dbeafe', fontSize:'1.1em', marginBottom:'1em'}}>Por vehículo</div>
        <ul style={{listStyle:'none', padding:0, color:'#b3cfff', textAlign:'left'}}>
          <li>✔️ Soporte 24/7</li>
          <li>✔️ Monitoreo y reportes automáticos</li>
          <li>✔️ Acceso al bot CheekUS</li>
        </ul>
      </div>
    </div>
    <p style={{marginTop:'2em', color:'#7dd3fc', fontWeight:500}}>Solicitá tu cotización personalizada según tu vehículo y necesidades.</p>
  </section>
);

export default Precios;
