import { Row, Col, Badge } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = ({ empleado }) => {
  const { nombre, puesto, categoria, avatar } = empleado;

  const colorMap = {
    Business: "primary",
    Marketing: "info",
    Engineering: "success",
  };

  return (
    <Row className="align-items-center py3 border-bottom">
      <Col xs="auto">
        <EmpleadoAvatar src={avatar} alt={nombre} />
      </Col>
      <Col>
        <div className="fw-bold">{nombre}</div>
        <div>{puesto}</div>
        <Badge bg={colorMap[categoria] || "secondary"}>{categoria}</Badge>
      </Col>
    </Row>
  );
};
export default EmpleadoRow;
