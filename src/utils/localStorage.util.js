export const guardarEnLocalStorage = (clave, valor) => {
  const valorJson = JSON.stringify(valor);
  localStorage.setItem(clave, valorJson);
};

// obtener de local storage
export const obtenerDeLocalStorage = (clave) => {
  console.log("LLEGO A LA FUNCION");
  console.log(clave);
  const data = localStorage.getItem(clave);
  console.log("data:", data);
  return data ? JSON.parse(data) : [];
};
// eliminar de local
