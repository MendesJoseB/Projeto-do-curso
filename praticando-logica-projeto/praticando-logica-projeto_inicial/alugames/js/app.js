function alterarStatus(id) {
    let resposta = (prompt('Tem certeza que quer alugar ou devolver? digite sim para confirmar'))
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    
    if (resposta != 'sim') {
        alert('aluguel ou devoluçao cancelada')

    } else if (botao.classList.contains("dashboard__item__button--return")) {
        botao.classList.remove("dashboard__item__button--return");
        imagem.classList.remove("dashboard__item__img--rented");
        botao.textContent = 'Alugar'
        quantidadealugados = quantidadealugados - 1;
        console.log(`jogos alugados: ${quantidadealugados}`)

    } else if (resposta = 1) {
        botao.classList.add("dashboard__item__button--return");
        imagem.classList.add("dashboard__item__img--rented");
        quantidadealugados = quantidadealugados + 1;
        botao.textContent = 'Devolver'
        console.log(`jogos alugados: ${quantidadealugados}`)
    }
}

let quantidadealugados = 1

console.log(`jogos alugados: ${quantidadealugados}`)