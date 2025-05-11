const BACKEND_URL = 'http://192.168.1.12:3000';  

// Función auxiliar para obtener el token y hacer solicitudes
const fetchWithToken = async (url, options = {}) => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('No autenticado');

  const headers = {
    ...options.headers,
    'Authorization': `Bearer ${token}`
  };

  // Ajustar headers para FormData si es necesario
  if (!(options.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
  }

  const response = await fetch(url, { ...options, headers });
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || `Error en la solicitud: ${response.statusText}`);
  }
  return response.json();
};

// Login (no requiere token)
export const gevtLogin = async (CorreoGevt, PasswordGevt) => {
  const response = await fetch(`${BACKEND_URL}/api/gevt/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ CorreoGevt, PasswordGevt })
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Credenciales incorrectas');
  }
  return response.json();
};

// Razas
export async function gevtObtenerRazas() {
  return fetchWithToken(`${BACKEND_URL}/api/gevt/raza`);
}

export async function gevtCrearRaza(data) {
  return fetchWithToken(`${BACKEND_URL}/api/gevt/raza`, {
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export async function gevtActualizarRaza(id, data) {
  return fetchWithToken(`${BACKEND_URL}/api/gevt/raza/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  });
}

export async function gevtEliminarRaza(id) {
  return fetchWithToken(`${BACKEND_URL}/api/gevt/raza/${id}`, {
    method: 'DELETE'
  });
}

// Categorías
export async function gevtObtenerCategorias() {
  return fetchWithToken(`${BACKEND_URL}/api/gevt/categoria`);
}

export async function gevtCrearCategoria(data) {
  return fetchWithToken(`${BACKEND_URL}/api/gevt/categoria`, {
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export async function gevtActualizarCategoria(id, data) {
  return fetchWithToken(`${BACKEND_URL}/api/gevt/categoria/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  });
}

export async function gevtEliminarCategoria(id) {
  return fetchWithToken(`${BACKEND_URL}/api/gevt/categoria/${id}`, {
    method: 'DELETE'
  });
}

// Géneros
export async function gevtObtenerGenero() {
  return fetchWithToken(`${BACKEND_URL}/api/gevt/genero`);
}

export async function gevtCrearGenero(data) {
  return fetchWithToken(`${BACKEND_URL}/api/gevt/genero`, {
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export async function gevtActualizarGenero(id, data) {
  return fetchWithToken(`${BACKEND_URL}/api/gevt/genero/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  });
}

export async function gevtEliminarGenero(id) {
  return fetchWithToken(`${BACKEND_URL}/api/gevt/genero/${id}`, {
    method: 'DELETE'
  });
}

// Mascotas
export async function gevtObtenerMascotas() {
  return fetchWithToken(`${BACKEND_URL}/api/gevt/mascotas`);
}

export async function gevtObtenerMascota(id) {
  return fetchWithToken(`${BACKEND_URL}/api/gevt/mascotas/${id}`);
}

export async function gevtCrearMascota(data) {
  return fetchWithToken(`${BACKEND_URL}/api/gevt/mascotas`, {
    method: 'POST',
    body: data
  });
}

export async function gevtActualizarMascota(id, data) {
  return fetchWithToken(`${BACKEND_URL}/api/gevt/mascotas/${id}`, {
    method: 'PUT',
    body: data
  });
}

export async function gevtEliminarMascota(id) {
  return fetchWithToken(`${BACKEND_URL}/api/gevt/mascotas/${id}`, {
    method: 'DELETE'
  });
}