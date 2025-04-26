import React, { useState } from 'react';

const MARCAS = [
  'Chevrolet', 'Citroën', 'Fiat', 'Ford', 'Honda', 'Hyundai', 'Jeep', 'Kia', 'Nissan', 'Peugeot', 'Renault', 'Toyota', 'Volkswagen', 'Otros'
];

const MODELOS_POR_MARCA = {
  'Chevrolet': ['Corsa', 'Onix', 'Prisma', 'Cruze', 'Tracker', 'S10', 'Spin', 'Aveo', 'Otro'],
  'Citroën': ['C3', 'C4', 'Berlingo', 'Aircross', 'Otro'],
  'Fiat': ['Palio', 'Uno', 'Cronos', 'Argo', 'Toro', 'Fiorino', 'Otro'],
  'Ford': ['Fiesta', 'Focus', 'EcoSport', 'Ka', 'Ranger', 'Kuga', 'Otro'],
  'Honda': ['Civic', 'Fit', 'HR-V', 'CR-V', 'Otro'],
  'Hyundai': ['Creta', 'Tucson', 'Santa Fe', 'i10', 'Otro'],
  'Jeep': ['Compass', 'Renegade', 'Hey Jack!rokee', 'Otro'],
  'Kia': ['Rio', 'Seltos', 'Sorento', 'Sportage', 'Otro'],
  'Nissan': ['Versa', 'March', 'Kicks', 'Frontier', 'Otro'],
  'Peugeot': ['208', '308', '2008', 'Partner', 'Otro'],
  'Renault': ['Sandero', 'Kangoo', 'Duster', 'Logan', 'Oroch', 'Otro'],
  'Toyota': ['Hilux', 'Corolla', 'Yaris', 'Etios', 'SW4', 'Otro'],
  'Volkswagen': ['Gol', 'Polo', 'Amarok', 'Tiguan', 'Vento', 'Surán', 'Otro'],
  'Otros': ['Otro']
};

const currentYear = new Date().getFullYear();
const ANIOS = Array.from({length: 30}, (_, i) => currentYear - i);

const LeadForm = ({ onSuccess }) => {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    marca: '',
    modelo: '',
    anio: '',
    provincia: '',
    como: '',
    comentario: ''
  });
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setForm(f => {
        const intereses = f.intereses.includes(value)
          ? f.intereses.filter(i => i !== value)
          : [...f.intereses, value];
        return { ...f, intereses };
      });
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    if (!form.nombre || !form.email || !form.telefono || !form.marca || !form.modelo || !form.anio) {
      setError('Por favor completá todos los campos obligatorios.');
      return;
    }
    setEnviado(true);
    try {
      const response = await fetch('https://sheetdb.io/api/v1/tqa5szmyhgjuw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: {
            fecha: new Date().toLocaleString('es-AR'),
            nombre: form.nombre,
            email: form.email,
            telefono: form.telefono,
            marca: form.marca,
            modelo: form.modelo,
            anio: form.anio,
            provincia: form.provincia,
            CNC: form.como, // Asegúrate que el nombre de columna es CNC en SheetDB
            comentario: form.comentario
          }
        })
      });
      if (!response.ok) throw new Error('No se pudo enviar el formulario.');
      setForm({ nombre: '', email: '', telefono: '', marca: '', modelo: '', anio: '', provincia: '', como: '', comentario: '' });
      if (onSuccess) onSuccess();
    } catch (err) {
      setError('Ocurrió un error al enviar tus datos. Intentalo de nuevo.');
      setEnviado(false);
    }
  };


  if (enviado) return (
    <div style={{padding:'2em',textAlign:'center'}}>
      <h2 style={{color:'var(--primary)'}}>¡Gracias por tu interés!</h2>
      <p>Te contactaremos a la brevedad.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} style={{maxWidth:420,margin:'0 auto',background:'#f8fafc',borderRadius:16,padding:'2em 1.5em',boxShadow:'0 2px 18px #1e293b22'}}>
      <h3 style={{color:'var(--primary)',fontWeight:800,marginBottom:'1em'}}>Dejanos tu contacto</h3>
      <div style={{display:'flex',flexDirection:'column',gap:'1em'}}>
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          placeholder="Nombre y apellido"
          required
          autoComplete="name"
          style={{padding:10,borderRadius:8,border:'1px solid #cbd5e1'}}
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          autoComplete="email"
          style={{padding:10,borderRadius:8,border:'1px solid #cbd5e1'}}
        />
        <input
          type="tel"
          name="telefono"
          value={form.telefono}
          onChange={handleChange}
          placeholder="Teléfono"
          required
          autoComplete="tel"
          style={{padding:10,borderRadius:8,border:'1px solid #cbd5e1'}}
        />
        <input
          type="text"
          name="provincia"
          value={form.provincia}
          onChange={handleChange}
          placeholder="Provincia / Localidad"
          style={{padding:10,borderRadius:8,border:'1px solid #cbd5e1'}}
        />
        <select
          name="marca"
          value={form.marca}
          onChange={handleChange}
          style={{padding:10,borderRadius:8,border:'1px solid #cbd5e1'}}
          required
        >
          <option value="">Marca de auto</option>
          {MARCAS.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
        <select
          name="modelo"
          value={form.modelo}
          onChange={handleChange}
          style={{padding:10,borderRadius:8,border:'1px solid #cbd5e1'}}
          required
          disabled={!form.marca}
        >
          <option value="">Modelo</option>
          {form.marca && MODELOS_POR_MARCA[form.marca].map(m => <option key={m} value={m}>{m}</option>)}
        </select>
        <select name="anio" value={form.anio} onChange={handleChange} style={{padding:10,borderRadius:8,border:'1px solid #cbd5e1'}} required>
          <option value="">Año</option>
          {ANIOS.map(a => <option key={a} value={a}>{a}</option>)}
        </select>
        <select name="como" value={form.como} onChange={handleChange} style={{padding:10,borderRadius:8,border:'1px solid #cbd5e1'}}>
          <option value="">¿Cómo nos conociste?</option>
          <option value="Google">Google</option>
          <option value="Facebook/Instagram">Facebook / Instagram</option>
          <option value="Amigos">Amigos</option>
          <option value="Otros">Otros</option>
        </select>

        <textarea name="comentario" value={form.comentario} onChange={handleChange} placeholder="¿Querés contarnos algo más?" style={{padding:10,borderRadius:8,border:'1px solid #cbd5e1',minHeight:60}} />
        {error && <div style={{color:'#e11d48',fontWeight:600}}>{error}</div>}
        <button type="submit" style={{background:'var(--primary)',color:'#fff',padding:'0.8em',border:'none',borderRadius:8,fontWeight:700,fontSize:'1.1em',cursor:'pointer'}}>Enviar</button>
      </div>
    </form>
  );
};

export default LeadForm;
