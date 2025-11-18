
function classificador(nome, xp) {
    
switch (true) {
    case (xp <= 1000):
        console.log(`${nome}, VOCê ESTÁ NO NÍVEL FERRO!`);
        break;
    case (xp >= 1001 && xp <= 2000):
        console.log(`${nome}, VOCÊ ESTÁ NO NÍVEL BRONZE!`);
        break;
    case (xp >= 2001 && xp <= 5000):
        console.log(`${nome}, VOCÊ ESTÁ NO NÍVEL PRATA!`);
        break;
    case (xp >= 5001 && xp <= 8000):
        console.log(`${nome}, VOCÊ ESTÁ NO NÍVEL PLATINA DIAMANTE!`);
        break;
    case (xp >= 8001 && xp <= 9000):
        console.log(`${nome}, VOCÊ ESTÁ NO NÍVEL ASCENDENTE!`);
        break;
    case (xp >= 9001 && xp <= 10000):
        console.log(`${nome}, VOCÊ ESTÁ NO NÍVEL IMORTAL!`);
        break;
    case (xp >= 10001):
    default:
        console.log("Nível desconhecido.");
        break;

    
}
    console.log("O Heroi de nome " + nome + " está no nível " + xp + " de experiência.");
}

classificador("Hércules", 7500);


