let order = [];
let clickedOrder = [];
let score = 0;

// 0 - verde
//1 - vermelho
// 2 - amarelo
//3 - azul
const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('green')
const yellow = document.querySelector('.yellow')

//criando a ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);

    }

}

//acende a próxima cor
let lightColor = (element, Number) => {
    Number = Number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, Number - 250);
    setTimeout(()=> {
        element.classList.remove('selected');
    });
}

//checa se o jogador acertou
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\n/nVocê acertou! Iniciando próximo nível`);
        nextLevel();
    }
}

// funcao para click do usuário
let  click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);

    
    
}

//criar funcao que retorna a cor

let createColorElement = (color) => {
if (color == 0) {
    return green;

} else if (color == 1){
    return red;

} else if (color == 2) {
    return yellow;
} else if (color == 3) {
    return blue;
}
}

// funcao de nível
let nextLevel = () => {
    score++;
    shuffleOrder
}

// funcao de perder o jogo
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];
    playGame();
}

let playGame = () => {
    alert('Bem vindo ao Genius! Iniciando Novo Jogo!');
    score = 0;

    nextLevel();


}



green.onclick = () => click (0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();