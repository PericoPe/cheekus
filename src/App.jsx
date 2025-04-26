import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Beneficios from './components/Beneficios';
import LeadForm from './components/LeadForm';
import FormPage from './FormPage';
import Proceso from './components/Proceso';
import Testimonios from './components/Testimonios';
import Precios from './components/Precios';
import Contacto from './components/Contacto';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import Legales from './components/Legales';
import Privacidad from './components/Privacidad';
import Terminos from './components/Terminos';
import Cookies from './components/Cookies';
import FAQs from './components/FAQs';

// Modal genérico
function Modal({ children, onClose }) {
  return (
    <div style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',background:'rgba(30,41,59,0.7)',zIndex:9999,display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{background:'#fff',borderRadius:14,maxWidth:900,width:'95vw',maxHeight:'90vh',overflowY:'auto',padding:'2em 1.5em',boxShadow:'0 2px 32px #1a47e650',position:'relative'}}>
        <button onClick={onClose} style={{position:'absolute',top:16,right:16,background:'#eaf6ff',border:'none',borderRadius:'50%',width:36,height:36,fontSize:'1.4em',color:'#1a47e6',cursor:'pointer'}}>×</button>
        {children}
      </div>
    </div>
  );
}

function getPath() {
  return window.location.pathname;
}

function navigate(path) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new Event('popstate'));
}

function App() {
  const [showLegales, setShowLegales] = useState(false);
  const [showPrivacidad, setShowPrivacidad] = useState(false);
  const [showTerminos, setShowTerminos] = useState(false);
  const [showCookies, setShowCookies] = useState(false);
  const [showFAQs, setShowFAQs] = useState(false);
  const [path, setPath] = useState(getPath());

  React.useEffect(() => {
    const onPopState = () => setPath(getPath());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  if (path === '/form') {
    return <FormPage navigateToLanding={() => navigate('/')} />;
  }

  return (
    <>
      <NavBar />
      <Hero onLeadClick={() => navigate('/form')} />
      <Beneficios />
      <Proceso />
      <Testimonios />
      <div style={{marginTop: '13em'}}>
        <Precios />
      </div>
      <Contacto />
      <WhatsAppButton />
      <Footer 
        onShowLegales={() => setShowLegales(true)}
        onShowPrivacidad={() => setShowPrivacidad(true)}
        onShowTerminos={() => setShowTerminos(true)}
        onShowCookies={() => setShowCookies(true)}
        onShowFAQs={() => setShowFAQs(true)}
      />
      {showLegales && <Modal onClose={() => setShowLegales(false)}><Legales /></Modal>}
      {showPrivacidad && <Modal onClose={() => setShowPrivacidad(false)}><Privacidad /></Modal>}
      {showTerminos && <Modal onClose={() => setShowTerminos(false)}><Terminos /></Modal>}
      {showCookies && <Modal onClose={() => setShowCookies(false)}><Cookies /></Modal>}
      {showFAQs && <Modal onClose={() => setShowFAQs(false)}><FAQs /></Modal>}
    </>
  );
}

export default App;
