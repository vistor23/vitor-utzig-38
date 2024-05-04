// Adiciona a classe "ativo" ao botão clicado e remove de todos os outros
const botoes = document.querySelectorAll(".botao");
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function() {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
        }
        this.classList.add("ativo");
    };
}

// Configuração do contador
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");

// Atualiza o contador a cada segundo
setInterval(() => {
    contadores[0].textContent = calculaTempo(tempoObjetivo1);
}, 1000);

// Função para calcular o tempo restante
function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
    
    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    
    return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
}