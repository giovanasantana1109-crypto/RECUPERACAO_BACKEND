// EXERCÍCIO 02 - Custo de materiais para

// Objetivo: Trabalhar com entrada de dados e cálculos numéricos.
// Uma equipe de manutenção precisa calcular o custo de um lote de peças de reposição.

// O programa deve:
// ☐ Importar a biblioteca readline-sync.
//  primeira parte
// ☐ Solicitar o nome da peça.
// ☐ Solicitar a quantidade comprada.
// ☐ Solicitar o preço unitário.
//  parte 2
// ☐ Calcular o valor total da compra.
// parte 3
// ☐ Exibir um resumo contendo nome, quantidade, preço unitário e total.

const entrada = require ('readline-sync');

const peca = entrada.question("Nome da peca: ");
const quant = entrada.question("Quantidade comprada: ");
const preUni = entrada.question("Seu preco Unitario: ");

const compTotal = quant * preUni

console.log("    ");
console.log("== Relatório do Custo de Lote ==");
console.log(`Nome: ${peca}`);
console.log(`Quantidade: ${quant}`);
console.log(`Preco Unitario: ${preUni}`);
console.log(`Custo Total: ${compTotal}`);
