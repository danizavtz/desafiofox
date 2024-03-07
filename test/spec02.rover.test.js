const expect = require('chai').expect;
const { Rover } = require('../rover');

describe('#Rover', () => {
    describe('Check method getCurrentPosition is working', () => {
        it('Check constructor build object with success', (done) => {
            const rover = new Rover(0, 0, 'S')
            expect(rover.getCurrentPosition()).equal('0 0 S');
            done();
        });
        it('Check constructor build object with success wihtout args', (done) => {
            const rover = new Rover()
            expect(rover.getCurrentPosition()).equal('undefined undefined undefined');
            done();
        });
    });
    describe('Check rover rotation is working', () => {
        it('Check rover heading North change to West on command L', (done) => {
            const rover = new Rover(0, 0, 'N');
            rover.rotateLeft()
            expect(rover.getCurrentPosition()).equal('0 0 W');
            done();
        });
        it('Check rover heading North change do East on command R', (done) => {
            const rover = new Rover(0, 0, 'N');
            rover.rotateRight();
            expect(rover.getCurrentPosition()).equal('0 0 E');
            done();
        });
        it('Check rover heading South change to East on command L', (done) => {
            const rover = new Rover(0, 0, 'S');
            rover.rotateLeft()
            expect(rover.getCurrentPosition()).equal('0 0 E');
            done();
        });
        it('Check rover heading South change do West on command R', (done) => {
            const rover = new Rover(0, 0, 'S');
            rover.rotateRight();
            expect(rover.getCurrentPosition()).equal('0 0 W');
            done();
        });
        it('Check rover heading East change to North on command L', (done) => {
            const rover = new Rover(0, 0, 'E');
            rover.rotateLeft()
            expect(rover.getCurrentPosition()).equal('0 0 N');
            done();
        });
        it('Check rover heading East change do South on command R', (done) => {
            const rover = new Rover(0, 0, 'E');
            rover.rotateRight();
            expect(rover.getCurrentPosition()).equal('0 0 S');
            done();
        });
        it('Check rover heading West change to North on command L', (done) => {
            const rover = new Rover(0, 0, 'W');
            rover.rotateLeft()
            expect(rover.getCurrentPosition()).equal('0 0 S');
            done();
        });
        it('Check rover heading West change do South on command R', (done) => {
            const rover = new Rover(0, 0, 'W');
            rover.rotateRight();
            expect(rover.getCurrentPosition()).equal('0 0 N');
            done();
        });
    });
    describe('Check rover movimentation', () => {
        it('Check rover movement to Nort', (done) => {
            const rover = new Rover(0, 0, 'N');
            rover.move()
            expect(rover.getCurrentPosition()).equal('0 1 N');
            done();
        });
        it('Check rover movement to South', (done) => {
            const rover = new Rover(0, 0, 'S');
            rover.move()
            expect(rover.getCurrentPosition()).equal('0 -1 S');
            done();
        });
        it('Check rover movement to West', (done) => {
            const rover = new Rover(0, 0, 'W');
            rover.move()
            expect(rover.getCurrentPosition()).equal('-1 0 W');
            done();
        });
        it('Check rover movement to East', (done) => {
            const rover = new Rover(0, 0, 'E');
            rover.move()
            expect(rover.getCurrentPosition()).equal('1 0 E');
            done();
        });
    });
    describe('Check rover proccess commands', () => {
        it('Check rover commands processing walking foward north', (done) => {
            const rover = new Rover(0, 0, 'N');
            rover.processCommands('MMMM')
            expect(rover.getCurrentPosition()).equal('0 4 N');
            done();
        });
        it('Check rover commands processing walking foward east', (done) => {
            const rover = new Rover(0, 0, 'E');
            rover.processCommands('MMMM')
            expect(rover.getCurrentPosition()).equal('4 0 E');
            done();
        });
        it('Check rover commands processing 360 spin left', (done) => {
            const rover = new Rover(0, 0, 'N');
            rover.processCommands('LLLL')
            expect(rover.getCurrentPosition()).equal('0 0 N');
            done();
        });
        it('Check rover commands processing circle spin left', (done) => {
            const rover = new Rover(3, 3, 'E');
            rover.processCommands('MLMLMLML');
            expect(rover.getCurrentPosition()).equal('3 3 E');
            done();
        });
        it('Check rover commands processing step by step', (done) => {
            const rover = new Rover(3, 3, 'E');
            rover.processCommands('M');
            expect(rover.getCurrentPosition()).equal('4 3 E');
            rover.processCommands('R');
            expect(rover.getCurrentPosition()).equal('4 3 S')
            done();
        });
    });
});