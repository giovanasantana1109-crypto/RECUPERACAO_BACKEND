// EXERCÍCIO 05 - Projeção de produção por ciclo	Nível 3;	10 pts

// Objetivo: Utilizar laço de repetição para gerar uma sequência de resultados.

// Uma esteira produz uma quantidade fixa de produtos por ciclo. O supervisor quer visualizar a produção acumulada dos ciclos 1 até 12.

// O programa deve:
// parte1
// ☐ Solicitar quantos produtos são produzidos por ciclo.
// parte2
// ☐ Usar um laço for de 1 até 12.
// parte3
// ☐ Exibir, em cada ciclo, o número do ciclo e a produção acumulada.

// ☐ Não escrever manualmente as doze linhas.

const entrada = require ('readline-sync');

const produ = entrada.questionInt("Quais produtos serao produzidos? ");

console.log("== BEM-VINDO AO CICLO TOTAL DE PRODUÇÃO ==");

for (let ciclo = 1; ciclo <= 12; ciclo++){
    const acumu = produ * ciclo
    console.log("==  ==");
    console.log(`Ciclo: ${ciclo}; Produto: ${acumu}`);
}
