const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll("[data-estatistica]");

const pecas = {
  vitalidade: {
    Level: 1,
    PV: 29,
    PF: 0,
    Vigor: 0,
    "Capacidade máxima": 0,
    Dano: 0,
    Velocidade: 0,
    Magia: 0,
    "Dano Sagrado": 0,
    esmagador:13,
    cortante:0,
    perfurante:0,
    magico:0,
    relampago:0,
    sagrado:0,
  },
  mente: {
    Level: 1,
    PV: 0,
    PF: 16,
    Vigor: 0,
    "Capacidade máxima": 0,
    Dano: 0,
    Velocidade: 0,
    Magia: 0,
    "Dano Sagrado": 0,
    esmagador:0,
    cortante:0,
    perfurante:0,
    magico:15,
    relampago:11,
    sagrado:0,
  },
  tenacidade: {
    Level: 1,
    PV: 0,
    PF: 0,
    Vigor: 23,
    "Capacidade máxima": 14,
    Dano: 0,
    Velocidade: 0,
    Magia: 0,
    "Dano Sagrado": 0,
    esmagador:23,
    cortante:23,
    perfurante:23,
    magico:0,
    relampago:0,
   sagrado:0,
  },
  força: {
    Level: 1,
    PV: 0,
    PF: 0,
    Vigor: 0,
    "Capacidade máxima": 0,
    Dano: 15,
    Velocidade: 0,
    Magia: 0,
    "Dano Sagrado": 0,
    esmagador:11,
    cortante:11,
    perfurante:11,
    magico:0,
    relampago:0,
    sagrado:0,
  },
  destreza: {
    Level: 1,
    PV: 0,
    PF: 0,
    Vigor: 0,
    "Capacidade máxima": 0,
    Dano: 0,
    Velocidade: 2,
    Magia: 0,
    "Dano Sagrado": 0,
    esmagador:11,
    cortante:11,
    perfurante:11,
    magico:0,
    relampago:0,
    sagrado:0,
  },
  inteligência: {
    Level: 1,
    PV: 0,
    PF: 0,
    Vigor: 0,
    "Capacidade máxima": 0,
    Dano: 0,
    Velocidade: 0,
    Magia: 25,
    "Dano Sagrado": 0,
    esmagador:0,
    cortante:0,
    perfurante:0,
    magico:30,
    relampago:15,
    sagrado:0,
  },
  fé: {
    Level: 1,
    PV: 0,
    PF: 0,
    Vigor: 0,
    "Capacidade máxima": 0,
    Dano: 0,
    Velocidade: 0,
    Magia: 0,
    "Dano Sagrado": 25,
    esmagador:0,
    cortante:0,
    perfurante:0,
    magico:0,
    relampago:25,
    sagrado:30,
  },
}
controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.textContent, evento.target.parentNode);
    atualizaEstatistica(evento.target.dataset.peca, evento.target.textContent);
  });
});

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");

    if (operacao === "<" && peca.value > 0) {
        peca.value = parseInt(peca.value) - 1;
    } else if (operacao === ">") {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatistica(peca, operacao) {
    estatistica.forEach((elemento) => {
      const valor = parseInt(elemento.textContent);
      const modificador = pecas[peca][elemento.dataset.estatistica];
      const novoValor =
        operacao === ">"
          ? valor + modificador
          : valor - modificador;
  
      elemento.textContent = novoValor < 0 ? 0 : novoValor;
    });
  }