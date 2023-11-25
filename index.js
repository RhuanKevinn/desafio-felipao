let nome = " Felipão " 
let xp = 1
let nivel = "x"

switch (xp == xp){

    case (xp <=1000):
        nivel = "ferro";
        break;
    case (xp >= 1001 && xp <= 2000):
        nivel = "Bronze";
        break;
    case (xp >= 2001 && xp <= 5000):
         nivel = "Prata";
        break;
     case (xp >= 6001 && xp <= 7000):
         nivel = "ouro";
        break;
    case (xp >= 7001 && xp <= 8000):
        nivel = "platina";
        break;
    case (xp >= 8001 && xp <= 9000):
        nivel = "Ascendente";
        break;
    case (xp >= 9001 && xp <= 10000):
        nivel = "Radiante";
        break;
    default:
        nivel = "Imortal";
        break;
    
}

console.log("O Herói de nome" + nome +"está no nível de " + nivel);