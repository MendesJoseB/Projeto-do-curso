
let lista = [];

function sortear() {
    let quantidade = document.getElementById('quantidade').value;
    let donumero = parseInt(document.getElementById('de').value);
    let atenumero = parseInt(document.getElementById('ate').value);
    while (lista.length != quantidade) {
        lista.push(Math.floor(Math.random() * (atenumero - donumero + 1)) + donumero);
        console.log(lista);
        console.log(atenumero);
        console.log(donumero);
        let campo = document.querySelector('k')
        campo.innerHTML = 'Os numero sorteados foram: ' + lista;
    };
    let botao = document.getElementById('btn-reiniciar');
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
}

function limparCampo(tag) {
    garena = document.getElementById(tag);
    garena.value = ''
}

function reiniciar() {
    let botao = document.getElementById('btn-reiniciar');
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
    limparCampo('quantidade');
    limparCampo('de');
    limparCampo('ate');
    lista.length = 0;
    let campo = document.querySelector('k')
    campo.innerHTML = 'Os numero sorteados são :'

}
     
    