// EXERCÍCIO 04 - Classificação de vibração		Nível 2;	8 pts

// Objetivo: Utilizar if, else if e else em uma regra de negócio.
// parte1
// Um sensor mede o nível de vibração de um equipamento em mm/s.

// O programa deve:
// parte2
// ☐ Até 3 mm/s: situação ESTÁVEL.
// ☐ Acima de 3 até 6 mm/s: situação ATENÇÃO.
// ☐ Acima de 6 mm/s: situação CRÍTICA.
// parte 1
// ☐ Solicitar o valor da vibração pelo terminal.
// parte3
// ☐ Exibir o valor informado e a classificação.

const entrada = require ('readline-sync');

const vibracao = entrada.questionFloat("Valor do nivel de vibracao de sensor: ");


console.log(`RELATORIO`);
console.log(`Vibracao: ${vibracao}`);

if ( vibracao <= 3){
    console.log("Situação ESTÁVEL");
}else if (vibracao <= 6 && vibracao >3){
    console.log("Situação ATENÇÃO");
}else {
    console.log("Situação CRÍTICA");
};
