const API_URL = 'http://localhost:3000/api/gevt';

export async function gevtObtenerGenero() {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('No autenticado');
  const gevt_res = await fetch(`${API_URL}/genero`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return await gevt_res.json();
}

export async function gevtCrearGenero(data) {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('No autenticado');
  const gevt_res = await fetch(`${API_URL}/genero`, {
    method: 'POST',
    headers: { 
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await gevt_res.json();
}

export async function gevtActualizarGenero(id, data) {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('No autenticado');
  const gevt_res = await fetch(`${API_URL}/genero/${id}`, {
    method: 'PUT',
    headers: { 
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await gevt_res.json();
}

export async function gevtEliminarGenero(id) {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('No autenticado');
  const gevt_res = await fetch(`${API_URL}/genero/${id}`, { 
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return await gevt_res.json();
}