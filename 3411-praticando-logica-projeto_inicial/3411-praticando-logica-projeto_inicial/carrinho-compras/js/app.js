
let valordalista = 0;
let quantidadeprodutos = (document.getElementById('quantidade').value);
let carrinho = document.getElementById("lista-produtos");
let carrinhototal = document.querySelector(".carrinho__total")

function adicionar() {
    let produto = document.getElementById('produto').value;
    console.log(produto);
    let quantidadeprodutos = parseInt(document.getElementById('quantidade').value);
    let valordofone = quantidadeprodutos * 100;
    let valordocelular = quantidadeprodutos * 1400;
    let valordooculos = quantidadeprodutos * 5000;

    function seila(g) {
        valordalista = valordalista + g;
    }
    if (produto.includes("Fone de ouvido - R$100") && quantidadeprodutos <= 100) {
        fone = produto.split('-')[0];
        let carrinho = document.getElementById("lista-produtos");
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
<span class="texto-azul"> ${quantidadeprodutos} </span> ${fone} <span class="texto-azul"> R$${valordofone} </span>`;
        seila(valordofone)
        carrinhototal.innerHTML = ` Total: <span class="texto-azul" id="valor-total">R$${valordalista}</span>`
    }
    if (produto.includes("Celular - R$1400") && quantidadeprodutos <= 100) {
        celular = produto.split('-')[0];
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
  <span class="texto-azul"> ${quantidadeprodutos} </span> ${celular} <span class="texto-azul"> R$${valordocelular} </span>`
        seila(valordocelular);
        carrinhototal.innerHTML = ` Total: <span class="texto-azul" id="valor-total">R$${valordalista}</span>`;
    };

    if (produto.includes("Oculus VR - R$5000") && quantidadeprodutos <= 100) {
        oculos = produto.split('-')[0];
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
 <span class="texto-azul"> ${quantidadeprodutos} </span> ${oculos} <span class="texto-azul"> R$${valordooculos} </span>`
        seila(valordooculos);
        carrinhototal.innerHTML = ` Total: <span class="texto-azul" id="valor-total">R$${valordalista}</span>`;
    }
    if (quantidadeprodutos > 1000) {
        alert('Não é possivel comprar essa quantidade')
    }


}

function limpar() {
    valordalista = 0;
    carrinho.innerHTML = `<section class="carrinho__produtos__produto">
<span class="texto-azul">  </span>  <span class="texto-azul">  </span>`;
    carrinhototal.innerHTML = ` Total: <span class="texto-azul" id="valor-total">R$${valordalista}</span>`;
}
