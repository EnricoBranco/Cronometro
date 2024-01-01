const botoes = document.querySelectorAll('button')
const timer = document.querySelector('.cronometro')
let intervalo
let segundos = 0

botoes[0].addEventListener('click', () => {
    iniciarTimer()
})

botoes[1].addEventListener('click', () => {
    pausarTimer()
})

botoes[2].addEventListener('click', () => {
    resetarTimer()
})

function iniciarTimer() {   
    if(!intervalo) {
        intervalo = setInterval(atualizarTimer, 1000)
    }
}

function atualizarTimer() {
    if (intervalo) {
    segundos += 1}
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;
    const tempoFormatado = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`;
    timer.innerHTML = tempoFormatado;
}

function pausarTimer() {
    clearInterval(intervalo);
    intervalo = null;
}

function resetarTimer() {
    pausarTimer()
    segundos = 0
    atualizarTimer()
}

atualizarTimer()

