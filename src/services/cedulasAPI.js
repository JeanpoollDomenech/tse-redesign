const BASE_URL = "https://apis.gometa.org/cedulas";

export async function buscarCedulaAPI(cedula) {
  const normalizada = cedula.replace(/-/g, "");
  const response = await fetch(`${BASE_URL}/${normalizada}`);
  const data = await response.json();
  if (!data.results || data.results.length === 0) return null;
  return data.results[0];
}

export async function buscarNombreAPI(nombre) {
  const encoded = encodeURIComponent(nombre.toUpperCase());
  const response = await fetch(`${BASE_URL}/${encoded}`);
  const data = await response.json();
  return data.results || [];
}