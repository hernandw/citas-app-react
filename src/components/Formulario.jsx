import React, { useEffect, useState } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente }) => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setName(paciente.name);
      setOwner(paciente.owner);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSymptoms(paciente.symptoms);
    }
  }, [paciente]);

  const generarId = () => {
    const fecha = Date.now().toString(36);
    const ramdom = Math.random().toString(36).substr(2);
    return fecha + ramdom;
  };

  const id = generarId();

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, owner, email, alta, symptoms, id].includes("")) {
      setError(true);
      console.log("Al menos un campo vacio");
      return;
    }
    setError(false);
    setPacientes([...pacientes, { name, owner, email, alta, symptoms, id }]);
    setName("");
    setOwner("");
    setEmail("");
    setAlta("");
    setSymptoms("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className=" font-bold text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 mb-10 text-center">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5"
      >
        {error && <Error message="Todos los campos son obligatorios" />}
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre de la Mascota
          </label>
          <input
            id="name"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="owner"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del Propietario
          </label>
          <input
            id="owner"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email Propietario
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email Propietario"
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            name=""
            id="sintomas"
            cols="30"
            rows="10"
            placeholder="Describe los sintomas"
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
          className="bg-indigo-600 hover:bg-indigo-700 w-full p-3 text-white uppercase font-bold transition-colors cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Formulario;
