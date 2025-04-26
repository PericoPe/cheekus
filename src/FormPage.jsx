import React from 'react';
import LeadForm from './components/LeadForm';

const FormPage = ({ navigateToLanding }) => (
  <section style={{minHeight:'100vh',background:'#e0f2fe',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <div style={{maxWidth:480,width:'100%',margin:'2em auto'}}>
      <LeadForm onSuccess={navigateToLanding} />
    </div>
  </section>
);

export default FormPage;
