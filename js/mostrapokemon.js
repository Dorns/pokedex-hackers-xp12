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
    $('.modal').modal({ show: true });
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
  const modal = document.querySelector('.modal');

  while(modal.firstChild) {
    modal.removeChild(modal.firstChild);
  }

  //estrutura modal
  const dialog = document.createElement('div');
  dialog.classList.add('modal-dialog');

  const content = document.createElement('div');
  content.classList.add('modal-content');
  
  const header = document.createElement('div');
  header.classList.add('modal-header');
  content.appendChild(header);
  
  //id
  const id = document.createElement('h5');
  id.classList.add('modal-title');
  id.innerText = `#${pokemon.id}`;
  header.appendChild(id);

  const body = document.createElement('div');
  body.classList.add('modal-body');
  content.appendChild(body);

  //nome
  const nome = document.createElement('h1');
  nome.innerText = pokemon.name;
  body.appendChild(nome);

  //tipos
  const div = document.createElement('div');
  div.innerText = "Tipos";
  body.appendChild(div);
  const tipos = document.createElement('ul');
  pokemon.types.map(type => {
    const tipo = document.createElement('li');
    tipo.innerText = type.type.name;
    tipos.appendChild(tipo);
  });
  body.appendChild(tipos);

  //peso
  const peso = document.createElement('div');
  peso.innerText = `Peso: ${pokemon.weight}`;
  body.appendChild(peso);

  //altura
  const altura = document.createElement('div');
  altura.innerText = `Altura: ${pokemon.height}`;
  body.appendChild(altura);

  //imagem
  const img = document.createElement('img');
  img.src = pokemon.sprites.front_default; 
  body.appendChild(img);


  dialog.appendChild(content);
  modal.appendChild(dialog);
}