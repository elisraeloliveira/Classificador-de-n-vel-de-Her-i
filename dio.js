
let nome = "Elisrael23";
let xp = 9000;  

var nivel;
if (xp < 1000) {
    nivel = "Ferro"
    console.log("Se seu XP é menor do que 1.000, então o nível é Ferro")
} 

else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze"
    console.log("Se seu XP é entre 1.001 e 2.000, então o nível é Bronze")
}

else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata"
    console.log("Se seu XP é entre 2.001 e 5.000, então o nível é Prata")
}

else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro"
    console.log("Se seu XP é entre 5.001 e 7.000, então o nível é Ouro")
}

else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina"
    console.log("Se seu XP é entre 7.001 e 8.000, então o nível é Platina")
}

else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente"
    console.log("Se seu XP é entre 8.001 e 9.000, então o nível é Ascendente")
}

else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal"
    console.log("Se seu XP é entre 9.001 e 10.000, então o nível é Imortal")
}

else  
    {
    nivel = "Radiante"
    console.log("Se seu XP é maior ou igual a 10.001, então o nível é Radiante")
}


console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
