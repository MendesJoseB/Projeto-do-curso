let numerodeingressosinferior = 400
let numerodeingressossuperior = 200;
let numerodeingressospista = 100;


function comprar() {
    let ingresso = document.getElementById("tipo-ingresso").value;
let quantidade = parseInt(document.getElementById("qtd").value);
let quantidadeinferior = document.getElementById("qtd-inferior")
let quantidadesuperior = document.getElementById("qtd-superior")
let quantidadepista = document.getElementById("qtd-pista")
if (quantidade > 0) {
       
;
         if (ingresso.includes("inferior")) { 
             numerodeingressosinferior = numerodeingressosinferior - quantidade
             if (numerodeingressosinferior >= 0 ) {
                quantidadeinferior.textContent = numerodeingressosinferior;}
                else { quantidadeinferior.innerHTML = "compra invalida";}
; 
       ; }
        
    

    if (ingresso.includes("superior")) {
        numerodeingressossuperior = numerodeingressossuperior - quantidade;
        if (numerodeingressossuperior >= 0 ) {
            quantidadesuperior.textContent = numerodeingressossuperior}
            else { quantidadesuperior.textContent = "compra invalida"}
        }
;

   if (ingresso.includes("pista")) { 
             
    numerodeingressospista = numerodeingressospista - quantidade;
    if (numerodeingressospista >= 0 ) {
        quantidadepista.textContent = numerodeingressospista;}
        else { quantidadepista.textContent = "compra invalida"}
; 
}
}
 else (alert (`Não é possivel comprar ${quantidade} ingressos`))}

