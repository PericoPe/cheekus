import React from "react";

// Animación Hero personalizada para Hey Jack!
const HeroHeyJackAnimated = () => (
  <svg viewBox="0 0 400 240" style={{width:'100%',maxWidth:360,height:'auto',display:'block'}}>
    {/* Fondo */}
    <rect x="0" y="0" width="400" height="240" rx="28" fill="#eaf6ff" />
    {/* Sombra del auto */}
    <ellipse cx="140" cy="200" rx="65" ry="18" fill="#c1eaff" />

    {/* AUTO */}
    <g>
      {/* Carrocería */}
      <rect x="75" y="120" width="130" height="50" rx="22" fill="#1746a2" />
      {/* Ventana */}
      <rect x="110" y="130" width="60" height="22" rx="8" fill="#fff" opacity="0.93" />
      {/* Ruedas */}
      <circle cx="100" cy="180" r="14" fill="#21e6c1" stroke="#1746a2" strokeWidth="3" />
      <circle cx="180" cy="180" r="14" fill="#21e6c1" stroke="#1746a2" strokeWidth="3" />
      {/* Carita sonriente */}
      <ellipse cx="140" cy="150" rx="16" ry="11" fill="#fff" opacity="0.85" />
      <ellipse cx="134" cy="148" rx="2.2" ry="2.2" fill="#1746a2" />
      <ellipse cx="146" cy="148" rx="2.2" ry="2.2" fill="#1746a2" />
      <path d="M136 153 Q140 157 144 153" stroke="#1746a2" strokeWidth="1.5" fill="none" />
    </g>

    {/* Bot amigable */}
    <g>
      <circle cx="300" cy="100" r="27" fill="#21e6c1" stroke="#1746a2" strokeWidth="3" />
      <ellipse cx="300" cy="100" rx="13" ry="7" fill="#fff" opacity="0.93" />
      <ellipse cx="293" cy="97" rx="2.8" ry="2.8" fill="#1746a2" />
      <ellipse cx="307" cy="97" rx="2.8" ry="2.8" fill="#1746a2" />
      <path d="M295 107 Q300 112 305 107" stroke="#1746a2" strokeWidth="1.4" fill="none" />
      {/* Antena */}
      <rect x="298.5" y="73" width="3" height="12" rx="1.5" fill="#1746a2" />
      <circle cx="300" cy="72" r="3.5" fill="#21e6c1" stroke="#1746a2" strokeWidth="1.2" />
    </g>

    {/* Línea de conexión animada */}
    <polyline points="205,135 250,120 300,100" fill="none" stroke="#21e6c1" strokeWidth="4" strokeDasharray="6,6" />
    {/* Flecha */}
    <polygon points="295,104 307,99 297,97" fill="#21e6c1" />

    {/* WhatsApp burbuja */}
    <g>
      <circle cx="355" cy="60" r="22" fill="#25d366" stroke="#1746a2" strokeWidth="2.2" />
      <text x="343" y="70" fontSize="23" fontWeight="bold" fill="#fff">🟢</text>
      <text x="346" y="74" fontSize="18" fontWeight="bold" fill="#fff">W</text>
    </g>
    {/* Línea bot -> WhatsApp */}
    <polyline points="320,90 350,68" fill="none" stroke="#21e6c1" strokeWidth="3" strokeDasharray="4,6" />

    {/* Alertas flotando */}
    <g>
      {/* VTV */}
      <rect x="210" y="55" width="34" height="18" rx="6" fill="#21e6c1" />
      <text x="217" y="69" fontSize="12" fill="#fff">VTV</text>
      {/* Seguro */}
      <rect x="170" y="40" width="38" height="18" rx="6" fill="#21e6c1" />
      <text x="176" y="54" fontSize="12" fill="#fff">Seguro</text>
      {/* Patente */}
      <rect x="120" y="60" width="42" height="18" rx="6" fill="#21e6c1" />
      <text x="127" y="74" fontSize="12" fill="#fff">Patente</text>
    </g>
    {/* Mensaje de tranquilidad */}
    <text x="30" y="38" fontSize="19" fill="#1746a2" fontWeight="bold">Tu auto conectado,</text>
    <text x="30" y="58" fontSize="19" fill="#21e6c1" fontWeight="bold">tu WhatsApp tranquilo.</text>
  </svg>
);

export default HeroHeyJackAnimated;
