import React, { useEffect, useRef, useState } from "react";

const scenes = [
  // Escena 1: Presentación
  (progress) => (
    <svg viewBox="0 0 360 200" style={{width:'100%',maxWidth:320}}>
      <rect x="0" y="0" width="360" height="200" rx="24" fill="#eaf6ff" />
      {/* Auto */}
      <ellipse cx="100" cy="160" rx="60" ry="18" fill="#c1eaff" />
      <rect x="60" y="110" width="80" height="40" rx="16" fill="#1746a2" style={{transform:`translateY(${10-Math.min(progress*10,10)}px)`}} />
      <circle cx="80" cy="160" r="12" fill="#21e6c1" />
      <circle cx="120" cy="160" r="12" fill="#21e6c1" />
      <rect x="90" y="120" width="20" height="12" rx="5" fill="#fff" />
      <circle cx="140" cy="120" r="10" fill="#fff" />
      {/* Conductor aparece */}
      <rect x="200" y="110" width="32" height="32" rx="16" fill="#21e6c1" opacity={progress} />
      <text x="210" y="132" fontSize="13" fill="#1746a2" fontWeight="bold" opacity={progress}>👤</text>
      <text x="30" y="40" fontSize="18" fill="#1746a2" fontWeight="bold">¡Listo para cuidar tu auto?</text>
    </svg>
  ),
  // Escena 2: Conexión con Hey Jack!
  (progress) => (
    <svg viewBox="0 0 360 200" style={{width:'100%',maxWidth:320}}>
      <rect x="0" y="0" width="360" height="200" rx="24" fill="#eaf6ff" />
      <ellipse cx="100" cy="160" rx="60" ry="18" fill="#c1eaff" />
      <rect x="60" y="110" width="80" height="40" rx="16" fill="#1746a2" />
      <circle cx="80" cy="160" r="12" fill="#21e6c1" />
      <circle cx="120" cy="160" r="12" fill="#21e6c1" />
      <rect x="90" y="120" width="20" height="12" rx="5" fill="#fff" />
      <circle cx="140" cy="120" r="10" fill="#fff" />
      {/* Hey Jack aparece */}
      <circle cx="250" cy="80" r="22" fill="#21e6c1" opacity={progress} />
      <text x="238" y="88" fontSize="22" fill="#fff" fontWeight="bold" opacity={progress}>🤖</text>
      {/* Línea animada */}
      <line x1="140" y1="120" x2={140+progress*110} y2={120-(progress*40)} stroke="#21e6c1" strokeWidth="4" strokeDasharray="6,6" />
      <text x="30" y="40" fontSize="18" fill="#1746a2" fontWeight="bold">Hey Jack! conecta tu auto</text>
    </svg>
  ),
  // Escena 3: Alertas y Recordatorios
  (progress) => (
    <svg viewBox="0 0 360 200" style={{width:'100%',maxWidth:320}}>
      <rect x="0" y="0" width="360" height="200" rx="24" fill="#eaf6ff" />
      <ellipse cx="100" cy="160" rx="60" ry="18" fill="#c1eaff" />
      <rect x="60" y="110" width="80" height="40" rx="16" fill="#1746a2" />
      <circle cx="80" cy="160" r="12" fill="#21e6c1" />
      <circle cx="120" cy="160" r="12" fill="#21e6c1" />
      <rect x="90" y="120" width="20" height="12" rx="5" fill="#fff" />
      <circle cx="140" cy="120" r="10" fill="#fff" />
      {/* Alertas aparecen */}
      <rect x="240" y="40" width="30" height="18" rx="6" fill="#21e6c1" opacity={progress} />
      <text x="245" y="54" fontSize="13" fill="#fff" opacity={progress}>VTV</text>
      <rect x="240" y="70" width="30" height="18" rx="6" fill="#21e6c1" opacity={progress} />
      <text x="245" y="84" fontSize="13" fill="#fff" opacity={progress}>Seguro</text>
      <rect x="240" y="100" width="30" height="18" rx="6" fill="#21e6c1" opacity={progress} />
      <text x="245" y="114" fontSize="13" fill="#fff" opacity={progress}>Patente</text>
      <line x1="140" y1="120" x2={255} y2={49} stroke="#21e6c1" strokeWidth="3" strokeDasharray="5,6" opacity={progress} />
      <text x="30" y="40" fontSize="18" fill="#1746a2" fontWeight="bold">Alertas y recordatorios</text>
    </svg>
  ),
  // Escena 4: Interacción Inteligente
  (progress) => (
    <svg viewBox="0 0 360 200" style={{width:'100%',maxWidth:320}}>
      <rect x="0" y="0" width="360" height="200" rx="24" fill="#eaf6ff" />
      <ellipse cx="100" cy="160" rx="60" ry="18" fill="#c1eaff" />
      <rect x="60" y="110" width="80" height="40" rx="16" fill="#1746a2" />
      <circle cx="80" cy="160" r="12" fill="#21e6c1" />
      <circle cx="120" cy="160" r="12" fill="#21e6c1" />
      <rect x="90" y="120" width="20" height="12" rx="5" fill="#fff" />
      <circle cx="140" cy="120" r="10" fill="#fff" />
      {/* Chat animado */}
      <rect x="220" y="60" width="90" height="26" rx="10" fill="#fff" opacity={progress} />
      <text x="230" y="78" fontSize="13" fill="#1746a2" opacity={progress}>¿Cómo está mi auto?</text>
      <rect x="220" y="95" width="90" height="26" rx="10" fill="#21e6c1" opacity={progress} />
      <text x="230" y="113" fontSize="13" fill="#fff" opacity={progress}>Próximo service en 1000km</text>
      <line x1="140" y1="120" x2={220} y2={73} stroke="#21e6c1" strokeWidth="3" strokeDasharray="5,6" opacity={progress} />
      <text x="30" y="40" fontSize="18" fill="#1746a2" fontWeight="bold">Consultale todo a Hey Jack!</text>
    </svg>
  ),
  // Escena 5: Seguridad y Tranquilidad
  (progress) => (
    <svg viewBox="0 0 360 200" style={{width:'100%',maxWidth:320}}>
      <rect x="0" y="0" width="360" height="200" rx="24" fill="#eaf6ff" />
      <ellipse cx="100" cy="160" rx="60" ry="18" fill="#c1eaff" />
      <rect x="60" y="110" width="80" height="40" rx="16" fill="#1746a2" />
      <circle cx="80" cy="160" r="12" fill="#21e6c1" />
      <circle cx="120" cy="160" r="12" fill="#21e6c1" />
      <rect x="90" y="120" width="20" height="12" rx="5" fill="#fff" />
      <circle cx="140" cy="120" r="10" fill="#fff" />
      {/* Escudo */}
      <rect x="230" y="60" width="36" height="36" rx="18" fill="#21e6c1" opacity={progress} />
      <text x="239" y="85" fontSize="22" fill="#fff" opacity={progress}>🛡️</text>
      <line x1="140" y1="120" x2={248} y2={78} stroke="#21e6c1" strokeWidth="4" strokeDasharray="6,6" opacity={progress} />
      <text x="30" y="40" fontSize="18" fill="#1746a2" fontWeight="bold">Seguridad y tranquilidad</text>
    </svg>
  ),
  // Escena 6: Cierre
  (progress) => (
    <svg viewBox="0 0 360 200" style={{width:'100%',maxWidth:320}}>
      <rect x="0" y="0" width="360" height="200" rx="24" fill="#eaf6ff" />
      <ellipse cx="180" cy="160" rx="90" ry="18" fill="#c1eaff" />
      <rect x="105" y="110" width="150" height="40" rx="18" fill="#1746a2" />
      <text x="180" y="137" fontSize="24" fill="#21e6c1" fontWeight="bold" textAnchor="middle">Hey Jack!</text>
      <text x="180" y="162" fontSize="16" fill="#1746a2" textAnchor="middle">Tu copiloto inteligente</text>
    </svg>
  ),
];

const HeroStoryboardAnimated = () => {
  const [sceneIdx, setSceneIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    setProgress(0);
    intervalRef.current = setInterval(() => {
      setProgress((p) => {
        if (p < 1) return +(p + 0.04).toFixed(2);
        clearInterval(intervalRef.current);
        setTimeout(() => {
          setSceneIdx((idx) => (idx + 1) % scenes.length);
        }, 900);
        return 1;
      });
    }, 40);
    return () => clearInterval(intervalRef.current);
  }, [sceneIdx]);

  return (
    <div style={{width:'100%',maxWidth:340,margin:'0 auto'}}>
      {scenes[sceneIdx](progress)}
    </div>
  );
};

export default HeroStoryboardAnimated;
