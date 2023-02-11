
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente }) => {


  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll p-2">
      {pacientes.length === 0 ? (
        <>
          <h2 className=" font-bold text-3xl text-center">No hay pacientes</h2>
          <p className="text-lg mt-5 mb-10 text-center">
            Comienza agregando pacientes{" "}
            <span className="text-indigo-600 font-bold">
              y aparecerán en este lugar
            </span>
          </p>

          
        </>
      ) : (
        <>
          <h2 className=" font-bold text-3xl text-center">Listado Pacientes</h2>
          <p className="text-lg mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">
              Pacientes y Citas{" "}
            </span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente}/>
          ))}
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
