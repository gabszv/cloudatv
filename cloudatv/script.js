// Login 100% seguro😂
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    const errorMsg = document.getElementById('error-msg');
  
    if (usuario === 'admin' && senha === '12345') {
      errorMsg.classList.remove('show');
      const loading = document.getElementById('loading-screen');
      loading.style.display = 'flex';
  
      setTimeout(() => {
        window.location.href = 'painel.html'; // Redireciona para a próxima página após o carregamento
      }, 3000);
    } else {
      errorMsg.classList.add('show');
    }
  });
  

  const showPasswordBtn = document.getElementById('show-password');
  const senhaInput = document.getElementById('senha');
  
  showPasswordBtn.addEventListener('click', () => {
    const type = senhaInput.type === 'password' ? 'text' : 'password';
    senhaInput.type = type;
  });
  
