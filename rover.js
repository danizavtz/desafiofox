/*
Escolhi ter um objeto da classe Rover pois assim temos uma única fonte da verdade em nossa lógica e para validar o funcionamento do Rover.
Além de facilitar a manutenção do código, pois toda a lógica do funcionamento do rover fica contida em apenas um arquivo.
*/
class Rover {
    constructor(x, y, headIndicator) {
        this.x = x;
        this.y = y;
        this.headIndicator = headIndicator;
    }
    getCurrentPosition() {
        return `${this.x} ${this.y} ${this.headIndicator}`;
    }
    // relógio sentido anti-horário iniciando em 12h
    rotateLeft() {
        switch (this.headIndicator) {
            case 'N':
                return this.headIndicator = 'W';
            case 'W':
                return this.headIndicator = 'S';
            case 'S':
                return this.headIndicator = 'E';
            case 'E':
                return this.headIndicator = 'N';
        }
    }
    //relógio sentido horário iniciando em 12h
    rotateRight() {
        switch (this.headIndicator) {
            case 'N':
                return this.headIndicator = 'E';
            case 'E':
                return this.headIndicator = 'S';
            case 'S':
                return this.headIndicator = 'W';
            case 'W':
                return this.headIndicator = 'N';
        }
    }
    move() {
        switch (this.headIndicator) {
            case 'N':
                this.y += 1;
                break;
            case 'S':
                this.y -= 1;
                break;
            case 'E':
                this.x += 1;
                break;
            case 'W':
                this.x -= 1;
                break;
        }
    }
    processCommands(comands) {
        for (let i = 0; i < comands.length; i++) {
            switch (comands[i]) {
                case 'L':
                    this.rotateLeft();
                    break;
                case 'R':
                    this.rotateRight();
                    break;
                case 'M':
                    this.move();
                    break;
            }
        }
    }
}

module.exports.Rover = Rover
