// Objetivo: Combinar repetição, entrada de dados e acumulador.

// Uma equipe registrou o tempo, em minutos, de seis atendimentos técnicos e deseja calcular a média.

// O programa deve:
// parte 1
// ☐ Criar um acumulador iniciado em zero.

// parte2
// ☐ Usar um laço para solicitar exatamente 6 tempos.

// parte3
// ☐ Somar cada valor ao acumulador.

// parte4
// ☐ Calcular a média ao final.

// parte5
// ☐ Exibir a soma dos tempos e a média.

const entrada = require("readline-sync");
console.log('===REGISTRO DE TEMPO===')
let acumulo = 0;

for (let tempo = 0; tempo <=5; tempo++){
    const atendimento = entrada.questionFloat(`Digite o tempo ${tempo+1}: `);
    acumulo += atendimento;
}

const media = acumulo / 6;

console.log("RESUMO DA ÓPERA");
console.log(`SOMA: ${acumulo}`);
console.log(`MEDIA: ${media}`);



