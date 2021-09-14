const produtos = [
  {
    id: 'abc123',
    nome: 'JSRaiz no GitHub',
    preco: 300,
    descricao: 'Exercitando',
    imagem: 'http://lorempixel.com/400/200'
  },
  {
    id: 'bbc123',
    nome: 'JSRaiz no GitHub',
    preco: 1200,
    descricao: 'Exercitando',
    imagem: 'http://lorempixel.com/400/200'
  },
  {
    id: 'cbc123',
    nome: 'JSRaiz no GitHub',
    preco: 500,
    descricao: 'Exercitando',
    imagem: 'http://lorempixel.com/400/200'
  }
];

const carrinhoItens = {};

function renderizaProduto(produto, index) {
  return `
    <div class="col-sm-4 mb-3">
      <div class="card">
        <div class="card loja__item">
          <img src="${produto.imagem}" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">${produto.nome}</h5>
            <small>${produto.preco}</small>
            <p class="card-text">${produto.descricao}</p>
            <button data-index="${index}" class="btn btn-primary btn-add">Adicionar</button>  
          </div>
        </div>
      </div>
    </div>
  `
}

function renderizaProdutos() {
  let html = '';
  for (let i = 0; i < produtos.length; i++) {
   html = html + renderizaProduto(produtos[i], i);
  }
  return html;
}

function renderizaItemCarrinho(produtoCarrinho) {
  return `
  <div class="card carrinho__item">
    <div class="card-body">
        <h5 class="card-title">${produtoCarrinho.nome}</h5>
        <p class="card-text">Preço unidade: R$ ${produtoCarrinho.preco} | Quantidade: ${produtoCarrinho.quantidade}</p>
        <p class="card-text">Valor: ${produtoCarrinho.preco * produtoCarrinho.quantidade}</p>
          <button data-produto-id="${produtoCarrinho.id}" class="btn btn-danger btn-remove btn-sm">Remover</button>  
    </div>
  </div>
  `
}

function renderizaCarrinho() {
  let html = '';
  for (let produtoId in carrinhoItens) {
    html = html + renderizaItemCarrinho(carrinhoItens[produtoId]);
  }
    document.querySelector('.carrinho__itens').innerHTML = html;
}

function renderCarrinhoTotal() {
  let total = 0;

  for (let produtoId in carrinhoItens) {
    total = total + (carrinhoItens[produtoId].preco * carrinhoItens[produtoId].quantidade);
  }
    document.querySelector('.carrinho__total').innerHTML = `<h6>Total <strong>R$ ${total} </strong></h6>`
}

function adicionaItemNoCarrinho(produto) {
  if (!carrinhoItens[produto.id]) {
    carrinhoItens[produto.id] = produto;
    carrinhoItens[produto.id].quantidade = 0;
  }

  ++carrinhoItens[produto.id].quantidade;

  renderizaCarrinho();
  renderCarrinhoTotal();
}

document.body
.addEventListener('click', function(event) {
    const elemento = event.target;

    if (elemento.classList.contains('btn-add')) {  
    const index = parseInt(elemento.getAttribute('data-index'), 10);
    const produto = produtos[index];
    
    adicionaItemNoCarrinho(produto);
  }

    if (elemento.classList.contains('btn-remove')) {
    const produtoId = elemento.getAttribute('data-produto-id');
    if (carrinhoItens[produtoId].quantidade <= 1){
      delete carrinhoItens[produtoId];
    } else {
      --carrinhoItens[produtoId].quantidade;
    }

    renderizaCarrinho();
    renderCarrinhoTotal();
    }
});

document.querySelector('.loja').innerHTML = renderizaProdutos();



