document.addEventListener('DOMContentLoaded', () => {
     
    loadProntuarios();
  
    
    if (!localStorage.getItem('prontuarios')) {
      const prontuariosExemplo = [
        { nome: 'Maria Silva', data: '2023-11-20', descricao: 'Fisioterapia para coluna' },
        { nome: 'João Pereira', data: '2023-10-15', descricao: 'Reabilitação pós-cirúrgica' },
        { nome: 'Ana Costa', data: '2023-09-05', descricao: 'Tratamento de dor lombar' }
      ];
      localStorage.setItem('prontuarios', JSON.stringify(prontuariosExemplo));
    }
  
    
    const form = document.getElementById('prontuario-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const nomePaciente = document.getElementById('nome-paciente').value;
      const dataPaciente = document.getElementById('data-paciente').value;
      const descricaoPaciente = document.getElementById('descricao-paciente').value;
  
      
      const prontuario = {
        nome: nomePaciente,
        data: dataPaciente,
        descricao: descricaoPaciente
      };
  
      let prontuarios = JSON.parse(localStorage.getItem('prontuarios')) || [];
      prontuarios.push(prontuario);
      localStorage.setItem('prontuarios', JSON.stringify(prontuarios));
  
      
      form.reset();
  
     
      loadProntuarios();
    });
  
 
    function loadProntuarios() {
      const listaProntuarios = document.getElementById('lista-prontuarios');
      listaProntuarios.innerHTML = '';
  
      const prontuarios = JSON.parse(localStorage.getItem('prontuarios')) || [];
      prontuarios.forEach((prontuario, index) => {
        const prontuarioDiv = document.createElement('div');
        prontuarioDiv.classList.add('prontuario-item');
        prontuarioDiv.innerHTML = `
          <div>
            <p><strong>Nome:</strong> ${prontuario.nome}</p>
            <p><strong>Data:</strong> ${prontuario.data}</p>
            <p><strong>Descrição:</strong> ${prontuario.descricao}</p>
          </div>
          <div>
            <span class="more-options" onclick="showOptions(${index})">...</span>
            <div class="options-menu" id="options-menu-${index}" style="display: none;">
              <button onclick="editProntuario(${index})">Editar</button>
              <button onclick="deleteProntuario(${index})">Deletar</button>
            </div>
          </div>
        `;
        listaProntuarios.appendChild(prontuarioDiv);
      });
    }
  
   
    window.showOptions = function(index) {
      const menu = document.getElementById(`options-menu-${index}`);
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }
  
    
    window.editProntuario = function(index) {
      let prontuarios = JSON.parse(localStorage.getItem('prontuarios')) || [];
      const prontuario = prontuarios[index];
  
      
      document.getElementById('nome-paciente').value = prontuario.nome;
      document.getElementById('data-paciente').value = prontuario.data;
      document.getElementById('descricao-paciente').value = prontuario.descricao;
  
      
      prontuarios.splice(index, 1);
      localStorage.setItem('prontuarios', JSON.stringify(prontuarios));
      loadProntuarios();
    }
  
    
    window.deleteProntuario = function(index) {
      let prontuarios = JSON.parse(localStorage.getItem('prontuarios')) || [];
      prontuarios.splice(index, 1);
      localStorage.setItem('prontuarios', JSON.stringify(prontuarios));
      loadProntuarios();
    }
  });
  