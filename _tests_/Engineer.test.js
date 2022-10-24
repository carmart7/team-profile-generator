const Engineer = require('../src/Engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it('Should create an object with a name, id, email, and attached', () => {
            const engineer = new Engineer('Jake', '3242', 'fake@email.com', 'carmart7')
    
            expect(engineer.name).toEqual('Jake');
            expect(engineer.id).toEqual('3242');
            expect(engineer.email).toEqual('fake@email.com');
            expect(engineer.github).toEqual('carmart7');
        });
    });

    describe('get name', () => {
        it('Should return engineer name', () => {
            const engineer = new Engineer('Jake', '3242', 'fake@email.com', 'carmart7')
    
            expect(engineer.getName()).toEqual('Jake');
        });
    });

    describe('get id', () => {
        it('Should return engineer id', () => {
            const engineer = new Engineer('Jake', '3242', 'fake@email.com', 'carmart7')
    
            expect(engineer.getId()).toEqual('3242');
        });
    });

    describe('get email', () => {
        it('Should return engineer email', () => {
            const engineer = new Engineer('Jake', '3242', 'fake@email.com', 'carmart7')
    
            expect(engineer.getEmail()).toEqual('fake@email.com');
        });
    });

    describe('get role', () => {
        it('Should return engineer role', () => {
            const engineer = new Engineer('Jake', '3242', 'fake@email.com', 'carmart7')
    
            expect(engineer.getRole()).toEqual('Engineer');
        });
    });

    describe('get github', () => {
        it('Should return engineer github', () => {
            const engineer = new Engineer('Jake', '3242', 'fake@email.com', 'carmart7')
    
            expect(engineer.getGithub()).toEqual('carmart7');
        });
    });
});