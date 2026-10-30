function calcularNivel(vitorias, derrotas) {
	const saldo = vitorias - derrotas;
	let nivel = "";

	if (vitorias < 10) {
		nivel = "Ferro";
	} else if (vitorias < 20) {
		nivel = "Bronze";
	} else if (vitorias < 30) {
		nivel = "Prata";
	} else if (vitorias < 40) {
		nivel = "Ouro";
	} else if (vitorias < 50) {
		nivel = "Diamante";
	} else if (vitorias < 100) {
		nivel = "Mestre";
	} else {
		nivel = "Lendário";
	}

	return `O Herói tem saldo de ${saldo} e está no nível de ${nivel}`;
}

console.log(calcularNivel(55, 10));