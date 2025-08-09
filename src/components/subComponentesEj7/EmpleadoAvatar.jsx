import React from 'react';
import { Image } from "react-bootstrap";

const EmpleadoAvatar = ({ foto, nombre }) => {
  return (
    <div className="text-center border border-danger p-2 rounded">
      <Image src={foto} alt={nombre} roundedCircle width={80} height={80} />
    </div>
  );
};

export default EmpleadoAvatar;
