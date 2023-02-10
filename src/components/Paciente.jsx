import React from "react";

const Paciente = ({ paciente }) => {
  const { name, owner, alta, email, symptoms } = paciente;
  return (
    <div className="md:ml-4 bg-white shadow-md px-5 py-10 rounded-xl mb-4">
      <p className="font-bold mb-3 text-gra uppercase">
        Nombre: {""} <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="font-bold mb-3 text-gra uppercase">
        Propietario: {""}{" "}
        <span className="font-normal normal-case">{owner}</span>
      </p>
      <p className="font-bold mb-3 text-gra uppercase">
        Email: {""} <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gra uppercase">
        Alta: {""} <span className="font-normal normal-case">{alta}</span>
      </p>
      <p className="font-bold mb-3 text-gra uppercase">
        Sintomas: {""}{" "}
        <span className="font-normal normal-case">{symptoms}</span>
      </p>

      <div className="flex justify-between pt-5">
      <button className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg">Editar</button>
      <button className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg">Eliminar</button>
      </div>
    </div>
  );
};

export default Paciente;
