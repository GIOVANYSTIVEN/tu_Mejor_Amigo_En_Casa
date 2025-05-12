const loginForm = document.getElementById('loginForm');
const mensaje = document.getElementById('mensaje');
 
document.addEventListener('DOMContentLoaded', () => {
  localStorage.removeItem('token');  
});

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const CorreoGevt = document.getElementById('correoGevt').value;
  const PasswordGevt = document.getElementById('passwordGevt').value;

  try {
    const response = await fetch('http://192.168.1.12:3000/api/gevt/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ CorreoGevt, PasswordGevt })
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
      window.location.href = 'pages/mascotas/gevt_listarMascotas.html';
    } else {
      mensaje.textContent = data.message || 'Credenciales incorrectas';
    }
  } catch (err) {
    mensaje.textContent = 'Error en el servidor: ' + err.message;
  }
});