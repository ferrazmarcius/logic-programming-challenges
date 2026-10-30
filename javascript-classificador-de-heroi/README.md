# Classificador de Nível de Herói

Um projeto simples em JavaScript para classificar o nível de um herói com base em sua quantidade de Experiência (XP).

## 🚀 Sobre o Projeto

Este script foi criado como um exercício prático para demonstrar o uso de estruturas condicionais (`if/else if`) em JavaScript para determinar o nível de um personagem em um jogo ou sistema, com base em pontos de experiência (XP).

## ✨ Funcionalidades

* Recebe a quantidade de XP de um herói.
* Determina o nível do herói com base em faixas predefinidas de XP.
* Exibe o nome do herói e seu nível no console.

## 📊 Estrutura de Níveis (XP)

| Nível     | XP Necessário      |
| :-------- | :----------------- |
| Ferro     | Menor que 1.000    |
| Bronze    | 1.001 a 2.000      |
| Prata     | 2.001 a 3.000      |
| Ouro      | 3.001 a 4.000      |
| Diamante  | 4.001 a 5.000      |
| Mestre    | 5.001 a 10.000     |
| Lendário  | Maior que 10.000   |

## 🛠️ Tecnologias Utilizadas

* **JavaScript**

## 💻 Como Usar

1.  **Clone este repositório** (se estiver hospedado em um). Se for apenas o arquivo, salve o código em um arquivo `.js` (ex: `classificadorHeroi.js`).
2.  **Abra o arquivo** `classificadorHeroi.js` em um editor de texto.
3.  **Modifique as variáveis `nomeHeroi` e `xp`** com os valores desejados para testar diferentes heróis e XPs.

    ```javascript
    let nomeHeroi = "SeuHerói"; // Mude o nome do herói aqui
    let xp = 7500;             // Mude a quantidade de XP aqui
    ```

4.  **Execute o script:**
    * **Via Node.js:** Se você tem o Node.js instalado, abra seu terminal/prompt de comando na pasta onde salvou o arquivo e execute:
        ```bash
        node classificadorHeroi.js
        ```
    * **Via Console do Navegador:** Abra as ferramentas de desenvolvedor do seu navegador (geralmente `F12`), vá na aba "Console" e cole o código para executá-lo diretamente.
