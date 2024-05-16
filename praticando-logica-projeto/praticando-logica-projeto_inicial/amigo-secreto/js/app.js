var amigosadicionados = [];
var amigossorteados = [];
var lista = document.getElementById('lista-amigos');
console.log(amigosadicionados.length)
console.log(amigossorteados.length)

function adicionar() {
    var amigo = document.getElementById('nome-amigo').value;
    if (amigosadicionados.includes(amigo)) {
        alert('esse nome ja existe')
        return;
    }
    if (amigo != "") {
        if (lista.innerHTML == "") {
            lista.innerHTML = amigo
        } else {
            lista.innerHTML = `${lista.innerText}, ${amigo}`
        };
        amigosadicionados.push(amigo);
        amigossorteados.push(amigo);
        console.log(amigosadicionados);
        console.log(amigossorteados);
    } else {
        alert('seu amigo nao tem nome amigao???')
    }
}
var listasorteio = document.getElementById('lista-sorteio');;

function sortear() {
    if (amigosadicionados.length >= 4) {
        while (amigosadicionados.length != 0) {
            var elementoaleatorio = parseInt(Math.floor(Math.random() * amigosadicionados.length));
            var amigoaleatorio = amigosadicionados[elementoaleatorio];
            var elementoaleatorio2 = parseInt(Math.floor(Math.random() * amigossorteados.length));
            var amigoaleatorio2 = amigossorteados[elementoaleatorio2];
            if (amigoaleatorio != amigoaleatorio2) {
                listasorteio.innerHTML = listasorteio.innerHTML + `${amigoaleatorio} tirou ${amigoaleatorio2},   `;
                amigosadicionados.splice(elementoaleatorio, 1);
                amigossorteados.splice(elementoaleatorio2, 1);

            }
        }
    }
     else {
        alert('Numero de participantes minimo e 4')
    }
}

function reiniciar() {
    amigosadicionados.length = 0;
    amigossorteados.length = 0;
    lista.innerHTML = ""
    listasorteio.innerHTML = ''
    console.log(amigosadicionados);


}
  