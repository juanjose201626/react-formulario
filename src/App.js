import React, { useState, useRef } from "react";
import "./style.css";

export default function App() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [departamento, setDepartamento] = useState("");

  let formulario = useRef(null);

  const handleSubmit = event => {
    event.preventDefault();
    event.target.reset();
    console.log(event);
    //formulario.reset();
    //setNombre("11");
    //setApellido("11");
    //setTelefono("11");
    //setEmail("11");
    //setDepartamento("111");
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        ref={formulario}
      >
        <div id="step-1" className="step-1">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            onChange={e => setApellido(e.target.value)}
          />
        </div>
        <div id="step-2" className="step-2">
          <input
            type="tel"
            name="telefono"
            placeholder="telefono"
            onChange={e => setTelefono(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div id="step-3" className="step-3">
          <select
            name="departamento"
            onChange={e => setDepartamento(e.target.value)}
          >
            <option value="">Selecciona</option>
            <option value="Deporte 1">Deporte 1</option>
            <option value="Deporte 2">Deporte 1</option>
          </select>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}
