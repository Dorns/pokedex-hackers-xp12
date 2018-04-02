function mostraPokemon(url) {
  //TO-DO:
  //  1. FAZER CONSUMO DA URL RECEBIDA COMO PARAMETRO
  //  2. TRATAR DADOS RECEBIDOS PELA URL
  //  3. CHAMAR FUNÇÃO POPULA MODAL PARA ELA ADICIONAR
  //     OS COMPONENTES HTML NO MODAL
  //  4. ABRIR MODAL (.modal) COM JAVASCRIPT
  //     (http://getbootstrap.com/docs/4.0/components/modal/#via-javascript)
  const URL = url;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', URL, true);
  xhr.send();
  xhr.onload = function(e) {
    const res = JSON.parse(xhr.response);
    console.log(res);
    populaModal(res);
    $('#modal').modal('show');
  }
}


// Mostrar o nome, imagem do pokemon, tipo (todos os tipos), peso, altura e id
function populaModal(pokemon) {
  //TO-DO:
  //  1. CRIAR COMPONENTES PARA MOSTRAR NO MODAL 
  //     SEGUINDO O PADRÃO DO BOOTSTRAP
  //     (http://getbootstrap.com/docs/4.0/components/modal/#modal-components)
  //  2. LINKAR TODOS OS COMPONENTES COM O MODAL .modal
  //  3. SEMPRE QUE FECHAR O MODAL LIMPAR O CONTEUDO ADICIONADO
  const modal = document.getElementById('modal');

  const modalDialog = document.createElement('div');
  modalDialog.classList.add('modal-dialog');

  const modalContent = document.createElement('div')
  modalContent.classList.add('modal-content');

  //nome
  const nome = document.createElement('h5');
  nome.classList.add('modal-title');
  nome.innerHTML = pokemon.name;

  //imagem
  const foto = document.createElement('img');
  foto.src = pokemon.sprites.front_default;  

  //tipo
  const tipo = document.createElement('div');
  tipo.classList.add('modal-body');
  tipo.innerHTML = pokemon.types;

  //peso
  const peso = document.createElement('div');
  peso.classList.add('modal-body');
  peso.innerHTML = pokemon.weight;

  //altura
  const altura = document.createElement('div');
  altura.classList.add('modal-body');
  altura.innerHTML = pokemon.height;

  //id
  const id = document.createElement('div');
  id.classList.add('modal-body');
  id.innerHTML = pokemon.id;

  modalContent.appendChild(modalDialog);
  modalContent.appendChild(nome);
  modalContent.appendChild(foto);
  modalContent.appendChild(tipo);
  modalContent.appendChild(peso);
  modalContent.appendChild(altura);
  modalContent.appendChild(id);
  modal.appendChild(modalContent);
}