import React from 'react';

const faqs = [
  {
    q: '¿Qué es Hey Jack!?',
    a: 'Es un servicio integral que conecta tu auto a la nube y te avisa sobre mantenimientos, vencimientos y reportes automáticos.'
  },
  {
    q: '¿Cómo se instala Hey Jack!?',
    a: 'Un técnico instala el hardware en tu vehículo en menos de 1 hora. No es invasivo y no afecta la garantía.'
  },
  {
    q: '¿Con qué autos es compatible?',
    a: 'Hey Jack! es compatible con la mayoría de autos particulares y de flota. Consultanos para modelos especiales.'
  },
  {
    q: '¿Qué pasa con mis datos personales?',
    a: 'Tus datos están protegidos por nuestra política de privacidad. Solo se usan para brindarte el servicio y nunca se comparten sin tu consentimiento.'
  },
  {
    q: '¿Cómo recibo soporte?',
    a: 'Podés contactarnos por WhatsApp, email o el formulario web. El soporte es rápido y personalizado.'
  },
  {
    q: '¿Puedo dar de baja el servicio?',
    a: 'Sí, podés cancelar el abono en cualquier momento sin penalidad.'
  },
  {
    q: '¿Qué beneficios tiene el bot Hey Jack!?',
    a: 'El bot te avisa sobre vencimientos, responde dudas y genera reportes automáticos para tu tranquilidad.'
  }
];

const FAQs = () => (
  <>
    <section id="faqs" className="section-bg" style={{marginTop:'2em', maxWidth:800, margin:'2em auto', padding:'2em 1em', color:'#1e293b', background:'#eaf6ff', borderRadius:14, boxShadow:'0 2px 18px #1a47e620'}}>
      <h2 style={{color:'var(--primary)', fontWeight:800}}>Preguntas Frecuentes (FAQs)</h2>
      <div className="decorative-line" style={{maxWidth:320, margin:'1.5em auto'}}></div>
      <ul style={{marginTop:'1.5em', textAlign:'left', fontSize:'1.08em'}}>
        <li><b>¿Qué es Hey Jack!?</b> Es un servicio integral que conecta tu auto a la nube y te avisa sobre mantenimientos, vencimientos y reportes automáticos.</li>
        <li><b>¿Cómo se instala Hey Jack!?</b> Un técnico instala el hardware en tu vehículo en menos de 1 hora. No es invasivo y no afecta la garantía.</li>
        <li><b>¿Con qué autos es compatible?</b> Hey Jack! es compatible con la mayoría de autos particulares y de flota. Consultanos para modelos especiales.</li>
        <li><b>¿Qué pasa con mis datos personales?</b> Tus datos están protegidos por nuestra política de privacidad. Solo se usan para brindarte el servicio y nunca se comparten sin tu consentimiento.</li>
        <li><b>¿Cómo recibo soporte?</b> Podés contactarnos por WhatsApp, email o el formulario web. El soporte es rápido y personalizado.</li>
        <li><b>¿Puedo dar de baja el servicio?</b> Sí, podés cancelar el abono en cualquier momento sin penalidad.</li>
        <li><b>¿Qué beneficios tiene el bot Hey Jack!?</b> El bot te avisa sobre vencimientos, responde dudas y genera reportes automáticos para tu tranquilidad.</li>
      </ul>
      <div style={{marginTop:'2.5em',fontSize:'0.98em',color:'#555'}}>¿Tenés otra pregunta? Escribinos a <a href="mailto:info@cheekus.com.ar">info@cheekus.com.ar</a></div>
    </section>

    <section id="faqs" className="section-bg" style={{marginTop:'2em'}}>
      <h2 style={{color:'var(--primary)', fontWeight:800}}>Preguntas Frecuentes (FAQs)</h2>
      <div className="decorative-line" style={{maxWidth:320, margin:'1.5em auto'}}></div>
      <ul style={{maxWidth:700, margin:'0 auto', padding:0, listStyle:'none'}}>
        {faqs.map((item,i) => (
          <li key={i} style={{marginBottom:'1.5em', textAlign:'left'}}>
            <strong style={{color:'#38bdf8'}}>{item.q}</strong>
            <div style={{color:'#dbeafe', marginTop:'.3em'}}>{item.a}</div>
          </li>
        ))}
      </ul>
    </section>
  </>

);

export default FAQs;
