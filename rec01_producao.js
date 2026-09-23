// EXERCÍCIO 01 - Produção diária de embalagens	Nível 1; 6 pts

// Objetivo: Revisar variáveis, operações matemáticas e saída de dados.

// Uma máquina de embalagem produz uma quantidade fixa de caixas por hora. Crie um programa que calcule quantas caixas serão produzidas durante um dia de trabalho.

// O programa deve:
// ☐ Criar uma variável para a quantidade de caixas produzidas por hora.
// ☐ Criar uma variável para a quantidade de horas trabalhadas no dia.
// ☐ Calcular a produção total.
// ☐ Exibir uma frase informando caixas por hora, horas trabalhadas e total produzido.

const entrada = require ('readline-sync');

const caixa = entrada.questionInt("Quantas caixas foram produzidas? ")
const horas = entrada.questionInt("Qual foi a quantidade de horas trabalhadas? ")
const producaoTotal = caixa * horas

console.log("== CALCULO DE PRODUCAO ==");
console.log(`O tempo de servico foi de ${horas} e a quantidade de caixas foram ${caixa}.`);
console.log(`Portento a producao total foi de ${producaoTotal}`);
