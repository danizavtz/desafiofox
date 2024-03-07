const fs = require('fs');
const readline = require('readline');
const { Rover } = require('./rover');
let tamanhoPlateauX = null;
let tamanhoPlateauY = null;
let posicaoInicialX = null;
let posicaoInicialY = null;
let posicaoInicial = null;

const processLineByLine = async (filepath) => {
    try {
        const fileStream = fs.createReadStream(filepath);

        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });
        const output = [];
        for await (const line of rl) {
            /*
            Ao ler o arquivo linha a linha, cheguei a conclusão que ao fazer o split da linha por espaço em branco, possuo três situações:

            array tamanho 1 possui comandos de direção que o Rover deve executar, essa entrada não possui espaços em branco. Gerando um array com apenas 1 posição.
            array tamanho 2 possui o tamanho do plateau
            array tamanho 3 possui posição inicial (x e y) e para onde o rover está apontando

            Dessa forma é possível receber as entradas com poucas situações de contorno e reusando a lógica de ser necessário fazer o split já que escolhi tratar os valores como inteiros, então este passo também seria necessário para fazer o parse da entrada
            */
            const parsedArrayData = line.split(' ');
            if (parsedArrayData.length === 1) {
                const rover = new Rover(posicaoInicialX, posicaoInicialY, posicaoInicial);
                rover.processCommands(parsedArrayData[0]);
                output.push(rover.getCurrentPosition());
            } else if (parsedArrayData.length === 2) {
                tamanhoPlateauX = parseInt(parsedArrayData[0]);
                tamanhoPlateauY = parseInt(parsedArrayData[1]);
            } else if (parsedArrayData.length === 3) {
                posicaoInicialX = parseInt(parsedArrayData[0]);
                posicaoInicialY = parseInt(parsedArrayData[1]);
                posicaoInicial = parsedArrayData[2];
            }
        }
        return output.join('\n');
    } catch (err) {
        return Promise.reject(err.message);
    }
}
module.exports = { processLineByLine };
