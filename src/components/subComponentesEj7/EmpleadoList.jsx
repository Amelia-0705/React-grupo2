import { Container } from "react-bootstrap";
import EmpleadoRow from "./EmpleadoRow";

export default function EmpleadosList({ empleados }) {
  return (
    <Container className="my-4 border rpunded shadow-sm">
      {empleados.map((emp, indice) => (
        <EmpleadoRow key={indice} empleado={emp}/>
      ))}
    </Container>
  );
}
