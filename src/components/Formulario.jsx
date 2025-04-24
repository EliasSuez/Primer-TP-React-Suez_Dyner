import React, { useState } from 'react';
import './Formulario.css';

function Formulario() {
  const [form, setForm] = useState({
    mascota: '',
    duenio: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const Changes = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(form);  
    setForm({
      mascota: '',
      duenio: '',
      fecha: '',
      hora: '',
      sintomas: ''
    });
  };

  return (
    <div>
      <h2>Crear mi Cita</h2>
      <form onSubmit={submit}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          value={form.mascota}
          onChange={Changes}
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          name="duenio"  
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
          value={form.duenio}
          onChange={Changes}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          value={form.fecha}
          onChange={Changes}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          value={form.hora}
          onChange={Changes}
        />
        <label>Sintomas</label>
        <textarea
          name="sintomas"
          value={form.sintomas}
          className="u-full-width"
          onChange={Changes}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </div>
  );
}

export default Formulario;
