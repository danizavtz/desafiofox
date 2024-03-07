const expect = require('chai').expect;
const app = require('../index.js');

describe('#FileReadByLine', () => {
    describe('ReadDataFile', () => {
        it('Check first input works with success', (done) => {
            const mocktestpath = __dirname + '/mocks/data1.txt';
            app.processLineByLine(mocktestpath).then((value) => {
                expect(value).equal('1 3 N');
                done();
            });
        });
        it('Check second input works with success', (done) => {
            const mocktestpath = __dirname + '/mocks/data2.txt';
            app.processLineByLine(mocktestpath).then((value) => {
                expect(value).equal('5 1 E');
                done();
            });
        });
        it('Check file does not exist', (done) => {
            const mocktestpath = __dirname + '/mocks/notfound.txt';
            app.processLineByLine(mocktestpath).catch((value) => {
                expect(value).contains('no such file or directory');
                done();
            });
        });
    });
});