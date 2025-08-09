import EmpleadosList from "./subComponentesEj7/EmpleadoList";

import empleados from "../db/empleadosDb";

function ejercicio7() {
  return (
    <div className="ejercicio7">
      <EmpleadosList empleados={empleados}></EmpleadosList>
    </div>
  );
}

export default ejercicio7;
