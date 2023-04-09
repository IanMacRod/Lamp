var lamp = window.document.getElementById('lampada')

function estaQuebrada() {
    return lamp.src.indexOf('brk') > -1
}

function ligar() {
    if(!estaQuebrada())
    lamp.src = 'on.png'
}

function desligar() {
    if(!estaQuebrada())
    lamp.src = 'off.png'
}

lamp.addEventListener('click', quebrar)
function quebrar() {
    lamp.src = 'brk.png'
}

