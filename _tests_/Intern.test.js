const Intern = require('../src/Intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it('Should create an object with a name, id, email, and school', () => {
            const intern = new Intern('Jake', '3242', 'fake@email.com', 'Berkeley')
    
            expect(intern.name).toEqual('Jake');
            expect(intern.id).toEqual('3242');
            expect(intern.email).toEqual('fake@email.com');
            expect(intern.school).toEqual('Berkeley');
        });
    });

    describe('get name', () => {
        it('Should return intern name', () => {
            const intern = new Intern('Jake', '3242', 'fake@email.com', 'Berkeley')
    
            expect(intern.getName()).toEqual('Jake');
        });
    });

    describe('get id', () => {
        it('Should return intern id', () => {
            const intern = new Intern('Jake', '3242', 'fake@email.com', 'Berkeley')
    
            expect(intern.getId()).toEqual('3242');
        });
    });

    describe('get email', () => {
        it('Should return intern email', () => {
            const intern = new Intern('Jake', '3242', 'fake@email.com', 'Berkeley')
    
            expect(intern.getEmail()).toEqual('fake@email.com');
        });
    });

    describe('get role', () => {
        it('Should return intern role', () => {
            const intern = new Intern('Jake', '3242', 'fake@email.com', 'Berkeley')
    
            expect(intern.getRole()).toEqual('Intern');
        });
    });

    describe('get github', () => {
        it('Should return intern school', () => {
            const intern = new Intern('Jake', '3242', 'fake@email.com', 'Berkeley')
    
            expect(intern.getSchool()).toEqual('Berkeley');
        });
    });
});