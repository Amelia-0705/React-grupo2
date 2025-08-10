import EmpleadosList from "./subComponentesEj7/EmpleadoList";

import empleados from "../db/empleadosDb";

function ejercicio7() {
  return (
    <div className="ejercicio7 mt-5">
      <h2 style={{ color: 'blue', fontSize: '24px', fontWeight: 'bold' }} >Ejercicio 7:   Lista de empleados </h2>
      <EmpleadosList empleados={empleados}></EmpleadosList>
    </div>
  );
}

export default ejercicio7;
