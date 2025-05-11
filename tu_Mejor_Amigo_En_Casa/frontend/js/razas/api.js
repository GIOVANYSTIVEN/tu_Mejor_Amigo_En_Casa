  const API_URL = 'http://localhost:3000';

export async function omab_obtenerRazas() {
  const omab_res = await fetch(`${API_URL}/omab_raza`);
  return await omab_res.json();
}

export async function omab_crearRaza(data) {
  const omab_res = await fetch(`${API_URL}/omab_raza`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await omab_res.json();
}

export async function omab_actualizarRaza(id, data) {
  const res = await fetch(`${API_URL}/omab_raza/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await res.json();
}

export async function omab_eliminarRaza(id) {
  const omab_res = await fetch(`${API_URL}/omab_raza/${id}`, { method: 'DELETE' });
  return await omab_res.json();
}

