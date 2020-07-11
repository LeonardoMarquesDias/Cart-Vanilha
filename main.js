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

function renderizaProduto(produto) {
  return `
    <div class="col-sm-4 mb-3">
      <div class="card">
        <div class="card loja__item">
          <img src="${produto.imagem}" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">${produto.nome}</h5>
            <small>${produto.preco}</small>
            <p class="card-text">${produto.descricao}</p>
              <button data-value="300" class="btn btn-primary">Adicionar</button>  
          </div>
        </div>
      </div>
    </div>
  `
}
document.querySelector('.loja').innerHTML = renderizaProdutos();

function renderizaProdutos() {
  let html = '';
  for (let i = 0; i < produtos.length; i++) {
    console.log(renderizaProduto());
    html = html + renderizaProduto(produtos[i]);
  }
  return html;
}

renderizaProdutos();

