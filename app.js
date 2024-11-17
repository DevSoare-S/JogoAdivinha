alert('Bem vindo Jogador');

let numeroMaximo = 5000;

let numeroSecreto = parseInt(Math.random() * numeroMaximo +1);

let chute;

let tentativas = 1;

while (chute != numeroSecreto) {

    chute = prompt(`Encontre um número de 1 ao ${numeroMaximo}`);

    if (chute == numeroSecreto) {
        break;
    }

    else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        }

        else {
            alert(`O número secreto é maior que ${chute}`);
        }

        tentativas++;
    }

    
};

let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';

alert(`Parabéns, você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

