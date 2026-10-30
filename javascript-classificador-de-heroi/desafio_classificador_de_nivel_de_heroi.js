let nomeHeroi = "Exemplo";
let xp = 3500;
let nivel = "";

if (xp < 1000) {
	nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
	nivel = "Bronze";
} else if (xp >= 2001 && xp <= 3000) {
	nivel = "Prata";
} else if (xp >= 3001 && xp <= 4000) {
	nivel = "Ouro";
} else if (xp >= 4001 && xp <= 5000) {
	nivel = "Diamante";
} else if (xp >= 5001 && xp <= 10000) {
	nivel = "Mestre";
} else if (xp > 10000) {
	nivel = "Lendário";
}

console.log(`O herói de nome ${nomeHeroi} está no nível ${nivel}`);