import React from 'react'

const Paciente = () => {
  return (
    <div className="md:ml-4 bg-white shadow-md px-5 py-10 rounded-xl mb-4">
        <p className="font-bold mb-3 text-gra uppercase">
          Nombre: {""} <span className="font-normal normal-case">Hook</span>
        </p>
        <p className="font-bold mb-3 text-gra uppercase">
          Propietario: {""} <span className="font-normal normal-case">Williams Hernandez</span>
        </p>
        <p className="font-bold mb-3 text-gra uppercase">
          Email: {""} <span className="font-normal normal-case">hernandw@gmail.com</span>
        </p>
        <p className="font-bold mb-3 text-gra uppercase">
          Alta: {""} <span className="font-normal normal-case">23-02023</span>
        </p>
        <p className="font-bold mb-3 text-gra uppercase">
          Sintomas: {""} <span className="font-normal normal-case">Solo Duerme</span>
        </p>
        
      </div>
  )
}

export default Paciente