var texto = "Francisco Wilson Alves Rodrigues";
var textoElemento = document.querySelector(".meu-nome");
var atraso = 200;

var contadorDeLetras = 0;

function escreverTexto(){
    if (contadorDeLetras < texto.length) {
        textoElemento.textContent += texto.charAt(contadorDeLetras);
        contadorDeLetras++;
        setTimeout(escreverTexto, atraso);

    }
}

escreverTexto();
