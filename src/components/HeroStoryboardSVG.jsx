import React from "react";

// SVGs simples y modernos para cada escena del storyboard
const scenes = [
  // Escena 1: Presentación
  <svg key="1" viewBox="0 0 360 200" style={{width:'100%',maxWidth:320}}>
    <rect x="0" y="0" width="360" height="200" rx="24" fill="#eaf6ff" />
    <ellipse cx="100" cy="160" rx="60" ry="18" fill="#c1eaff" />
    <rect x="60" y="110" width="80" height="40" rx="16" fill="#1746a2" />
    <circle cx="80" cy="160" r="12" fill="#21e6c1" />
    <circle cx="120" cy="160" r="12" fill="#21e6c1" />
    <rect x="90" y="120" width="20" height="12" rx="5" fill="#fff" />
    <circle cx="140" cy="120" r="10" fill="#fff" />
    <rect x="200" y="110" width="32" height="32" rx="16" fill="#21e6c1" />
    <text x="210" y="132" fontSize="13" fill="#1746a2" fontWeight="bold">👤</text>
    <text x="30" y="40" fontSize="18" fill="#1746a2" fontWeight="bold">¡Listo para cuidar tu auto?</text>
  </svg>,
  // Escena 2: Conexión con Hey Jack!
  <svg key="2" viewBox="0 0 360 200" style={{width:'100%',maxWidth:320}}>
    <rect x="0" y="0" width="360" height="200" rx="24" fill="#eaf6ff" />
    <ellipse cx="100" cy="160" rx="60" ry="18" fill="#c1eaff" />
    <rect x="60" y="110" width="80" height="40" rx="16" fill="#1746a2" />
    <circle cx="80" cy="160" r="12" fill="#21e6c1" />
    <circle cx="120" cy="160" r="12" fill="#21e6c1" />
    <rect x="90" y="120" width="20" height="12" rx="5" fill="#fff" />
    <circle cx="140" cy="120" r="10" fill="#fff" />
    <circle cx="250" cy="80" r="22" fill="#21e6c1" />
    <text x="238" y="88" fontSize="22" fill="#fff" fontWeight="bold">🤖</text>
    <line x1="140" y1="120" x2="250" y2="80" stroke="#21e6c1" strokeWidth="4" strokeDasharray="6,6" />
    <text x="30" y="40" fontSize="18" fill="#1746a2" fontWeight="bold">Hey Jack! conecta tu auto</text>
  </svg>,
  // Escena 3: Alertas y Recordatorios
  <svg key="3" viewBox="0 0 360 200" style={{width:'100%',maxWidth:320}}>
    <rect x="0" y="0" width="360" height="200" rx="24" fill="#eaf6ff" />
    <ellipse cx="100" cy="160" rx="60" ry="18" fill="#c1eaff" />
    <rect x="60" y="110" width="80" height="40" rx="16" fill="#1746a2" />
    <circle cx="80" cy="160" r="12" fill="#21e6c1" />
    <circle cx="120" cy="160" r="12" fill="#21e6c1" />
    <rect x="90" y="120" width="20" height="12" rx="5" fill="#fff" />
    <circle cx="140" cy="120" r="10" fill="#fff" />
    <rect x="240" y="40" width="30" height="18" rx="6" fill="#21e6c1" />
    <text x="245" y="54" fontSize="13" fill="#fff">VTV</text>
    <rect x="240" y="70" width="30" height="18" rx="6" fill="#21e6c1" />
    <text x="245" y="84" fontSize="13" fill="#fff">Seguro</text>
    <rect x="240" y="100" width="30" height="18" rx="6" fill="#21e6c1" />
    <text x="245" y="114" fontSize="13" fill="#fff">Patente</text>
    <line x1="140" y1="120" x2="255" y2="49" stroke="#21e6c1" strokeWidth="3" strokeDasharray="5,6" />
    <text x="30" y="40" fontSize="18" fill="#1746a2" fontWeight="bold">Alertas y recordatorios</text>
  </svg>,
  // Escena 4: Interacción Inteligente
  <svg key="4" viewBox="0 0 360 200" style={{width:'100%',maxWidth:320}}>
    <rect x="0" y="0" width="360" height="200" rx="24" fill="#eaf6ff" />
    <ellipse cx="100" cy="160" rx="60" ry="18" fill="#c1eaff" />
    <rect x="60" y="110" width="80" height="40" rx="16" fill="#1746a2" />
    <circle cx="80" cy="160" r="12" fill="#21e6c1" />
    <circle cx="120" cy="160" r="12" fill="#21e6c1" />
    <rect x="90" y="120" width="20" height="12" rx="5" fill="#fff" />
    <circle cx="140" cy="120" r="10" fill="#fff" />
    <rect x="220" y="60" width="90" height="26" rx="10" fill="#fff" />
    <text x="230" y="78" fontSize="13" fill="#1746a2">¿Cómo está mi auto?</text>
    <rect x="220" y="95" width="90" height="26" rx="10" fill="#21e6c1" />
    <text x="230" y="113" fontSize="13" fill="#fff">Próximo service en 1000km</text>
    <line x1="140" y1="120" x2="220" y2="73" stroke="#21e6c1" strokeWidth="3" strokeDasharray="5,6" />
    <text x="30" y="40" fontSize="18" fill="#1746a2" fontWeight="bold">Consultale todo a Hey Jack!</text>
  </svg>,
  // Escena 5: Seguridad y Tranquilidad
  <svg key="5" viewBox="0 0 360 200" style={{width:'100%',maxWidth:320}}>
    <rect x="0" y="0" width="360" height="200" rx="24" fill="#eaf6ff" />
    <ellipse cx="100" cy="160" rx="60" ry="18" fill="#c1eaff" />
    <rect x="60" y="110" width="80" height="40" rx="16" fill="#1746a2" />
    <circle cx="80" cy="160" r="12" fill="#21e6c1" />
    <circle cx="120" cy="160" r="12" fill="#21e6c1" />
    <rect x="90" y="120" width="20" height="12" rx="5" fill="#fff" />
    <circle cx="140" cy="120" r="10" fill="#fff" />
    <rect x="230" y="60" width="36" height="36" rx="18" fill="#21e6c1" />
    <text x="239" y="85" fontSize="22" fill="#fff">🛡️</text>
    <line x1="140" y1="120" x2="248" y2="78" stroke="#21e6c1" strokeWidth="4" strokeDasharray="6,6" />
    <text x="30" y="40" fontSize="18" fill="#1746a2" fontWeight="bold">Seguridad y tranquilidad</text>
  </svg>,
  // Escena 6: Cierre
  <svg key="6" viewBox="0 0 360 200" style={{width:'100%',maxWidth:320}}>
    <rect x="0" y="0" width="360" height="200" rx="24" fill="#eaf6ff" />
    <ellipse cx="180" cy="160" rx="90" ry="18" fill="#c1eaff" />
    <rect x="105" y="110" width="150" height="40" rx="18" fill="#1746a2" />
    <text x="180" y="137" fontSize="24" fill="#21e6c1" fontWeight="bold" textAnchor="middle">Hey Jack!</text>
    <text x="180" y="162" fontSize="16" fill="#1746a2" textAnchor="middle">Tu copiloto inteligente</text>
  </svg>
];

const HeroStoryboardSVG = () => (
  <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'1.5em',marginTop:'1.5em'}}>
    {scenes.map((scene, i) => (
      <div key={i} style={{background:'#fff',borderRadius:18,boxShadow:'0 2px 12px #1746a222',padding:'0.7em',margin:'0.5em',width:340}}>
        {scene}
      </div>
    ))}
  </div>
);

export default HeroStoryboardSVG;
