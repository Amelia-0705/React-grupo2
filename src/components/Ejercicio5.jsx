import React, { useEffect, useState } from "react";
import { Button, FormControl, ListGroup } from "react-bootstrap";

import {
  guardarEnLocalStorage,
  obtenerDeLocalStorage,
} from "../utils/localStorage.util";

const Ejercicio5 = () => {
  const [listadoTareas, setListadoTareas] = useState([]);
  const [tarea, setTarea] = useState("");
  const [editandoIndex, setEditandoIndex] = useState(null);
  const [tareaModificada, setTareaModificada] = useState("");

  useEffect(() => {
    const tareasGuardadas = obtenerDeLocalStorage("listadoTareas");
    setListadoTareas(tareasGuardadas);
  }, []);

  useEffect(() => {
    // Código que se ejecuta al montar o actualizar
    guardarEnLocalStorage("listadoTareas", listadoTareas);
    //codigo que se ejecuta al desmontar
  }, [listadoTareas]);

  function handleSubmit(e) {
    if (tarea != "") {
      e.preventDefault();
      setListadoTareas([...listadoTareas, tarea]);
      // limpiar el formulario
      setTarea("");
    } else {
      alert("Debe escribir algo");
    }
  }

  function handleUpdate(indiceAEditar) {
    //console.log(indiceAEditar);
    //console.log(tareaModificada);

    if (tareaModificada != "") {
      // Creamos un nuevo array = todo lo que tiene listado tareas (usando el ... spread Operator, para q separe los elementos del array)
      const nuevoArray = [...listadoTareas];
      //de ese Array, accedemos al elemento que queremos modificar y le asignamos un nuevo valor
      nuevoArray[indiceAEditar] = tareaModificada;
      //guardo los cambios en mi listado original
      setListadoTareas(nuevoArray);
      //para cerrar ese input
      setEditandoIndex(null);
      //limpio la tarea modificada
      setTareaModificada("");
    } else {
      alert("Debe escribir algo");
    }
  }

  function handleUndo(indice) {
    //console.log(indice);
    setListadoTareas([...listadoTareas]);
    setEditandoIndex(null);
    setTareaModificada("");
  }

  //no lo paso al archivo de localStorage porque alla se actualiza con la fn guardarEnLocalStorage---------AMELIE
  function handleDelete(indiceAEliminar) {
    const tareaSeleccionada = listadoTareas[indiceAEliminar];
    const confirmar = confirm(
      `¿Estás seguro de que querés eliminar la tarea: "${tareaSeleccionada}"?`
    );

    if (confirmar) {
      const nuevasTareas = listadoTareas.filter(
        (_, indice) => indice !== indiceAEliminar
      );
      setListadoTareas(nuevasTareas);
      // guardarEnLocalStorage("listadoTareas", nuevasTareas);
    }
  }

  return (
    <div className="container mt-2">
      <h2 style={{ color: 'blue', fontSize: '24px', fontWeight: 'bold' }}>Ejercicio 5:  Listado de tareas</h2>

      <form onSubmit={handleSubmit} className="d-flex w-50 ">
        <input
          type="text"
          placeholder="Ingrese la tarea"
          className="form-control m-2"
          onChange={(e) => setTarea(e.target.value)}
          value={tarea}
        />
        <Button type="submit" variant="primary">
          Guardar
        </Button>
      </form>
      <h3>Listado</h3>
      {listadoTareas.length == 0 ? (
        <p>No tiene tareas pendientes. </p>
      ) : (
        <ListGroup>
          {" "}
          {listadoTareas.map((item, indice) => {
            return (
              <ListGroup.Item
                variant="primary"
                key={indice}
                className="d-flex justify-content-between align-items-center"
              >
                {" "}
                {editandoIndex !== indice ? (
                  <>
                    <span>{item}</span>
                    <div className="d-flex gap-3">
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => {
                          setEditandoIndex(indice);
                          setTareaModificada(tarea);
                        }}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(indice)}
                      >
                        Eliminar
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <FormControl
                      type="text"
                      value={tareaModificada}
                      onChange={(e) => setTareaModificada(e.target.value)}
                    />
                    <div className="d-flex gap-3">
                      <Button
                        variant="success"
                        onClick={() => handleUpdate(indice)}
                      >
                        Guardar
                      </Button>
                      <Button
                        variant="warning"
                        onClick={() => handleUndo(indice)}
                      >
                        Deshacer
                      </Button>
                    </div>
                  </>
                )}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      )}
    </div>
  );
};

export default Ejercicio5;
