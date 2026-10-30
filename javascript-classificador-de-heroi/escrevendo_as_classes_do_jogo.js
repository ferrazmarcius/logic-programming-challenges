class Heroi {
    constructor(nome, idade, tipo, poder, vida, forca, agilidade, inteligencia, habilidade) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.poder = poder;
        this.vida = vida;
        this.forca = forca;
        this.agilidade = agilidade;
        this.inteligencia = inteligencia;
        this.habilidade = habilidade;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case "Guerreiro":
                ataque = "um golpe poderoso";
                break;
            case "Mago":
                ataque = "um feitiço devastador";
                break;
            case "Arqueiro":
                ataque = "uma flecha certeira";
                break;
            case "Ladino":
                ataque = "um ataque sorrateiro";
                break;
            case "Monge":
                ataque = "um golpe ágil";
                break;
            case "Ninja":
                ataque = "um ataque furtivo";
                break;
            case "Paladino":
                ataque = "um ataque sagrado";
                break;
            default:
                ataque = "um ataque desconhecido";
                break;
        }

        const dano = Math.floor(Math.random() * 41) + 10; // Gera um número aleatório entre 10 e 50
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
        console.log(`O herói ${this.nome} atacou e causou ${dano} de dano!`);
    }
}